# Welcome to My Project
In this project I created a wibsite with CRUD tool for a restuarant to book a meal.
***
## About the App:
# My application is for creating new meals with names and prices

## Run application:
1. Clone it from github:   git clone   ////////git repo link
2. Enter to the project:   cd  //// name of project   todo-list-app
3. Install dependencies:  npm install
4. Start the server:   npm run start(:dev for dev mode)
5. Open  web browser and go to http://localhost:3000/west/food.

## Application Dependencies:
The application depends on the following components:

- Express: utilized for constructing the server-side application.
- EJS: employed for dynamically rendering content in HTML.
- CORS: utilized for enabling the frontend part of the application to run smoothly.

# Install dependencies: npm install express ejs cors dotenv joi body-parser

## Links:
- [Public Repo on GitHub](https://github.com/00016612/WT_CW2.git)
- [Hosted Application](https://api.uzbooking.uz/west/food)

### Structure
# controller/index.js: -> defines various controller functions to manage HTTP requests associated with food.

# db -> model: This section consists of an array used to interact with the data stored in food.json.

# public: -> CSS and JavaScript for EJS views.

# routing routes/index.js: -> Routes for the application

# additional utils -> utils contains auxiliary functions for reading and writing data.

# UI -> views: food.ejs for rendering the food list interface.

# main.js: This file contains JavaScript code that enhances the functionality of the entire server.