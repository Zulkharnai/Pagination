const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    database: "imagestest",
    user: "root",
    password: ""
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = conn;