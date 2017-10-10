// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(__dirname + '/views'));
// app.use('/views', express.static(__dirname + '/views'));
// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function(req, res){
  res.sendFile('/index.html')
});

app.get('/artgallery', function(req, res){
  console.log(__dirname)
  var filePath = path.join(__dirname, "/views/art-gallery.html")
  res.sendFile(filePath)
})
// Gallery View Route

// The Number Guessing Game
app.get('/api/pickanumber', function(req, res){
  // var targetNum = 30;
  var numGuess = parseInt(req.query.number)
  if(numGuess < setTarget){
    res.send('too low!')
  }
  else if(numGuess > setTarget){
    res.send(`too high!`)
  }
  else if (numGuess === setTarget){
    res.send(`you guessed the target num of ${setTarget}! Well done!`)
  }
});

var setTarget = 0;
app.get('/api/set-a-number', function (req, res){
  setTarget = parseInt(req.query.number)
  res.send('target set')
});

app.get('/api/gallery', function(req, res){
  res.json(gallery)
});
app.post('/api/newartwork', function(req, res){
  console.log("post url")
  gallery.push(req.body)
  res.json(gallery)
})

// Gallery
var gallery = [
  {
    title: "Morning Fire",
    artist: "Varys",
    description: "Orange clouds in sunrise"
  },
  {
    title: "Dragon Tooth",
    artist: "D. Targaryan",
    description: "A fallen dragon tooth in the grass"
  }
]

// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
