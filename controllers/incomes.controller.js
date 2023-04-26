const connection = require('../config/db');

const incomes = {
    getAllIncomes(req, res) {
        let sql = 'select * from incomes'
        connection.query(sql, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unknown error'
                })
            }
            else {
                res.send(data); //adatküldés
            }
        });
    },
    getIncomesByUserId(req,res){
        const id = req.params.id;
        const sql = `SELECT * FROM incomes
                     WHERE userId = ?;`
        connection.query(sql,id, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unknown error'
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
    create(req, res) {
        const newIncome = {
            amount: req.body.amount,
            type: req.body.type,
            date: req.body.date,
            userId: req.session.user.id
        };
        const sql = 'insert into incomes set ?';
        connection.query(sql, newIncome, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unknown error'
                })
            }
            else {
                res.send(
                    {
                        id: data.insertId,
                        ...newIncome
                    }
                );
            }
        })
    },
    update(req, res) {
        const id = req.params.id;
        const income = {
            amount: req.body.amount,
            type: req.body.type,
            date: req.body.date,
        }
        const sql = "update incomes set amount = ?, type = ?, date = ? where id = ?";
        connection.query(
            sql,
            [income.amount, income.type, income.date, id],
            (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Unkown error'
                    })
                }
                else {
                    if (data.affectedRows == 0) {
                        res.status(404).send({
                            message: `Not found income with id: ${req.params.id}.`
                        });
                    }
                    res.send({
                        id: id,
                        ...income
                    })
                }
            }
        );
    },
    delete(req, res) {
            const id = req.params.id;
            const sql = 'delete from incomes where id = ?'
            connection.query(
                sql,
                id,
                (err, data) => {
                    if (err) {
                        res.status(500).send({
                            message: err.message || 'Unknown error'
                        })
                    }
                    else {
                        if (data.affectedRows == 0) {
                            res.status(404).send({
                                message: `Not found income with id: ${req.params.id}.`
                            });
                            return;
                        }
                        res.send({
                            message: "Income was successfully deleted!"
                    })
                }
            }
        )
    },
}
module.exports = incomes;