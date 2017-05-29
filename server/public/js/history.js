/* jshint browser: true */
/*global $ */
/*global console */
/*global gapi */

function makeApiCall() {
    "use strict";

    var li = document.createElement('li'),
        y = document.getElementById("selectYear"),
        m = document.getElementById("selectMonth"),
        valueMonth = m.options[m.selectedIndex].value,
        valueYear = y.options[y.selectedIndex].value,
        i = 0;

    gapi.client.load('calendar', 'v3', function () {
        var request = gapi.client.calendar.events.list({
            'calendarId': 'primary'
        });

        $("ul").empty(); //clears the list after each option change

        request.execute(function (resp) {
            for (i = 0; i < resp.items.length; i = i + 1) {

                var dateString = resp.items[i].start.date,
                    splitString = dateString.split('-'),
                    eventYear = splitString[0],
                    eventMonth = splitString[1],
                    eventDay = splitString[2],
                    shortenedNumber = +eventDay, //parseInt not working 
                    targetID = "calandarBox" + shortenedNumber;
                
                li.appendChild(document.createTextNode(resp.items[i].summary));
                li.appendChild(document.createTextNode(" –––––– "));
                li.appendChild(document.createTextNode(resp.items[i].start.date));

                if (dateString !== undefined) {

                    if (eventYear === valueYear && eventMonth === valueMonth) {
                        document.getElementById('events').appendChild(li);
                        document.getElementById(targetID).value = resp.items[i].summary;
                    }
                }
            } //for
        }); //function(resp)
    }); //function()
} //makeApiCall()

function loadBoxes() {
    "use strict";

    $("div2").empty(); //clears the list after each option change

    var div = document.getElementById("div2"),
        m = document.getElementById("selectMonth"),
        y = document.getElementById("selectYear"),
        valueMonth = m.options[m.selectedIndex].value,
        valueYear = y.options[y.selectedIndex].value,
        storageEmail = localStorage.getItem('email'),
        i = 0;

    $.post("http://localhost:8080/loadentries", {
        email: storageEmail
    }, function (data, status) { //this is the callback function. it only executes when/IF the callback occurs

        console.log("data: " + data); //data is already a string
        console.log("status = " + status);

        var length = 31,
            inputJournal = null,
            dateString = "D" + i + "M" + valueMonth + "Y" + valueYear,
            found = -1,
            subData = "error",
            dataArray = "error";
        
        if (valueMonth === 2) {
            length = 28; //feburary has 29 days (leap years not dealt with yet)
        }
        if (valueMonth === 4 || valueMonth === 5 || valueMonth === 9 || valueMonth === 11) {
            length = 30; //april, june, september & november have 30 days
        }

        for (i = 1; i <= length; i += 1) {

            dateString = "D" + i + "M" + valueMonth + "Y" + valueYear;
            inputJournal = document.createElement("textarea");
            inputJournal.cols = "15";
            inputJournal.rows = "4";
            inputJournal.style.resize = "none";
            inputJournal.placeholder = i;
            inputJournal.id = "calandarBox" + i.toString();

            if (i < 10) {
                dateString = "D0" + i + "M" + valueMonth + "Y" + valueYear; //to turn '1' into '01'
            }
            found = data.search(dateString);
            
            if (found > -1) {

                subData = data.substr(found, data.length - found);
                dataArray = subData.split("\""); //using ["] as divider

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
