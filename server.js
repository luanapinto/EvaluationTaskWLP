var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static('static'));
var port = 8080;

var products;
fs.readFile('data.json', function(err, data) {
    if (err) throw err;
    products = JSON.parse(data);
});

 app.get('/products', function(req, res){
     res.send({ products: products })
 })

 app.listen(port, function() {
     console.log("Server listening on port " + port);
 });