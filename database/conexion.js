const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password:'root',
    database:'cursos'
});


db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('BBDD conectada')
})

module.exports = db;