"use strict"

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;


// Middlewares:
app.use(express.json())
require('express-async-errors')

// Session-Cookies
const session = require('cookie-session');

app.use(session({
    secret: process.env.SECRET_KEY,
}))


// Query Handler:
app.use(require('./src/middlewares/queryHandler'))

// DB connection:
require('./src/configs/dbConnection')

// Authentication
app.use(require('./src/middlewares/authentication'))

// Logger
app.use(require('./src/middlewares/logger'));

// Json
app.use('/documents/json', (req, res) => {
    res.sendFile('/src/configs/swagger.json', { root: '.' })
});

// Swagger 
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./src/configs/swagger.json');
app.use('/documents/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson, { swaggerOptions: { persistAuthorization: true } }));

// Redoc
const redoc = require('redoc-express');
app.use('/documents/redoc', redoc({ specUrl: '/documents/json', title: 'Redoc UI' }));


// Routes:
app.all('/', (req, res) => {

    res.send({
        message: 'WELCOME TO PERSONNEL API',
    })
})
// Departments Route
app.use("/departments", require("./src/routes/department"))

// Personnnel Route
app.use("/personnels", require("./src/routes/personnel"))

// Token Route
app.use("/tokens", require('./src/routes/token'))

// Auth Route
app.use('/auth', require('./src/routes/auth'));

app.use("*", (req, res) => {
    res.status(404).send({
        error: true,
        message: "This route not found"
    })
});

// Error Handler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))


// require('./src/helpers/sync')()
