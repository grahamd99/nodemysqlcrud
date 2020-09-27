require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');

const hostname = process.env.HOST;
const database = process.env.DATABASE;
//const port = process.env.PORT;

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Todo app"});
});

// Require Notes routes
require('./app/routes/todo.routes.js')(app);

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});