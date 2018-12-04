const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

var db
MongoClient.connect('mongodb://kretadred:budy3410@ds119024.mlab.com:19024/magic_project', { useNewUrlParser: true }, (err, client) => 
{
  if (err) {return console.log(err)}
  db = client.db('magic_project') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
	})
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
	//console.log(req.body)
  db.collection('cards').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.listen(3000, function() {
  console.log('listening on 3000')
})