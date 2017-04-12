/* jshint browser: true */



function boldText() {
    "use strict";
    if (document.getElementById('journalText').style.fontWeight === "bold") {
        document.getElementById('journalText').style.fontWeight = "normal";
        document.getElementById('buttonBold').style.backgroundColor = "transparent";
    } else {
        document.getElementById('journalText').style.fontWeight = "bold";
        document.getElementById('buttonBold').style.backgroundColor = "lightblue";
    }
}

function italicText() {
    "use strict";
    if (document.getElementById('journalText').style.fontStyle === "italic") {
        document.getElementById('journalText').style.fontStyle = "normal";
        document.getElementById('buttonItalic').style.backgroundColor = "transparent";
    } else {
        document.getElementById('journalText').style.fontStyle = "italic";
        document.getElementById('buttonItalic').style.backgroundColor = "lightblue";
    }
}

function underlineText() {
    "use strict";
    if (document.getElementById('journalText').style.textDecoration === "underline") {
        document.getElementById('journalText').style.textDecoration = "none";
        document.getElementById('buttonUnderline').style.backgroundColor = "transparent";
    } else {
        document.getElementById('journalText').style.textDecoration = "underline";
        document.getElementById('buttonUnderline').style.backgroundColor = "lightblue";
    }
}



function chooseFont() {
    "use strict";
    document.getElementById('journalText').style.fontFamily = document.getElementById('textFont').value;
}

function chooseSize() {
    "use strict";
    document.getElementById('journalText').style.fontSize = document.getElementById('textSize').value;
}

function chooseColor() {
    "use strict";
    document.getElementById('journalText').style.color = document.getElementById('textColor').value;
}


function getDate() {
    "use strict";
    //credit to http://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

    var today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth() + 1, //January is 0!
        yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;

    return today;
}


function titleTextClick() {
    "use strict";
    var today = getDate();
    document.getElementById('titleText').placeholder = "(Default title: " + today + ")";
}

function journalTextClick() {
    "use strict";
    document.getElementById('journalText').placeholder = "What happened today? Start at the beginning...";
}






//returns the number of journal entries
function getNumEntries() {
    "use strict";
    var numEntries = 0,
        i = 0;
    for (i = 1; i < 20; i += 1) {
        //note is just 'i = 1' not 'var i = i'
        if (sessionStorage.getItem(i.toString()) !== null) {
            numEntries += 1;
        }
    }
    return numEntries;
}






function testSet() {
    "use strict";
    //works out how many entries there are, then + 1 to get to an empty place.
    var position = getNumEntries() + 1,
        posName = position.toString();


    //––––––––––––– text that appears when the 'submit' button is pressed
    document.getElementById("submitStatus").style.background = "white";
    if (document.getElementById('journalText').value === "") {
        //'null' does not work here!
        document.getElementById("submitStatus").style.color = "red";
        document.getElementById("submitStatus").innerHTML = "Submission error: write something before submiting!";
    } else {
        document.getElementById("submitStatus").style.color = "green";
        document.getElementById("submitStatus").innerHTML = "Submission successful! Total journal entries: " + posName;


        sessionStorage.setItem(posName, document.getElementById('journalText').value);

        if (document.getElementById('titleText').value === "") {
            sessionStorage.setItem('title' + posName, getDate());
        } else {
            sessionStorage.setItem('title' + posName, document.getElementById('titleText').value);
        }

        if (document.getElementById('journalText').style.fontWeight === "bold") {
            sessionStorage.setItem("bold" + posName, "true");
        } else {
            sessionStorage.setItem("bold" + posName, "false");
        }

        if (document.getElementById('journalText').style.fontStyle === "italic") {
            sessionStorage.setItem("italic" + posName, "true");
        } else {
            sessionStorage.setItem("italic" + posName, "false");
        }

        if (document.getElementById('journalText').style.textDecoration === "underline") {
            sessionStorage.setItem("underline" + posName, "true");
        } else {
            sessionStorage.setItem("underline" + posName, "false");
        }
    }


    sessionStorage.setItem("fontColor" + posName, document.getElementById('journalText').style.color);
    sessionStorage.setItem("fontSize" + posName, document.getElementById('journalText').style.fontSize);
    sessionStorage.setItem("fontFamily" + posName, document.getElementById('journalText').style.fontFamily);
}




function newTextarea() {
    "use strict";

    var numEntries = getNumEntries(),
        div = document.getElementById("divThree"),
        inputTitle = document.createElement("textarea"),
        inputJournal = document.createElement("textarea"),
        i = 0;

    //––––––––––––– text that appears when the 'submit' button is pressed
    if (sessionStorage.getItem('1') === null) {
        document.getElementById("submitStatus").style.background = "white";
        document.getElementById("submitStatus").style.color = "red";
        document.getElementById("submitStatus").innerHTML = "Submission error: you don't have any past journal entries!";
    } else {
        //credit to http://stackoverflow.com/questions/7377399/creating-a-textarea-with-javascript#7377447


        for (i = 1; i <= numEntries; i += 1) {

            inputTitle = document.createElement("textarea");
            inputJournal = document.createElement("textarea");

            inputJournal.value = sessionStorage.getItem(i.toString());
            inputTitle.value = sessionStorage.getItem('title' + i.toString());

            if (sessionStorage.getItem("bold" + i.toString()) === "true") {
                inputJournal.style.fontWeight = "bold";
            }

            if (sessionStorage.getItem("italic" + i.toString()) === "true") {
                inputJournal.style.fontStyle = "italic";
            }

            if (sessionStorage.getItem("underline" + i.toString()) === "true") {
                inputJournal.style.textDecoration = "underline";
            }

            inputJournal.style.color = sessionStorage.getItem('fontColor' + i.toString());
            inputJournal.style.fontSize = sessionStorage.getItem('fontSize' + i.toString());
            inputJournal.style.fontFamily = sessionStorage.getItem('fontFamily' + i.toString());


            inputTitle.cols = "50";
            inputTitle.rows = "1";

            inputJournal.cols = "50";
            inputJournal.rows = "20";

            div.appendChild(inputTitle);

            div.appendChild(inputJournal);

        } //for
    } //else
}




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
