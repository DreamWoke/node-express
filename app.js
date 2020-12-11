var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/user', function (req, res) {
    console.log(req.body,req.query);
    res.send({status:0,data:{ls:"ejs"}})
  })
  
app.listen(3000,function(){
    console.log('listening port 3000');
})
module.exports = app;





