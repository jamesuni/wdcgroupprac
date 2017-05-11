// server.js runs content serving at a given port

var port = 8080;

const express = require('express'); // express framework for server
const bodyParser = require('body-parser'); // form handling
const path = require('path'); // path handling
const favicon = require('serve-favicon'); // favicon handling
const app = express(); // create server

// static file handling and virtual path
//  all statics files will automatically be requested
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/html')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public/js')));

// read from form submission
app.use(bodyParser.urlencoded({
    extended: true
}));

// set favicon
//app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));

// start server
app.listen(port, function () {
    console.log('Listening on ' + port + ".  To quit: [control-c]");
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

app.get('/ajaxtest', (req, res) => {
    res.sendFile(__dirname + '/public/html/ajaxtest.html')
})



app.post('/ajaxtest', function (req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password = " + password);
    res.end("yes");
});


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});


connection.connect(function (err) {
    if (!err) {
        console.log("mySQL database connected....");
    } else {
        console.log("Error connecting database ... nn");
    }

    
    //this is based on a SQL table called 'settings' that contains two columns: 'Email' and 'BackgroundColor'
    var queryString = 'SELECT * FROM settings';
    connection.query(queryString, function (err, rows, fields) {
        if (err) throw err;

        for (var i in rows) {
            console.log('Email[' + i + "] = " + rows[i].Email + " BackgroundColor = " + rows[i].BackgroundColor);
        }
    });

});









console.log('Server running. to adjust settings see file server.js');
