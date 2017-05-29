/* jshint browser: true */
/*global $ */
/*global console */
/*global gapi */

//this function loads all default settings.
function loadBackgroundColor() {
    "use strict";

    if (localStorage.getItem("backgroundColor") !== null) {
        console.log("backgroundColor: " + localStorage.getItem("backgroundColor"));
        document.body.style.background = localStorage.getItem("backgroundColor");
    }

    if (localStorage.getItem("textColor") !== null) {
        console.log("textColor: " + localStorage.getItem("textColor"));

        for (var i = 0; i < document.getElementsByTagName("h2").length; i += 1) {
            var title = document.getElementsByTagName("h2")[i];
            //            title.style.font = "Impact"; //why is 'font' not working??
            title.style.color = localStorage.getItem("textColor");

        }

        for (var i = 0; i < document.getElementsByTagName("h1").length; i += 1) {
            var title = document.getElementsByTagName("h1")[i];
            //            title.style.font = "italic bold 20px";
            title.style.color = localStorage.getItem("textColor");

        }
        //        document.body.style.background = localStorage.getItem("textColor");
    }

    var title = document.getElementById("pageTitle");

    if (localStorage.getItem("titleStyle") == "retro") {
        title.textContent = "Ye Olde Printingus Pressus";
        title.style.fontSize = "50px";
        title.style.textDecoration = "underline";
        title.style.fontStyle = "normal";
        title.style.color = localStorage.getItem("textColor");
    }
    if (localStorage.getItem("titleStyle") == "futuristic") {
        title.textContent = "iJournal 2.0 [Beta]";
        title.style.fontSize = "50px";
        title.style.fontStyle = "italic";
        title.style.color = localStorage.getItem("textColor");
    }
    if (localStorage.getItem("titleStyle") == "normal") {
        title.textContent = "Journal Website";
        title.style.fontSize = "50px";
        title.style.fontStyle = "normal";
        title.style.color = localStorage.getItem("textColor");
    }

    for (var i = 0; i < document.getElementsByTagName('nav').length; i += 1) {
        var button = document.getElementsByTagName("nav")[i];
        button.style.color = localStorage.getItem("textColor");
    }

} //func

function selectDefaultStyle() {
    //    ....TODO
}

//select default background color for style.css
function selectBackground() {
    document.body.style.background = document.getElementById("selectBackground").value;
    console.log("document background color changed to: " + document.getElementById("selectBackground").value);
    localStorage.setItem("backgroundColor", document.getElementById("selectBackground").value);
}

function selectTextColor() {
    console.log("selectTextColor");
    for (var i = 0; i < document.getElementsByTagName("h2").length; i += 1) {
        var title = document.getElementsByTagName("h2")[i];
        //            title.style.font = "Impact"; //why is 'font' not working??
        title.style.color = document.getElementById("selectTextColor").value;
    }
    for (var i = 0; i < document.getElementsByTagName("h1").length; i += 1) {
        var title = document.getElementsByTagName("h1")[i];
        //            title.style.font = "italic bold 20px";
        title.style.color = document.getElementById("selectTextColor").value;
    }

    localStorage.setItem("textColor", document.getElementById("selectTextColor").value);
}

function selectTitle() {

    var title = document.getElementById("pageTitle");
    if (document.getElementById("selectTitle").value === "retro") {
        title.textContent = "Ye Olde Printingus Pressus";
        title.style.fontSize = "50px";
        title.style.textDecoration = "underline";
        title.style.color = localStorage.getItem("textColor");
    }
    if (document.getElementById("selectTitle").value === "futuristic") {
        title.textContent = "iJournal 2.0 [Beta]";
        title.style.fontSize = "50px";
        title.style.fontStyle = "italic";
        title.style.color = localStorage.getItem("textColor");
    }
    if (document.getElementById("selectTitle").value === "normal") {
        title.textContent = "Journal Website";
        title.style.fontSize = "50px";
        title.style.fontStyle = "normal";
        title.style.color = localStorage.getItem("textColor");
    }

    localStorage.setItem("titleStyle", document.getElementById("selectTitle").value);
}

function ajaxTest() {
    console.log("ajaxTest()");

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("submitStatus").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "http://localhost:8080/ajax", true);
        xhttp.send();

//    var http = require('http');
//    var options = {
//        host: 'www.google.com',
//        path: '/index.html'
//    };
//
//    var req = http.get(options, function (res) {
//        console.log('STATUS: ' + res.statusCode);
//        console.log('HEADERS: ' + JSON.stringify(res.headers));
//
//        // Buffer the body entirely for processing as a whole.
//        var bodyChunks = [];
//        res.on('data', function (chunk) {
//            // You can process streamed parts here...
//            bodyChunks.push(chunk);
//        }).on('end', function () {
//            var body = Buffer.concat(bodyChunks);
//            console.log('BODY: ' + body);
//            // ...and/or process the entire body here.
//        })
//    });
//
//    req.on('error', function (e) {
//        console.log('ERROR: ' + e.message);
//    });

}











