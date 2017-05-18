// server.js runs content serving at a given port

var port = 8080;

const express = require('express'); // express framework for server
const bodyParser = require('body-parser'); // form handling
const path = require('path'); // path handling
const favicon = require('serve-favicon'); // favicon handling
const app = express(); // create server

// static file handling and virtual path //all statics files will automatically be requested
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

app.get('/account', (req, res) => {
    console.log(".get() account.html");
    res.sendFile(__dirname + '/public/html/account.html')
})


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});



//settings are SAVED from client (client -> SQL)
app.post('/login', function (req, res) {

    var backgroundColor = req.body.backgroundColor;
    var textColor = req.body.textColor;
    var email = req.body.email;

    console.log("POST /login: email = " + email + " backgroundColor = " + backgroundColor + " textColor = " + textColor);

    var queryString = "UPDATE settings SET BackgroundColor = '" + backgroundColor + "', TextColor= '" + textColor + "' WHERE Email = '" + email + "'";
    connection.query(queryString, function (err, rows, fields) {
        if (err) throw err;
    });
    res.end("yes");
});


//settings are LOADED into client (SQL -> client)
app.post('/loadsettings', function (req, res) {

    var email = req.body.email;
    var result = "resultError :(";
    
    var queryString = "SELECT * FROM settings WHERE Email = '" + email + "';";
    connection.query(queryString, function (err, rows, fields) {
        if (err) throw err;

        result = JSON.stringify(rows[0]); //you are only selecting 1 row in total, so 'rows[0]' and 'rows' are same

        console.log("POST /loadsettings: " + result);
        console.log("rows[0].Email = " + rows[0].Email);
        console.log("rows[0].BackgroundColor = " + rows[0].BackgroundColor);
        console.log("rows[0].TextColor = " + rows[0].TextColor);
        
        //is there a need for 'res.send(string s)' ??  
        //you can't have more than one '.send()' or it throws 'Can't set headers after they are sent'
        res.end(result); //.end() can only accepy a string or buffer as an argument
    });
  
    //these lines causes the body of the server.js callback function to never fire. 
//    res.contentType('application/json');
//    res.send(rows); //still does not work with 'rows'

});
//info on callbacks: http://stackoverflow.com/questions/15635791/nodejs-mysql-connection-query-return-value-to-function-call#15636208
//understanding 'req' and 'res': http://stackoverflow.com/questions/4696283/what-are-res-and-req-parameters-in-express-functions#4696338   

//called when user logs in. If email address does not exist in database, new email and default settings are added.
app.post('/email', function (req, res) {

    var email = req.body.email;
    console.log("POST /email: email = " + email);

    var queryString = "INSERT IGNORE INTO settings VALUES('" + email + "', 'grey', 'black');";

    connection.query(queryString, function (err, rows, fields) {
        if (err) throw err;
    });

    res.end("yes");
});



app.post('/newentry', function (req, res) {

    var text = req.body.text;
    var date = req.body.date;
    var email = req.body.email;
    console.log("POST /newentry: text = " + text);
    console.log("POST /newentry: getDate() = " + date + " email = " + email);
    
//    var queryString = "ALTER TABLE text ADD " + "Miow" + " varchar(250);"; //this works
//    var queryString = "ALTER TABLE text ADD '" + date + "' varchar(250);"; 
        var queryString = "ALTER TABLE IF NOT EXISTS text ADD " + "D" + " varchar(250);"; 
    //trying this command twice throws error that crashes server 'duplicate column name'

    connection.query(queryString, function (err, rows, fields) {
        if (err) throw err;
    });

    res.end("yes");
});



//-you could store the person's email address in temp. storage
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








console.log('Server running. File: server.js');
