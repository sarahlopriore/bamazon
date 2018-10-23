var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table");

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

    inquirer.prompt([
        {
            type: "list",
            message: "Choose what you would like to do:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            name: "toDo"
        }
    ])
    .then(function(answer) {
        if (answer.toDo === "View Products for Sale") {
            viewProducts();
        } else if (answer.toDo === "View Low Inventory") {
            viewLow();
        } else if (answer.toDo === "Add to Inventory") {

        } else if (answer.toDo === "Add New Product") {

        }
    })
}

var viewProducts = function() {
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
    })

    connection.end();
}

var viewLow = function() {
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 5", function(err, res) {
        if (err) throw err;
        console.table(res);
    })

    connection.end();
}