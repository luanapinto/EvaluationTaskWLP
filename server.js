var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static('static'));
var port = 8080;

//Getting data from JSON into products variable
var products;
fs.readFile('data.json', function(err, data) {
    if (err) throw err;
    products = JSON.parse(data);
});

//Sending products to scripts.js
 app.get('/products', function(req, res){
     res.send({ products: products })
 })

 //Creating server
 app.listen(port, function() {
     console.log("Server listening on port " + port);
 });