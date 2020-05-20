					  My Mart - Grocery Store

Description:The Website for Grocery Shopping , where in an user can search and find necessary information about any grocery item, can proceed to checkout to buy products.

Web Technologies Used : HTML, CSS, ReactJS, ExpressJS, NodeJS

How to Run the Project

step-1:Download the Project from git repository
step-2: npm install to download the necessary packages
step-3:npm start to start the project

What this project does

1.User Login: user will login to the application by providing his credentials.Login Page verifies whether the username is a valid username(it bans the username "dog") and then the username will be assigned with a session id , which will be used across the application to check if the session is a valid session
2.Search Product: User can search by typing product's name in the search text box that is present on the top of the page.
3.Sort : User can refine the search according to category and can sort the items by name/Price. This feature will be available in search results.
4.Category Search: User can directly search for products according to its category by selecting categories in the filter.
5.Product Information: User can check for the product information and can add it to his cart by clicking on Add to Cart button under the display picture of an item. 
6.User Cart: It shows the items currently in the shopping cart ready to be purchased. User can update the quantities or remove items from the cart. Here user can check for total payment information and proceed to checkout.
7.Checkout: After making the necessary changes in cart, user has to checkout to place an order. When an order is placed, an e-mail will be triggered to user’s email id(dummy). Once an order has been placed, cart gets cleared and user can place next order.
8.Prevention of Fraudulent activity: Have implemented checks to check for Session id for each user and If any such activity happens, system will display an error message and user will be redirected to login screen.

Error reporting:
1.once the stock for the product in the inventory is over, user can see the message saying "no stock available"
2.if user tries to add same product to the cart, the system will throw a message saying "item is already to the cart"
3.if user tries to click on checkout without adding items, the system will show an message "please add items to cart"
4.if the user tries to update or delete the deleted product on his/her cart, error message will be thrown saying "item does not exist"
5.displaying  " no valid session " on invalid session ids

source and licensing:

the images in this projects are taken from google search images(which does ot require any license to use to) and the links are below

https://www.google.com/search?q=cucumber&tbm=isch&source=iu&ictx=1&fir=5ifIv2FW1FyakM%253A%252CZyxn5HTaaGsdeM%252C_&vet=1&usg=AI4_-kRQRWynRW-VjkW3vuN1w7y_K2c3Ww&sa=X&ved=2ahUKEwjGiNr6zfDoAhVlFTQIHXaEAg0Q_h0wAXoECAkQBg#imgrc=6lVG3BdGkpUoWM -- Cucumber.jpg

https://www.google.com/search?q=carrots&tbm=isch&source=iu&ictx=1&fir=e5gq5_9g_XZSaM%253A%252C8IwWQT4DDILVTM%252C_&vet=1&usg=AI4_-kRRxVT4rmU-z96_bwP336LgnEXwug&sa=X&ved=2ahUKEwig5eazzvDoAhVsCTQIHWtLB_gQ_h0wGnoECAwQCw#imgrc=e5gq5_9g_XZSaM&imgdii=b8GYx_oWgwKPEM -- Carrots.jpg

https://www.google.com/search?q=cabbage&tbm=isch&source=iu&ictx=1&fir=H2EHTcMGPq3khM%253A%252CHB2FPeM5OsVB3M%252C%252Fm%252F0fbw6&vet=1&usg=AI4_-kRxE_wCRBurdTLLU7K9J5_bM5oqtA&sa=X&ved=2ahUKEwj70c3VzvDoAhVHoZ4KHRvtBOAQ_B0wGHoECAgQAw#imgrc=H2EHTcMGPq3khM:
--Cabbage.jpg

https://www.google.com/search?source=hp&ei=6DuaXsnZIM34-gT-hKkg&q=broccoli+image&oq=broccoli+image&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoFCAAQgwE6BAgAEApQoiFY8T9gmEFoAHAAeACAAVWIAeQGkgECMTSYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjJ7YPlzvDoAhVNvJ4KHX5CCgQQ4dUDCAk&uact=5 --Broccoli.jpg


https://www.google.com/search?q=apple+image&tbm=isch&source=iu&ictx=1&fir=cSgM1--qEs6BmM%253A%252CcI9MDLcYnx0VhM%252C_&vet=1&usg=AI4_-kTrPvPFT6lwfX8pzzhFrfyNwIoP9A&sa=X&ved=2ahUKEwi1gJr4zvDoAhUWsp4KHaxzAh8Q9QEwAXoECAkQMg#imgrc=cSgM1--qEs6BmM:--Apple.jpg


https://www.google.com/search?q=banana&oq=banana&aqs=chrome..69i57j46j0l2j46l2j0j46.2328j0j9&sourceid=chrome&ie=UTF-8 --banana

https://www.google.com/search?q=grapes&tbm=isch&source=iu&ictx=1&fir=XPUbVIdWAWHAlM%253A%252CduJRADRdgjuQhM%252C_&vet=1&usg=AI4_-kQtj-f2WwJRGv5tT1klgnwZOMX4MA&sa=X&ved=2ahUKEwi28OCqz_DoAhXQv54KHeoeA_oQ_h0wGnoECAYQDQ#imgrc=XPUbVIdWAWHAlM: -- Grapes.jpg


https://www.google.com/search?q=watermelon&tbm=isch&source=iu&ictx=1&fir=7CDJPYo-HHeyVM%253A%252ClqahP7n8HS6SSM%252C%252Fm%252F0kpqd&vet=1&usg=AI4_-kQiBCUNbA-YIukADtB_HUqfFqfi3Q&sa=X&ved=2ahUKEwi3g5i-z_DoAhVBvJ4KHdKjDSAQ_B0wKnoECAoQAw#imgrc=7CDJPYo-HHeyVM:--Watermelon.jpg

https://www.google.com/search?q=lentils&tbm=isch&chips=q:lentils,g_1:yellow:ZDnBBIiJCKQ%3D&hl=en&ved=2ahUKEwjOvabWz_DoAhXXAjQIHaGkDu8Q4lYoBnoECAEQIQ&biw=1351&bih=721--lentils.jpg

https://www.google.com/search?q=rice&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjg65Xrz_DoAhVHqp4KHV2KAHQQ_AUoAnoECBYQBA&biw=1368&bih=721#imgrc=HfyMMZdh0_7UUM --Rice.jpg

https://parenting.firstcry.com/articles/15-health-benefits-of-jaggery-that-everyone-should-know/ --Jaggery.jpg

https://www.google.com/search?q=sugar&source=lnms&tbm=isch&sa=X&ved=2ahUKEwji1OOI0fDoAhVXoZ4KHYJXDfkQ_AUoAnoECBgQBA&biw=1368&bih=721#imgrc=fcsXQEzUZpRByM --Sugar.jpg



