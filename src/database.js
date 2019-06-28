//Importing MySQL
const mysql = require('mysql');

//Importing 'database' Object from env.js
const {database} = require('./env.js');

const MySqlConnection = mysql.createPool(database);

MySqlConnection.getConnection((err,connection) => {
    //Validating error msgs @ connect
    if(err)
    {
        if(err.code==='PROTOCOL_CONNECTION_LOST')
        {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }

        if(err.code==='ER_CON_COUNT_ERROR')
        {
            console.error('DATABASE HAS TOO MANY CONNECTIONS');
        }

        if(err.code==='ECONNREFUSED')
        {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    //IF statement (ES6+ Syntax) 
    if(connection) connection.release();
    console.log('DB Is Connected');
    return;
});

module.exports = MySqlConnection;