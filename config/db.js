const mysql = require("mysql");

const connection = mysql.createPool({
    host:'sql.freedb.tech',
    user:'freedb_budgetcalc',
    password:'9Y$k%2sRdC7YzNa',
    database:'freedb_budgetcalc'
});

module.exports = connection;