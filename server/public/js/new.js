/* jshint browser: true */
/*global $ */
/*global console */
/*global gapi */


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
    console.log("testSet()");
    //works out how many entries there are, then + 1 to get to an empty place.
    var position = getNumEntries() + 1,
        posName = position.toString(),
        storageEmail = localStorage.getItem('email'),
        text = document.getElementById('journalText').value,
        fontStyle = document.getElementById('journalText').style.fontStyle,
        fontWeight = document.getElementById('journalText').style.fontWeight,
        fontSize = document.getElementById('journalText').style.fontSize,
        fontFamily = document.getElementById('journalText').style.fontFamily,
        textDecoration = document.getElementById('journalText').style.textDecoration,
        color = document.getElementById('journalText').style.color,
        jsonString = "{ text: '" + text + "', fontStyle: '" + fontStyle + "', fontWeight: '" + fontWeight + "', fontSize: '" + fontSize + "', fontFamily: '" + fontFamily + "', textDecoration: '" + textDecoration + "', color: '" + color + "'}";
        
    console.log("storageEmail: " + storageEmail);
    

    
    console.log("jsonString: " + jsonString);
        
    //for history.html:
    //var json = JSON.stringify(eval("(" + str + ")"));

    text = text.replace(/;/g, ',');
    text = text.replace(/\(/g, "[");
    text = text.replace(/\)/g, "]");

    $.post("http://localhost:8080/newentry", {
        text: text,
        date: getDate(),
        email: storageEmail
    }, function (data, status) { //this is the callback function. it only executes when/IF the callback occurs

        console.log("text: " + text);
        console.log("data: " + data); //data is a string
        console.log("status = " + status);
    });

    //––––––––––––– text that appears when the 'submit' button is pressed
    document.getElementById("submitStatus").style.background = "white";
    if (document.getElementById('journalText').value === "") {
        //'null' does not work here!
        document.getElementById("submitStatus").style.color = "red";
        document.getElementById("submitStatus").innerHTML = "Submission error: write something before submiting!";
    } else {
        document.getElementById("submitStatus").style.color = "green";
        document.getElementById("submitStatus").innerHTML = "Submission successful! Total journal entries: " + posName;
    }
}

function sentence() {
    "use strict";

    var noun = [
            "cat",
            "mouse",
            "bicycle",
            "fridge",
            "plastic bag",
            "globe",
            "frog",
            "brain",
            "shoe",
            "student",
            "pipe",
            "oven glove",
            "book",
            "hamster",
            "species",
            "reality",
            "onion",
            "sock-puppet",
            "pig",
            "family",
            "computer program",
            "python",
            "optimist",
            "hotdog"
        ],

        adverb = [
            "reluctantly",
            "carefully",
            "heroically",
            "blasphemously",
            "enthusiastically",
            "absent-mindedly",
            "quickly",
            "haphazardly",
            "inconsistently",
            "repeatedly",
            "arguably",
            "alledgedly",
            "still",
            "finally",
            "almost",
            "eternally",
            "sheepishly",
            "impatiently"
        ],

        adjective = [
            "funny",
            "smelly",
            "dead",
            "chubby",
            "hairy",
            "stupid",
            "brainy",
            "futuristic",
            "confused",
            "attractive",
            "dishevelled",
            "pointy",
            "unfortunate",
            "inconvenient",
            "flattened",
            "burnt",
            "frozen",
            "domesticated",
            "filthy",
            "blithering",
            "heroic",
            "flabby",
            "crumpled",
            "anacronistic",
            "hopeful",
            "prudish",
            'orange'
        ],

        verb = [
            "freezing",
            "dropping",
            "failing",
            "drowning",
            "flying",
            "running",
            "cooking",
            "forgetting",
            "remembering",
            "drinking",
            "scaring",
            "deep-frying",
            "astounding",
            "contemplating",
            "heckling",
            "laughing at",
            "avoiding",
            "comforting",
            "spending",
            "gift-wrapping",
            "unpacking",
            "fobbing off",
            "politely ignoring",
            "pretending to be",
            "treading on",
            "programming",
            "feeding",
            "corresponding with",
            "calming",
            "outraging",
            "mystifying",
            "rolling"
        ],

        selectNoun = noun[Math.floor((Math.random()) * noun.length)],
        selectNounTwo = noun[Math.floor((Math.random()) * noun.length)],

        selectAdjective = adjective[Math.floor((Math.random()) * adjective.length)],
        selectAdjectiveTwo = adjective[Math.floor((Math.random()) * adjective.length)],

        selectAdverb = adverb[Math.floor((Math.random()) * adverb.length)],

        selectVerb = verb[Math.floor((Math.random()) * verb.length)],

        answer = "\"The " + selectAdjective + " " + selectNoun + " was " + selectAdverb + " " + selectVerb + " the " + selectAdjectiveTwo + " " + selectNounTwo + " when...\"";

    document.getElementById('randomBox').innerHTML = answer;
}
