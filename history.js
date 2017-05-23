/* jshint browser: true */
/*global $ */
/*global console */
/*global gapi */


function makeApiCall() {
    "use strict";

    gapi.client.load('calendar', 'v3', function () {
        var request = gapi.client.calendar.events.list({
            'calendarId': 'primary'
        });

        $("ul").empty(); //clears the list after each option change

        request.execute(function (resp) {
            for (var i = 0; i < resp.items.length; i++) {

                var li = document.createElement('li');
                var y = document.getElementById("selectYear");
                var m = document.getElementById("selectMonth");
                var valueMonth = m.options[m.selectedIndex].value;
                var valueYear = y.options[y.selectedIndex].value;
                var dateString = resp.items[i].start.date;

                li.appendChild(document.createTextNode(resp.items[i].summary));
                li.appendChild(document.createTextNode(resp.items[i].etag));
                li.appendChild(document.createTextNode(resp.items[i].start.date));
                li.appendChild(document.createTextNode(resp.items[i].end.date));

                if (dateString !== undefined) {
                    var splitString = dateString.split('-');
                    var eventYear = splitString[0];
                    var eventMonth = splitString[1];
                    var eventDay = splitString[2];

                    if (eventYear == valueYear && eventMonth == valueMonth) {
                        document.getElementById('events').appendChild(li);

                        //because these are '01, 02, etc' and calandarBox is '1, 2, etc'
                        var shortenedNumber = +eventDay; //parseInt not working 
                        var targetID = "calandarBox" + shortenedNumber;
                        document.getElementById(targetID).value = resp.items[i].summary;
                    }
                }
            } //for
        }); //function(resp)
    }); //function()
} //makeApiCall







function loadBoxes() {

    $("div2").empty(); //clears the list after each option change

    var div = document.getElementById("div2");
    var m = document.getElementById("selectMonth");
    var y = document.getElementById("selectYear");
    var valueMonth = m.options[m.selectedIndex].value;
    var valueYear = y.options[y.selectedIndex].value;
    var storageEmail = localStorage.getItem('email');

    $.post("http://localhost:8080/loadentries", {
        email: storageEmail
    }, function (data, status) { //this is the callback function. it only executes when/IF the callback occurs

        console.log("data: " + data); //data is already a string
        console.log("status = " + status);

        var length = 31;
        if (valueMonth == 2) {
            length = 28; //feburary has 29 days (leap years not dealt with yet)
        }
        if (valueMonth == 4 || valueMonth == 5 || valueMonth == 9 || valueMonth == 11) {
            length = 30; //april, june, september & november have 30 days
        }

        for (var i = 1; i <= length; i += 1) {

            var inputJournal = document.createElement("textarea");
            inputJournal.cols = "15";
            inputJournal.rows = "4";
            inputJournal.style.resize = "none";
            inputJournal.placeholder = i;
            inputJournal.id = "calandarBox" + i.toString();

            if (i < 10) //to turn '1' into '01'
            {
                var dateString = "D0" + i + "M" + valueMonth + "Y" + valueYear;
            } else {
                var dateString = "D" + i + "M" + valueMonth + "Y" + valueYear;
            }

            var found = data.search(dateString);
            if (found > -1) {

                var subData = data.substr(found, data.length - found);
                var dataArray = subData.split("\""); //using ["] as divider

                if (dataArray[1] !== ":null,") {
                    inputJournal.value = dataArray[2];

                    console.log("entry found for day: " + dateString);
                    console.log("subData: " + subData);
                    console.log("dataArray[2] = " + dataArray[2]);
                }
            }
            div.appendChild(inputJournal);
        } //for

    });







} //loadBoxes()
