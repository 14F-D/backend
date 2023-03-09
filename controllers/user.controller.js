const connection = require('../config/db');
const bcrypt = require('bcryptjs');

const users = {
    getAllUsers(req, res) {
        let sql = 'select * from users'
        connection.query(sql, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unkown error'
                })
            }
            else {
                res.send(data); //adatküldés
            }

        });
    },
    getUsersById(req, res) {
        const id = req.params.id;
        const sql = 'select * from users where id = ?'
        connection.query(sql, id, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unkown error'
                })
            }
            else {
                if (data.length == 0) {
                    res.status(404).send({
                        message: 'Not found.'
                    });
                    return;
                }
                res.send(data);
            }
        });
    },


    register(req, res) {
        const { username, password, email } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = { username, password: hashedPassword, email, role: "standard" };

        connection.query('INSERT INTO users SET ?', user, (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'An error occurred' });
            } else {
                res.status(200).json({ message: 'User registered successfully' });
            }
        });
    },
    login(req, res) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Find user in database
        connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
            if (err) {
                throw err;
            }
            if (results.length === 0) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Compare passwords
            const user = results[0];
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) {
                    throw err;
                }
                if (!match) {
                    return res.status(401).json({ message: 'Invalid username or password' });
                }

                // Create session
                req.session.user = {
                    id: user.id,
                    username: user.username
                };
                res.json({ message: 'Logged in successfully' });
            });
        });
    },
    logout(req,res){
        if (req.session.user) {
            req.session.destroy();
            res.json({ message: 'Logged out successfully' });
        }
        else{
            res.json({message:'Unauthorized'})
        }
    },


    update(req, res) {
        if (validate(req, res)) { return }
        const id = req.params.id;
        const user = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        }
        const sql = "update users set username = ?, password = ?, email = ? where id = ?";
        connection.query(
            sql,
            [user.username, user.password, user.email, id],
            (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Unkown error'
                    })
                }
                else {
                    if (data.affectedRows == 0) {
                        res.status(404).send({
                            message: `Not found user with id: ${req.params.id}.`
                        });
                    }
                    res.send({
                        id: id,
                        ...user
                    })
                }
            }
        );
    },
    delete(req, res) {
        const id = req.params.id;
        const sql = 'delete from users where id = ?'
        connection.query(
            sql,
            id,
            (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Unkown error'
                    })
                }
                else {
                    if (data.affectedRows == 0) {
                        // nincs ilyen ID-jü rekord
                        res.status(404).send({
                            message: `Not found user with id: ${req.params.id}.`
                        });
                        return; //kilépés a fv-ből
                    }
                    res.send({
                        message: "User was successfully deleted!"
                    })
                }
            }
        )
    },
}

function validate(req, res) {
    //console.log(req.body)
    if (JSON.stringify(req.body) == {}) {
        res.status(400).send({
            message: 'Content cannot be empty!'
        });
        return true;
    }
    if (req.body.username == '') {
        res.status(400).send({
            message: 'Username required!'
        });
        return true;
    }
    if (req.body.password == '') {
        res.status(400).send({
            message: 'Password required!'
        });
        return true;
    }
    if (req.body.email == '') {
        res.status(400).send({
            message: 'Email required!'
        });
        return true;
    }
}

module.exports = users;