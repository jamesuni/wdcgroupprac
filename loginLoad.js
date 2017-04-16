

function loadLogin() {
    "use strict";
    if (sessionStorage.getItem('emailText') !== null) {
        document.getElementById("loginBox").innerHTML = "Logged in as: [" + sessionStorage.getItem('emailText') + "]";
        document.getElementById("loginBox").style.color = "blue";


        var element = document.createElement("button"),
            foo = document.getElementById("loginBox");


        element.innerText = "Logout";
        element.id = "logout";
        element.onclick = function () {
            sessionStorage.removeItem("emailText");
            sessionStorage.removeItem("passwordText");
            window.location.reload(false);
        };
        foo.appendChild(element);


    }
}
