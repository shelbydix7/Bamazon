DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
 id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(45) NOT NULL,
 price DECIMAL(10,2) NOT NULL,
 stock_quantity INTEGER (10) NOT NULL,
 department_name VARCHAR (45) NOT NULL,
 PRIMARY KEY (id)
);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Leather Sofa", 500.50, 100, "Home Items");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Iphone 7 Case", 40.09, 87, "Technology");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Cat Toys Bundle", 27.01, 111, "Pets");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("South Park Movie", 9.99, 578, "Entertainment");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Bob's Burgers Collectables Set", 897.78, 37, "Entertainment");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Pen Pack", 4.76, 3878, "Office Supplies");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Fleetwood Mac Signed Album", 2487.00, 1, "Entertainment");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Cotton Robe", 10.87, 402, "Clothing");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Sloth Shower Curtain", 16.35, 508, "Home Items");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Memory Foam Pillow", 40.98, 784, "Home Items");