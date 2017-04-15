// server.js runs content serving at a given port

var port = 8080;

const express = require('express');         // express framework for server
const bodyParser= require('body-parser');   // form handling
const path = require('path');               // path handling
const favicon = require('serve-favicon');   // favicon handling
const app = express();                      // create server

// set favicon
//app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));

// read from form submission
app.use(bodyParser.urlencoded({extended: true}));

// static file handling and virtual path
//  all statics files will automatically be requested
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/html')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public/js')));

// start server
app.listen(port, function() {
  console.log('Listening on ' + port)
})

// default page is index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/public/html/main.html')
})

app.get('/history', (req, res) => {
  res.sendFile(__dirname + '/public/html/history.html')
})

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/public/html/new.html')
})

console.log('Server running');
