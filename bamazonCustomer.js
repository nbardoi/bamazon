var inquirer = require("inquirer");
var mysql = require("mysql");

var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "dbpassword2019",
    database: "bamazon_DB"
});
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  
   listProducts();
});

function listProducts() {

    console.log("\nHERE ARE ALL THE ITEMS AVAILABLE FOR SALE:");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;

      var table = new Table ({
          head: ["Item ID", "Product Name", "Department Name", "Price", "Stock Quantity"]
        , colWidths: [10, 40]
      });

      for (var i = 0; i < res.length; i++) {
          table.push(
              [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
      }

      console.log(table.toString());

    inquirer
    .prompt([
      {
          type: "input",
          message: "\nPlease enter the Item ID of the product you would like to buy.",
          name: "item",
          validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
      },
      {
        type: "input",
        message: "\nPlease enter how many units of the product you would like to buy.",
        name: "units",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }
      ])
      .then(function(answer) {
          var chosenID = answer.item - 1;
          var chosenProduct = res[chosenID].product_name;
          var chosenQuantity = answer.units;

          if (chosenQuantity < res[chosenID].stock_quantity) {
            console.log("\nYour total for " + "(" + chosenQuantity + ")" + " - " + chosenProduct + " is: " + res[chosenID].price * chosenQuantity);

            connection.query("UPDATE products SET ? WHERE ?", 
            [
            {
                stock_quantity: parseInt(res[chosenID].stock_quantity) - parseInt(chosenQuantity)
            }, 
            {
                item_id: res[chosenID].item_id
            }
            ], function(err) {
                if (err) throw err;

                listProducts();
            })

        } else {
            console.log("\nSorry, insufficient Quanity at this time. All we have is " + res[chosenID].stock_quantity + " in our Inventory.\n");
            listProducts();
        }
          })

    })
      
};