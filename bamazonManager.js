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
            addMore();
        } else if (answer.toDo === "Add New Product") {
            addNew();
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

var addMore = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the id of the item you are adding?",
            name: "itemId"
        },
        {
            type: "input",
            message: "What is the quantity of the item you are adding?",
            name: "quantity"
        }
    ])
    .then(function(answers) {
        connection.query("SELECT")
    })
}


addNew = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the name of the product you would like to add.",
            name: "productName"
        },
        {
            type: "input",
            message: "Enter the department of the product you would like to add.",
            name: "departmentName"
        },
        {
            type: "input",
            message: "Enter a unique id for the product you would like to add.",
            name: "uniqueId"
        },
        {
            type: "input",
            message: "Enter the price of the product you would like to add.",
            name: "price"
        },
        {
            type: "input",
            message: "Enter the quantity of the product you would like to add.",
            name: "amount"
        }
    ])
    .then(function(answers) {
        connection.query("INSERT INTO products SET ?", 
        {
            item_id: answers.uniqueId,
            product_name: answers.productName,
            department_name: answers.departmentName,
            price: answers.price,
            stock_quantity: answers.amount
        }, 
        function(err, res) {
            if (err) throw err;
            console.log("Your item was added successfully.")
        })

        connection.end();
    })
}