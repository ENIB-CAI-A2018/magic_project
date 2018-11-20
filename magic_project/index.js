var express = require('express');
var app = express();

app.get('/card', function (req, res) {
  console.log('Received request for cards from', req.ip)
  res.json(cardList);
});

app.get('/card/:cardId', function (req, res) {
  console.log('Received request for '+req.param('cardId')+' from', req.ip)
  var cardDetails = require('./card/'+req.param('cardId')+'.json');
  res.json(cardDetails);
});

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});