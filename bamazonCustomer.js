var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "<password>",
    database: "bamazon_db"
});

connection.connect(function (error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
    queryUserAction();
});

function queryUserAction() {
    console.log("\n-----------------------------------");
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do next?",
        choices: ["Display Products", "Buy Product", "Quit"]
    }).then(function (response) {
        switch (response.action) {
            case "Display Products":
                return displayAllProducts();
            case "Buy Product":
                return buyProduct();
            case "Quit":
                console.log("Have a nice day. Goodbye.")
                connection.end();
                return process.exit();
        }
    });
}

function displayAllProducts() {
    connection.query("SELECT * FROM products", function (err, response) {
        console.log("\n-----------------------------------");
        for (var i = 0; i < response.length; i++) {
            console.log(response[i].item_id + " | " + response[i].product_name + " | " + response[i].department_name + " | " + response[i].price + " | " + response[i].stock_quantity);
        }
        console.log("-----------------------------------");
        queryUserAction();
    });
};

function buyProduct() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        inquirer.prompt([{
            name: "itemToBuy",
            type: "rawlist",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            message: "What is the item number of the product you would like to buy?"
        }, {
            message: "How many would you like to buy?",
            name: "quantity",
            type: "input"
        }]).then(function (answers) {
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === parseInt(answers.itemToBuy)) {
                    chosenItem = results[i];
                }
            }
            if (chosenItem.stock_quantity > 0 && answers.quantity <= chosenItem.stock_quantity) {
                var newQuantity = chosenItem.stock_quantity - answers.quantity;
                connection.query("UPDATE products SET ? WHERE ?", [
                    { stock_quantity: newQuantity },
                    { item_id: chosenItem.item_id }
                ],
                    function (error) {
                        if (error) throw err;
                        console.log("\nItem purchased successfully!");
                        displayAllProducts();
                    });
            } else {
                console.log("\nInsufficient quantity!")
                displayAllProducts();
            }
        });
    });
}