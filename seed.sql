DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

SELECT * FROM products;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    item_id VARCHAR(4) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(250) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("KS11", "Cheese Grater", "Kitchen Supplies", 15.50, 8), ("KS22", "Toaster", "Kitchen Supplies", 29.99, 5), ("KS33", "Spice Rack", "Kitchen Supplies", 25.00, 4),
    ("HG11", "Picture Frame", "Home Goods", 10.99, 12), ("HG22", "Tapestry", "Home Goods", 35.95, 6), ("ET11", "Headphones", "Electronics", 85.00, 3), 
    ("ET22", "HD Television", "Electronics", 399.99, 2), ("CS11", "Boots", "Clothing/Shoes", 59.99, 7), ("OS11", "Notecards", "Office Supplies", 3.99, 15), 
    ("OS22", "Clipboard", "Office Supplies", 12.99, 9);