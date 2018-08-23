var inquirer = require("inquirer");
var connection = require('./connection.js');


var getProducts = function() {
   console.log("Get Products")
   connection.query("SELECT * FROM products", function(error, result, field) {
   if(error){
       console.log("Error: ", error);
       connection.end();
   }
   if (results.length === products) {
     console.log("Insufficient quantity!")
  
   }
 });
    }

var userCommand = function() {
inquirer.prompt ({
 type: "list",
 message: "Which Product Would You Like to View?",
 choices:products,
 name:"productID"

},{
 type:"number",
 message:"How many units of this item would you like to buy?",
 user: "productUnits"
},{
 type:"confirm",
 message:"Are you sure?",
 name:"confirmChoice",
 default: true

}).then(function(response) {
 console.log("Chosen Item")
 var productID = repsonse.productID.split("Item ID:");
 var confirmChoice = response.confirmChoice;

 if (productID.indexOf(productID) === products && confirmChoice)
 console.log("Your item is availble!")

 });
}
userCommand();