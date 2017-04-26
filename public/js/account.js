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
    
    if (localStorage.getItem("titleStyle") == "retro")
        {
                title.textContent = "Ye Olde Printingus Pressus";
                title.style.fontSize = "50px";
                title.style.textDecoration = "underline";
                title.style.fontStyle = "normal";
                title.style.color = localStorage.getItem("textColor");
        }
    if (localStorage.getItem("titleStyle") == "futuristic")
        {
                title.textContent = "iJournal 2.0 [Beta]";
                title.style.fontSize = "50px";
                title.style.fontStyle = "italic";
                title.style.color = localStorage.getItem("textColor");
        }
    if (localStorage.getItem("titleStyle") == "normal")
        {
                title.textContent = "Journal Website";
                title.style.fontSize = "50px";
                title.style.fontStyle = "normal";
                title.style.color = localStorage.getItem("textColor");
        }

    for (var i = 0; i < document.getElementsByTagName('nav').length; i += 1)
        {
            var button = document.getElementsByTagName("nav")[i];
            button.style.color = localStorage.getItem("textColor");
        }
    
}//func

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
    if (document.getElementById("selectTitle").value === "retro")
        {
                title.textContent = "Ye Olde Printingus Pressus";
                title.style.fontSize = "50px";
                title.style.textDecoration = "underline";
                title.style.color = localStorage.getItem("textColor");
        }
    if (document.getElementById("selectTitle").value === "futuristic")
        {
                title.textContent = "iJournal 2.0 [Beta]";
                title.style.fontSize = "50px";
                title.style.fontStyle = "italic";
                title.style.color = localStorage.getItem("textColor");
        }
    if (document.getElementById("selectTitle").value === "normal")
        {
                title.textContent = "Journal Website";
                title.style.fontSize = "50px";
                title.style.fontStyle = "normal";
                title.style.color = localStorage.getItem("textColor");
        }
        
    localStorage.setItem("titleStyle", document.getElementById("selectTitle").value);
}









