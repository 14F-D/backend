const connection = require('../config/db');

const tagsExpenses = {
    getAll(req, res) {
        let sql = 'select * from tags_expenses'
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
    getByTagId(req,res){
        const tagId = req.params.tagId;
        const sql = `SELECT * FROM tags_expenses
                     WHERE tagId = ?;`
        connection.query(sql,tagId, (err, data) => {
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
    getByExpenseId(req,res){
        const id = req.params.expenseId;
        const sql = `SELECT * FROM tags_expenses
                     WHERE expenseId = ?;`
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
        const newTagsExpenses = {
            tagId: req.body.tagId,
            expenseId: req.body.expenseId
        };
        const sql = 'insert into tags_expenses set ?';
        connection.query(sql, newTagsExpenses, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unknown error'
                })
            }
            else {
                res.send(
                    {
                        id: data.insertId,
                        ...newTagsExpenses
                    }
                );
            }
        })
    },
    // update(req, res) {
    //     const id = req.params.id;
    //     const newTagsExpenses = {
    //         tagId: req.body.tagId,
    //         expenseId: req.body.tagId
    //     };
    //     const sql = "update tags set name = ? where id = ?";
    //     connection.query(
    //         sql,
    //         [tag.name, id],
    //         (err, data) => {
    //             if (err) {
    //                 res.status(500).send({
    //                     message: err.message || 'Unkown error'
    //                 })
    //             }
    //             else {
    //                 if (data.affectedRows == 0) {
    //                     res.status(404).send({
    //                         message: `Not found tag with id: ${req.params.id}.`
    //                     });
    //                 }
    //                 res.send({
    //                     id: id,
    //                     ...tag
    //                 })
    //             }
    //         }
    //     );
    // },
    delete(req, res) {
            const id = req.params.id;
            const sql = 'delete from tags_expenses where id = ?'
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
                                message: `Not found tagExpense with id: ${req.params.id}.`
                            });
                            return;
                        }
                        res.send({
                            message: "TagExpense was successfully deleted!"
                    })
                }
            }
        )
    },
}
module.exports = tagsExpenses;
