# Bamazon App

This is a simple node application using mySQL with 2 js files, a bamazonCustomer.js and a bamazonManager.js that have different functionality.

The customer file first displays a table of available items for purchase.

![customer product table image](images/customer_table.png)

They are given a list of item ids to choose from to purchase.

![customer options image](images/customer_option1.png)

Then they are asked to choose the quantity that they would like to purchase, and they are then displayed their total for that purchase.

![customer option and result image](images/customer_option2.png)

If there is not enough of the item to be purchased, the purchase will not go through and "Insufficient quantity" will be displayed instead.

![customer insufficient quantity image](images/customer_insufficient.png)

That's all the functionality for the customer file, moving on the the manager file.

The manager file first displays a select list of options: "View Products for Sale", "View Low Inventory", "Add to Inventory", and "Add New Product":

![manager first options](images/manager_main.png)
