var inquirer = require("inquirer");
var connection = require('./connection.js');
var ids = [];

//let dataQuery =
//'INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ?';
//let values = [];

//for (let i = 0; i < 10; i++) {
  //values.push([
  //dataQuery.productName(),
  //dataQuery.departmentName(),
  //(Math.random() * 901 + 100).toFixed(2),
  //Math.floor(Math.random() * 181) + 20
  //]);
  //}

  console.log('');
  console.log('Welcome to Bamazon!');
  console.log('');
  console.log('Please enjoy!');
  shop();

  function continueShopping() {
    console.log('');
    inquirer
      .prompt([
        {
          name: 'shop',
          type: 'confirm',
          message: 'Continue shoping'
        }
      ])
      .then(answer => {
        if (answer.shop) {
          shop();
        } else {
          console.log('');
          console.log('Thank you for shopping with Bamazon!');
          console.log('');
          connection.end();
        
      }
  


   //if (results.length === products) {
    // console.log("Insufficient quantity!")
  
   //}
  //});
    //}

    var getProducts = function() {
      console.log("Get Products")
       connection.query("SELECT * FROM products", function(error, result, field) {
      if(error){
           console.log("Error: ", error);
           connection.end();
       }

function processProduct() {
  console.log('');
  inquirer
    .prompt([
      {
        type: 'text',
        name: 'id',
        message: 'Please enter the ID of the product you would like to order'
      }
    ])
    .then(answers => {
      let id = parseInt(answers.id);
      if (ids.includes(parseInt(id))) {
        productById(id);
      } else {
        console.log('');
        console.log('Invalid ID');
        processProduct();
      }
    });
}

function updateDatabase(product_name, number) {
    let updateQuery = `UPDATE products SET stock_quantity = stock_quantity - ${number} WHERE product_name = '${product_name}'`;
  
    connection.query(updateQuery, err => {
      if (err) {
        console.log('Error: ', err);
        connection.end();
      }
    });
  }
  function confirmOrder(product_name, number) {
    console.log('');
    inquirer
      .prompt([
        {
          name: 'order',
          type: 'confirm',
          message: 'Submit your order'
        }
      ])
      .then(answer => {
        if (answer.order) {
          console.log('');
          console.log('You order was processed!');
          console.log('');
          console.log(
            `Enjoy your ${product_name}!  Your satisfaction is guaranteed!`
          );
          updateDatabase(product_name, number);
          continueShopping();
        } else {
          console.log('');
          console.log('Your order was cancelled.');
          continueShopping();
        }
      });
  }

  function processQuantity(product_name, price, stock_quantity) {
    inquirer
      .prompt([
        {
          type: 'text',
          name: 'number',
          message: 'How many would you like to order?'
        }
      ])
      .then(answers => {
        let number = parseInt(answers.number);
        console.log('');
        if (number <= stock_quantity) {
          let subtotal = price * number;
          let tax = (subtotal / 100) * 6.6;
          let grandTotal = subtotal + tax;
          console.log('Your order:');
          console.log('');
          console.log(`- ${product_name}, $${price}`);
          console.log('- Quantity:', number);
          console.log(`- Subtotal: $${subtotal.toFixed(2)}`);
          console.log(`- Tax: $${tax.toFixed(2)}`);
          console.log(`- Grand Total: $${grandTotal.toFixed(2)}`);
          confirmOrder(product_name, number);
        } else {
          console.log(`We only have ${stock_quantity} in stock`);
          console.log('');
          processQuantity(product_name, price, stock_quantity);
        }
      });
  }

  function shop() {
    const displayQuery = 'SELECT item_id, product_name, price FROM products';
    connection.query(displayQuery, (err, result) => {
      if (err) {
        throw err;
      }
      result.forEach(item => {
        let { item_id, product_name, price } = item;
        ids.push(item_id);
        console.log('');
        console.log(
          `* Product ID: ${item_id} | ${product_name} | on sale for $${price} *`
        );
      });
      processProduct();
    });
  }
