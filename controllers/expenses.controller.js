const connection = require('../config/db');

const expenses = {
    getAllExpenses(req, res) {
        let sql = 'select * from expenses'
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
    getExpensesByUserId(req,res){
        const id = req.params.id;
        const sql = `SELECT * FROM expenses
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
        const newExpense = {
            amount: req.body.amount,
            date: req.body.date,
            userId: req.session.user.id
        };
        const sql = 'insert into expenses set ?';
        connection.query(sql, newExpense, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unknown error'
                })
            }
            else {
                res.send(
                    {
                        id: data.insertId,
                        ...newExpense
                    }
                );
            }
        })
    },
    update(req, res) {
        const id = req.params.id;
        const expense = {
            amount: req.body.amount,
            date: req.body.date,
        }
        const sql = "update expenses set amount = ?, date = ? where id = ?";
        connection.query(
            sql,
            [expense.amount, expense.date, id],
            (err, data) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Unkown error'
                    })
                }
                else {
                    if (data.affectedRows == 0) {
                        res.status(404).send({
                            message: `Not found expense with id: ${req.params.id}.`
                        });
                    }
                    res.send({
                        id: id,
                        ...expense
                    })
                }
            }
        );
    },
    delete(req, res) {
            const id = req.params.id;
            const sql = 'delete from expenses where id = ?'
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
                                message: `Not found expense with id: ${req.params.id}.`
                            });
                            return;
                        }
                        res.send({
                            message: "Expense was successfully deleted!"
                    })
                }
            }
        )
    },
}
module.exports = expenses;

//SELECT * FROM expenses
//WHERE userId = 11 and MONTH(date) = MONTH(NOW());