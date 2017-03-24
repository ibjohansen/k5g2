var express = require('express');
var app = express();

app.use(express.static('build'));

app.get('/^((?!#).)*$/', function (req, res) {
  console.log('oh noes');
  res.send('oh noes')
});

app.get('/#main', function (req, res) {
  console.log('/');
  res.send('oh noes')
});

app.listen(3000, function () {
  console.log('K5G-app listeing on 3000')
});