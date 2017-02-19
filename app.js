var express = require('express');
var app = express();

app.use(express.static('build'));

app.listen(3000, function () {
  console.log('K5G-app listeing on 3000')
});