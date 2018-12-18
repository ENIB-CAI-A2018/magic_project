const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();
var router = express.Router()
app.use("/", router);
app.use(bodyParser.urlencoded({extended: true}))

var db
MongoClient.connect('mongodb://kretadred:budy3410@ds119024.mlab.com:19024/magic_project', { useNewUrlParser: true }, (err, client) => 
{
  if (err) {return console.log(err)}
  db = client.db('magic_project')
  app.listen(3000, () => {
    console.log('listening on 3000')
	})
})

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(__dirname + '/index.html')
  db.collection('cards').find({name: "Chat Sacre"}).toArray((err,result)=>{
    var cards=result[0]
  })
  
})

router.get('/elements/:titre',function (req,res) {

  //onsole.log(req.params.titre)
  var path = 'elements\\';
	var file = req.params.titre;
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.sendFile(path + file,{ root: __dirname });
})


app.post('/donnee', (req, res) => {
   console.log(req)
   
   db.collection('cards').save(req.body, (err, result) => {
   if (err) return console.log(err)
   console.log('saved to database')
   res.redirect('/')
   
  })
})

router.get('/search',(req,res)=>{
  console.log(req.query.SearchName) 
  db.collection('cards').find({name: req.query.SearchName}).toArray((err,result)=>{
    if (!result[0]){
      console.log('vide')
      res.sendFile(__dirname +"/FileNotFound.html")
    }
    else{
      console.log(result)
      var cards=result[0]
      res.json(cards);
    }
  })
  

})

app.use('/node_modules/', express.static(__dirname + '/node_modules/'));

// app.listen(3000, function() {
//   console.log('listening on 3000')
// })