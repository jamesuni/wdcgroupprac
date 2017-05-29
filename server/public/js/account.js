/* jshint browser: true */
/*global $ */
/*global console */
/*global gapi */

//this function loads all default settings.
function loadBackgroundColor() {
    "use strict";
    console.log("loadBackgroundColor();");

    var storageEmail = localStorage.getItem('email'),
        title = document.getElementById("pageTitle"),
        i = 0,
        button = null;

    $.post("http://localhost:8080/loadsettings", {
        email: storageEmail
    }, function (data, status) { //this is the callback function. it only executes when/IF the callback occurs

        var dataJ = JSON.parse(data),
            email = $.trim(dataJ.Email).toLowerCase(),
            backgroundColor = $.trim(dataJ.BackgroundColor).toLowerCase(),
            textColor = $.trim(dataJ.TextColor).toLowerCase(),
            i = 0,
            selectedTitle = "error";

        document.body.style.background = backgroundColor;

        for (i = 0; i < document.getElementsByTagName("h1").length; i += 1) {
            selectedTitle = document.getElementsByTagName("h1")[i];
            selectedTitle.style.color = textColor;
        }
        for (i = 0; i < document.getElementsByTagName("h2").length; i += 1) {
            selectedTitle = document.getElementsByTagName("h2")[i];
            selectedTitle.style.color = textColor;
        }
    });

    if (localStorage.getItem("titleStyle") === "retro") {
        title.textContent = "Ye Olde Printingus Pressus";
        title.style.fontSize = "50px";
        title.style.textDecoration = "underline";
        title.style.fontStyle = "normal";
        title.style.color = localStorage.getItem("textColor");
    }
    if (localStorage.getItem("titleStyle") === "futuristic") {
        title.textContent = "iJournal 2.0 [Beta]";
        title.style.fontSize = "50px";
        title.style.fontStyle = "italic";
        title.style.color = localStorage.getItem("textColor");
    }
    if (localStorage.getItem("titleStyle") === "normal") {
        title.textContent = "Journal Website";
        title.style.fontSize = "50px";
        title.style.fontStyle = "normal";
        title.style.color = localStorage.getItem("textColor");
    }

    for (i = 0; i < document.getElementsByTagName('nav').length; i += 1) {
        button = document.getElementsByTagName("nav")[i];
        button.style.color = localStorage.getItem("textColor");
    }

} //func

//select default background color for style.css
function selectBackground() {
    "use strict";
    document.body.style.background = document.getElementById("selectBackground").value;
    console.log("document background color changed to: " + document.getElementById("selectBackground").value);
    localStorage.setItem("backgroundColor", document.getElementById("selectBackground").value);
}

function selectTextColor() {
    "use strict";
    var i = 0,
        title = "error";

    console.log("selectTextColor");
    for (i = 0; i < document.getElementsByTagName("h2").length; i += 1) {
        title = document.getElementsByTagName("h2")[i];
        //            title.style.font = "Impact"; //why is 'font' not working??
        title.style.color = document.getElementById("selectTextColor").value;
    }
    for (i = 0; i < document.getElementsByTagName("h1").length; i += 1) {
        title = document.getElementsByTagName("h1")[i];
        //            title.style.font = "italic bold 20px";
        title.style.color = document.getElementById("selectTextColor").value;
    }

    localStorage.setItem("textColor", document.getElementById("selectTextColor").value);
}

function selectTitle() {
    "use strict";

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
