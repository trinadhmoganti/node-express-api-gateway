var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./routers/router');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway for Express.js");
});

app.use(router);

console.log("Simple API Gateway on localhost: " + port);

app.listen(port);