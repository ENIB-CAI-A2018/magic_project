const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

/*app.get('/card', function (req, res) {
  console.log('Received request for cards from', req.ip)
  res.json(cardList);
});

app.get('/card/:cardId', function (req, res) {
  console.log('Received request for '+req.param('cardId')+' from', req.ip)
  var cardDetails = require('./card/'+req.param('cardId')+'.json');
  res.json(cardDetails);
}); 

app.use('./img', express.static('img'));
app.use(express.static('public'));

var cardList = require('./data/card.json');
console.log("Card", cardList)
*/
var db
MongoClient.connect('mongodb://kretadred:budy3410@ds119024.mlab.com:19024/magic_project', (err, database) => 
{
  if (err) {return console.log(err)}
  db = client.db('cards') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
	})
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})