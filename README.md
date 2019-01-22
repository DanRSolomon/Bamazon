# BAMAZON

Bamazon is a student project to create an Amazon-like storefront using Node.js to update a product information database in MySQL. It is a command line app that requires the MySQL and Inquirer npm packages. Anyone interested in exploring how the code works is welcome to clone the repository. One thing you will need to do for yourself is create your own MySQL database. You are welcome to use my schema.sql and seeds.sql to build the database, but you will need to provide your own MySQL password on line 8 of the bamazonCustomer.js file.

Below are images showing how the app is used.

-------------------------------------------
![Bamazon01-image](/images/Screen_Capture_01.JPG)

Start the app from the command line with "node bamazonCustomer.js".

-------------------------------------------
![Bamazon02-image](/images/Screen_Capture_02.JPG)

Choice 1 pulls the information from the database to display.

-------------------------------------------
![Bamazon03-image](/images/Screen_Capture_03.JPG)

Choice 2 lets you buy a product. Choose the number of the product you would like to buy.

-------------------------------------------
![Bamazon04-image](/images/Screen_Capture_04.JPG)

Once the product number is chosen, it asks how many you would like to buy. Once the quantity is chosen, the database is displayed again showing the updated quantity of the product. As you can see, the quantity of paint brushes has gone down by five.

-------------------------------------------
![Bamazon05-image](/images/Screen_Capture_05.JPG)

Here, the quantity of soy sauce packets has gone down.

-------------------------------------------
![Bamazon06-image](/images/Screen_Capture_06.JPG)

The app lets you buy all the remaining stock of a product, as shown here with the flowers.

-------------------------------------------
![Bamazon07-image](/images/Screen_Capture_07.JPG)

The app will not let you choose a quantity more than the amount available.

-------------------------------------------
![Bamazon08-image](/images/Screen_Capture_08.JPG)

Choose quit to end the app.
