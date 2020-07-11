// Set up MySQL connection.
var mysql = require("mysql2");
//set up passwords with the dotenv package.
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    //reminder to self, it will not work at port 
    var connection = mysql.createConnection({
        port: 3308,
        host: "localhost",
        user: "root",
        password: "rootpass",
        database: "burgers_db"
    });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;