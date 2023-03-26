const mysql = require("mysql");

const connection = mysql.createPool({
    host:'sql.freedb.tech',
    user:'freedb_HalaszPeter1',
    password:'9x*pS?t%&nHR3mx',
    database:'freedb_budgetcalc'
});

module.exports = connection;