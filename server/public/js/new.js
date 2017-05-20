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
        posName = position.toString();


    var storageEmail = localStorage.getItem('email');
    console.log("storageEmail: " + storageEmail);

    $.post("http://localhost:8080/newentry", {
        text: document.getElementById('journalText').value,
        date: getDate(),
        email: storageEmail
    }, function (data, status) { //this is the callback function. it only executes when/IF the callback occurs

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


        sessionStorage.setItem(posName, document.getElementById('journalText').value);

        if (document.getElementById('titleText').value === "") { //if user has NOT entered title
            sessionStorage.setItem('title' + posName, getDate());

            //start new addition
            sessionStorage.setItem(getDate(), document.getElementById('journalText').value);

            sessionStorage.setItem("fontColor" + getDate(), document.getElementById('journalText').style.color);
            sessionStorage.setItem("fontSize" + getDate(), document.getElementById('journalText').style.fontSize);
            sessionStorage.setItem("fontFamily" + getDate(), document.getElementById('journalText').style.fontFamily);

            console.log("item set using tag [" + getDate() + "]");
            console.log("text should exist: " + sessionStorage.getItem(getDate()));
            console.log("fontColor tag: " + "fontColor" + getDate());
            //end new addition
        } else { //if user HAS entered title
            sessionStorage.setItem('title' + posName, document.getElementById('titleText').value);

            //start new addition
            sessionStorage.setItem(document.getElementById('titleText').value, document.getElementById('journalText').value);

            sessionStorage.setItem("fontColor" + document.getElementById('titleText').value, document.getElementById('journalText').style.color);
            sessionStorage.setItem("fontSize" + document.getElementById('titleText').value, document.getElementById('journalText').style.fontSize);
            sessionStorage.setItem("fontFamily" + document.getElementById('titleText').value, document.getElementById('journalText').style.fontFamily);

            console.log("item set using tag [" + document.getElementById('titleText').value + "]");
            console.log("text should exist: " + sessionStorage.getItem(document.getElementById('titleText').value));
            console.log("fontColor tag: " + "fontColor" + document.getElementById('titleText').value);
            //end new addition
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


        //     Math.floor((Math.random() * 100) + 1);
        //
        //The result could be: 52 
        //    

        //    var nounRand = ;
        //    var nounRandTwo = );
        //    
        //    alert(nounRand + " vs " + nounRandTwo);

        selectNoun = noun[Math.floor((Math.random()) * noun.length)],
        selectNounTwo = noun[Math.floor((Math.random()) * noun.length)],

        selectAdjective = adjective[Math.floor((Math.random()) * adjective.length)],
        selectAdjectiveTwo = adjective[Math.floor((Math.random()) * adjective.length)],

        selectAdverb = adverb[Math.floor((Math.random()) * adverb.length)],

        selectVerb = verb[Math.floor((Math.random()) * verb.length)],

        answer = "\"The " + selectAdjective + " " + selectNoun + " was " + selectAdverb + " " + selectVerb + " the " + selectAdjectiveTwo + " " + selectNounTwo + " when...\"";

    //    alert(answer);

    document.getElementById('randomBox').innerHTML = answer;

    //    return 


}
