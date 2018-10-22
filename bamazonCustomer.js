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

    connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);

    });

    inquirer.prompt([
        {
            type: "list",
            message: "Choose the item number you wish to purchase",
            choices: ["KS11", "KS22", "KS33", "HG11", "HG22", "ET11", "ET22", "CS11", "OS11", "OS22"],
            name: "itemChoice"
        }, {
            type: "input",
            message: "How many units of this item would you like to purchase?",
            name: "numberChoice"
        }
    ])
    .then(function(answers) {
        var item = answers.itemChoice;
        connection.query("SELECT item_id, stock_quantity, price FROM products WHERE item_id = ?", [item], function(err, res) {
            if (err) throw err;
            if (res[0].stock_quantity < answers.numberChoice) {
                console.log("Insufficient quantity!")
            } else {
                console.log(res);
                var difference = res[0].stock_quantity - answers.numberChoice;
                var userQ = answers.numberChoice;
                buyItems(difference, item);
                showTotal(item, userQ);
            }


        })
        
    })

    
}

var buyItems = function(diff, it) {
    connection.query("UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: diff
            },
            {
                item_id: it
            }
        ])

}

var showTotal = function(it, q) {
    connection.query("SELECT stock_quantity, price FROM products WHERE item_id = ?", [it], function(err, res) {
        if (err) throw err;
        console.log(res[0].price);
        console.log("Total: " + res[0].price * q);
    })

    connection.end();
}