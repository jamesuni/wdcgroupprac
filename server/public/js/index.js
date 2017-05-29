/* jshint browser: true */
/*global $ */
/*global console */
/*global gapi */

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// controls the functionality of the next button
function onSignIn(googleUser) {
    "use strict";

    var profile = googleUser.getBasicProfile(),
        email = profile.getEmail();

    console.log("onSignIn()");
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    localStorage.setItem("email", email);

    $.post("http://localhost:8080/email", {
        email: email
    }, function (data) {
        if (data === 'done') {
            console.log("email.date == done");
        }
    });

    window.location.replace('new.html');
}

// controls the functionality of the register button
function register() {
    "use strict";   //this DID stop the page from moving on? but it works now..?
    console.log("register()");
    if (document.getElementsByName("task") === "Account Sign In") {
//        document.getElementsByName("task") = "Create New Account";
//        document.getElementsByName("forminput") = "";
        document.getElementByName("next").style.visibility = "hidden";
    }
}
