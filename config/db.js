const mysql = require("mysql");

const connection = mysql.createPool({
    host:'bgs.jedlik.eu',
    user:'bc',
    password:'Bc2023',
    database:'bc',
    dateStrings:true
});

module.exports = connection;