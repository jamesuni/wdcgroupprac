/* jshint browser: true */
/*global $ */
/*global console */
/*global gapi */

function addEvent() {
    "use strict";
    console.log("addEvent()");

    var year = document.getElementById('selectYear').value,
        month = document.getElementById('selectMonth').value,
        day = document.getElementById('selectDay').value,
        title = document.getElementById('title').value,
        description = document.getElementById('description').value,
        dateString = year + "–" + month + "–" + day,
        event = {
            'summary': title,
            'description': description,
            'start': {
                'dateTime': dateString + 'T09:00:00-07:00'
            },
            'end': {
                'dateTime': dateString + 'T09:00:00-07:00'
            }
        },
        request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        });


    console.log("Year: " + year + " Month: " + month + " Day: " + day);
    console.log("Title: " + title + " Description: " + description);

    request.execute(function (event) {
        console.log('Event created: ' + event.htmlLink);
    });

}
