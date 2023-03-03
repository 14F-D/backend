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
    
}