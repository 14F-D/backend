const connection = require('../config/db');

const tags = {
    getAllTags(req, res) {
        let sql = 'select * from tags'
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
    getTagById(req,res){
        const id = req.params.id;
        const sql = `SELECT * FROM tags
                     WHERE id = ?;`
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
        const newTag = {
            name: req.body.name
        };
        const sql = 'insert into tags set ?';
        connection.query(sql, newTag, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unknown error'
                })
            }
            else {
                res.send(
                    {
                        id: data.insertId,
                        ...newTag
                    }
                );
            }
        })
    },
    update(req, res) {
        const id = req.params.id;
        const tag = {
            name: req.body.name
        }
        const sql = "update tags set name = ? where id = ?";
        connection.query(
            sql,
            [tag.name, id],
            (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Unkown error'
                    })
                }
                else {
                    if (data.affectedRows == 0) {
                        res.status(404).send({
                            message: `Not found tag with id: ${req.params.id}.`
                        });
                    }
                    res.send({
                        id: id,
                        ...tag
                    })
                }
            }
        );
    },
    delete(req, res) {
            const id = req.params.id;
            const sql = 'delete from tags where id = ?'
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
                                message: `Not found tag with id: ${req.params.id}.`
                            });
                            return;
                        }
                        res.send({
                            message: "Tag was successfully deleted!"
                    })
                }
            }
        )
    },
}
module.exports = tags;