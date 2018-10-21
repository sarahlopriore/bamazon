var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    
    user: "root",

    password: "root",

    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;

    startApp();
});

var startApp = function() {

    connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}