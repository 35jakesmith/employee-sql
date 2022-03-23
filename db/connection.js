const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:"password",
    database: "employeeTracker"
},
console.log("Connected to the database.")
);

module.exports = db;