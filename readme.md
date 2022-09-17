# CRUD with Express

## Lecture Topics
1. Review on how the internet works 
2. What is CRUD
3. Building our cohort's favorite movies web app

## Important to remember:
* Every question is welcomed. Remember that your question might not be only yours. By asking your question, you help the group
* To interact, you can either type on the chat or open your mic and talk
* Do not compare your learning process with others. Rather, observe how today you know more than yesterday and create your own baseline

----
## Notes: 

### Review on how the internet works + CRUD 
You can check the slides about this subject [here](https://docs.google.com/presentation/d/1O74NbLfeYdkgChSo-QEVH-6dmeRoQX4vvWSq4CeZOYQ/edit?usp=sharing).

### Creating our Favorite Movies Web App

1. Create an Express Server -> you can find more information on how to install it [here](https://expressjs.com/en/starter/installing.html)
2. Add [nodemon](https://www.npmjs.com/package/nodemon) so your server will watch for your changes. Otherwise, each time you make a change on your server, you will need to re-start the server
3. Add [ejs](https://ejs.co/#install) to allow you to create html templates
4. Don't forget to add the [body-parser](https://www.npmjs.com/package/body-parser) so you actually access your request's body

**Remember:**  

* `<a>`tags only work for GET request
* `<form>`tags can be used both for GET and POST requests
* how to pass info from your server to ejs: template variables