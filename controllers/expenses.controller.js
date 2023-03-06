const connection = require('../config/db');

const expenses = {
    getAllExpenses(req, res) {
        let sql = 'select * from expenses'
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
    getExpensesByUserId(req,res){
        const id = req.params.id;
        const sql = `SELECT * FROM expenses
                     WHERE userId = ?;`
        connection.query(sql,id, (err, data) => {
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
    create(req, res) {
        const newExpense = {
            amount: req.body.amount,
            date: new Date().toJSON(),
            userId: 1
        };
        const sql = 'insert into expenses set ?';
        connection.query(sql, newExpense, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Unkown error'
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
}
module.exports = expenses;

//SELECT * FROM expenses
//WHERE userId = 11 and MONTH(date) = MONTH(NOW());