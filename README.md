					 ### My Mart - Grocery Store

### Description:The Website for Grocery Shopping , where in an user can search and find necessary information about any grocery item, can proceed to checkout to buy products.

Web Technologies Used : HTML, CSS, ReactJS, ExpressJS, NodeJS

### How to Run the Project

* step-1:Download the Project from git repository
* step-2: npm install to download the necessary packages
* step-3:npm start to start the project

### What this project does

* User Login: user will login to the application by providing his credentials.Login Page verifies whether the username is a valid username(it bans the username "dog") and then the username will be assigned with a session id , which will be used across the application to check if the session is a valid session
* Search Product: User can search by typing product's name in the search text box that is present on the top of the page.
* Sort : User can refine the search according to category and can sort the items by name/Price. This feature will be available in search results.
* Category Search: User can directly search for products according to its category by selecting categories in the filter.
* Product Information: User can check for the product information and can add it to his cart by clicking on Add to Cart button under the display picture of an item. 
* User Cart: It shows the items currently in the shopping cart ready to be purchased. User can update the quantities or remove items from the cart. Here user can check for total payment information and proceed to checkout.
* Checkout: After making the necessary changes in cart, user has to checkout to place an order. When an order is placed, an e-mail will be triggered to user’s email id(dummy). Once an order has been placed, cart gets cleared and user can place next order.
8.Prevention of Fraudulent activity: Have implemented checks to check for Session id for each user and If any such activity happens, system will display an error message and user will be redirected to login screen.

### Error reporting:
* once the stock for the product in the inventory is over, user can see the message saying "no stock available"
* if user tries to add same product to the cart, the system will throw a message saying "item is already to the cart"
* if user tries to click on checkout without adding items, the system will show an message "please add items to cart"
* if the user tries to update or delete the deleted product on his/her cart, error message will be thrown saying "item does not exist"
* displaying  " no valid session " on invalid session ids



