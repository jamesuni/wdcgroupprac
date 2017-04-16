

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
