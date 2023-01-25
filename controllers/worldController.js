/*
    World Controller
 */

const mysql  = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'world'
})
db.connect();

const getCity = (req,res) => {
     const sql = 'SELECT * FROM city;';
    db.query(sql, (error, data) => {
        res.send(data);
    });
}


module.exports = {
    getCity
}