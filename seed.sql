DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

SELECT * FROM products;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(250) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheese Grater", "Kitchen Supplies", 15.50, 8), ("Toaster", "Kitchen Supplies", 29.99, 5), ("Spice Rack", "Kitchen Supplies", 25.00, 4),
    ("Picture Frame", "Home Goods", 10.99, 12), ("Tapestry", "Home Goods", 35.95, 6), ("Headphones", "Electronics", 85.00, 3), ("HD Television", "Electronics", 399.99, 2),
    ("Boots", "Clothing/Shoes", 59.99, 7), ("Notecards", "Office Supplies", 3.99, 15), ("Clipboard", "Office Supplies", 12.99, 9);