/* jshint browser: true */

//Verification.js
//verifyEmail() ----- checks the text entered is in an 'email address' format
//verifyPassword() ----- checks the text entered is < 8 chars, and has numbers and symbols
//verifyLogin() ---- checks that verifyEmail() and verifyPassword() are true, then logs person in and stores their login info. otherwise, prompts user why login failed.

function verifyEmail() {
    "use strict";

    var stringEmail = document.getElementById('emailText').value,
        containsSign = stringEmail.search('@'),
        containsDot = stringEmail.search(/\./); //.search('.') does not work as '.' is Regular Expression for 'any', so if the string contains anything, it will return true

    if (containsSign === -1) {
        document.getElementById('emailText').style.borderColor = "red";
        document.getElementById('emailText').value = "";
        document.getElementById('emailText').placeholder = "(must contain '@')";
        return false;
    } else if (containsDot === -1) {
        document.getElementById('emailText').style.borderColor = "red";
        document.getElementById('emailText').value = "";
        document.getElementById('emailText').placeholder = "(must contain '.')";
        return false;
    } else {
        document.getElementById('emailText').style.borderColor = "blue";
        return true;
    }
}


function verifyPassword() {
    "use strict";
    var stringPassword = document.getElementById('passwordText').value,
        numberArray = "0123456789",
        symbolArray = "!@#$%^&*<>?`~|:;().,{}[]",
        containsNumber = false,
        containsSymbol = false,
        i = 0,
        j = 0;

    for (i = 0; i < stringPassword.length; i += 1) {
        //note it is just 'i = 0' not 'int i = 0'
        //NUMBERS
        for (j = 0; j < numberArray.length; j += 1) {
            if (stringPassword.charAt(i) === numberArray.charAt(j)) {
                containsNumber = true;
            }
        }

        //SYMBOLS
        for (j = 0; j < symbolArray.length; j += 1) {
            if (stringPassword.charAt(i) === symbolArray.charAt(j)) {
                containsSymbol = true;
            }
        }
    }


    if (stringPassword.length < 6) {
        document.getElementById('passwordText').style.borderColor = "red";
        document.getElementById('passwordText').value = "";
        document.getElementById('passwordText').placeholder = "(6 letters or more)";
    } else if (containsNumber === false) {
        document.getElementById('passwordText').style.borderColor = "red";
        document.getElementById('passwordText').value = "";
        document.getElementById('passwordText').placeholder = "(must contain a number)";
    } else if (containsSymbol === false) {
        document.getElementById('passwordText').style.borderColor = "red";
        document.getElementById('passwordText').value = "";
        document.getElementById('passwordText').placeholder = "(must contain a symbol)";
    } else {
        document.getElementById('passwordText').style.borderColor = "blue";
    }
}





function verifyLogin() {
    "use strict";

    document.getElementById("submitStatus").style.background = "white";
    //    alert(document.getElementById("paswordText").value); //doesn't work! because it is password type?

    //    Boolean isEmailValid = verifyEmail; //causing error
    var isEmailValid = verifyEmail(); //NOT WORKING. WHY?

    if (document.getElementById("emailText").value === "") {
        document.getElementById("submitStatus").style.color = "red";
        document.getElementById("submitStatus").innerHTML = "Submission error: enter an email address!";
    } else if (isEmailValid === false) {
        //NOT WORKING. WHY?
        document.getElementById("submitStatus").style.color = "red";
        document.getElementById("submitStatus").innerHTML = "Submission error: email address was not valid.";
    } else {
        sessionStorage.setItem('emailText', document.getElementById('emailText').value);

        document.getElementById("submitStatus").style.color = "green";
        document.getElementById("submitStatus").innerHTML = "Submission successful! You are now logged in.";
    }


}

    //the fact it is type 'password' is causing it to block actions, like 'alert(pasword)'  !
    //    else if (document.getElementById("paswordText").value == "")
    //    {
    //                document.getElementById("submitStatus").style.color = "red";
    //                document.getElementById("submitStatus").innerHTML = "Submission error: enter your password";
    //    }
