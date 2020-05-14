# **Bamazon**

### **Overview**
Bamazon is an Amazon-like storefront node application that uses databasing to take in orders from customers and deplete stock from the store's inventory.

### **Instructions**
Below you will find a guide to help you get started and teach you how to run Bamazon 

1. Open your terminal such as Bash.

2. Clone the repository

2. Run npm install, and the following packages should be installed:

    - MySQL NPM
    - Inquirer NPM

### **CUSTOMER MODE**
Running this application will first display all of the items available for sale, their product ids, and prices. The app will then prompt users with two messages.

The first will ask the user/customer the ID of the product they would like to buy.

The second message will ask how many units of the product they would like to buy.

Once the customer/user has placed the order, the application checks if the store has enough of the product to meet the customer's request. If the store does not have enough inventory of selected item, the app will log Not enough product in stock, and prevents the order from going through.

If the store does have enough of the product, the app will fulfill the customer's order, update the SQL database to reflect the remaining quantity and show the customer the total cost of their purchase.

Example: Run the bamazonCustomer command

    node bamazonCustomer.js

**OUTPUT:** The system will display questions for customer. Customer will place order and order will either be fulfilled or rejected like explained above.

**CUSTOMER ORDER BEING FULLFILLED** 

![](GIFS/order-successful.gif)

**CUSTOMER BEING TOLD "INSUFFICIENT QUANTITY"**

![](GIFS/insufficient-quantity.gif)

### **Built With:**
- Node.js
- JavaScript
- MySQL Workbench
- MySQL NPM
- Inquirer NPM
