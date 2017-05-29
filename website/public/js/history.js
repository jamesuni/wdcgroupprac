        function makeApiCall() {
            gapi.client.load('calendar', 'v3', function () {
                var request = gapi.client.calendar.events.list({
                    'calendarId': 'primary',
                });

                $("ul").empty(); //clears the list after each option change

                request.execute(function (resp) {
                    for (var i = 0; i < resp.items.length; i++) {


                        var li = document.createElement('li');

                        li.appendChild(document.createTextNode(resp.items[i].summary));
                        li.appendChild(document.createTextNode(resp.items[i].etag));
                        li.appendChild(document.createTextNode(resp.items[i].start.date));
                        li.appendChild(document.createTextNode(resp.items[i].end.date));

                        var y = document.getElementById("selectYear");
                        var m = document.getElementById("selectMonth");

                        var valueMonth = m.options[m.selectedIndex].value;
                        var valueYear = y.options[y.selectedIndex].value;

                        //console.log("valueMonth: " + valueMonth);
                        //console.log("valueYear: " + valueYear);

                        var dateString = resp.items[i].start.date;

                        if (dateString != undefined) {
                            var splitString = dateString.split('-');

                            var eventYear = splitString[0];
                            var eventMonth = splitString[1];
                            var eventDay = splitString[2];

                            //console.log("eventYear: " + eventYear);
                            //console.log("eventMonth: " + eventMonth);
                            //console.log("eventDay: " + eventDay);

                            if (eventYear == valueYear && eventMonth == valueMonth) {
                                document.getElementById('events').appendChild(li);


                                //because these are '01, 02, etc' and calandarBox is '1, 2, etc'
                                var shortenedNumber = +eventDay; //parseInt not working 
                                var targetID = "calandarBox" + shortenedNumber;

                                //console.log("targetID: " + targetID);

                                document.getElementById(targetID).value = resp.items[i].summary;
                            }

                        }
                    } //for
                }); //function(resp)
            }); //function()
        } //makeApiCall









        function loadBoxes() {

            $("div2").empty(); //clears the list after each option change

            var div = document.getElementById("div2")

            var m = document.getElementById("selectMonth");
            var y = document.getElementById("selectYear");

            var valueMonth = m.options[m.selectedIndex].value;
            var valueYear = y.options[y.selectedIndex].value;

            var length = 31;
            if (valueMonth == 2) {
                length = 28; //feburary has 29 days (leap years not dealt with yet)
            }
            if (valueMonth == 4 || valueMonth == 5 || valueMonth == 9 || valueMonth == 11) {
                length = 30; //april, june, september & november have 30 days
            }

            for (i = 1; i <= length; i += 1) {

                inputJournal = document.createElement("textarea");
                inputJournal.cols = "15";
                inputJournal.rows = "4";
                inputJournal.style.resize = "none";
                inputJournal.placeholder = i;
                inputJournal.id = "calandarBox" + i.toString(); //they can't all have the same ID - you need to do things to individual boxes, such as load events into them!
                //console.log("id created = " + inputJournal.id);



                //–––––––here, test the data input starting with just '
                //console.log(valueMonth + "-" + valueYear + "-" + i);
                //console.log("sessionStorage.getItem(" + i.toString + ") == " + sessionStorage.getItem(i.toString()))


                
                if (i < 10) //to turn '1' into '01'
                {
                    var dateString = valueMonth + "/0" + i + "/" + valueYear;
                } else {
                    var dateString = valueMonth + "/" + i + "/" + valueYear;
                }
                console.log("dateString: [" + dateString + "]");


                if (sessionStorage.getItem(dateString) != null)
                {
                    inputJournal.value = sessionStorage.getItem(dateString);
                    inputJournal.style.color = sessionStorage.getItem("fontColor" + dateString);
                    inputJournal.style.fontSize = sessionStorage.getItem("fontSize" + dateString);
                    inputJournal.style.fontFamily = sessionStorage.getItem("fontFamily" + dateString);
                }

//                if (sessionStorage.getItem(i.toString()) != null) {
//                    inputJournal.value = sessionStorage.getItem(i.toString());
//                    inputJournal.style.color = sessionStorage.getItem("fontColor" + i);
//                    inputJournal.style.fontSize = sessionStorage.getItem("fontSize" + i);
//                    inputJournal.style.fontFamily = sessionStorage.getItem("fontFamily" + i);
//                    if (sessionStorage.getItem("bold" + i) == "true") {
//                        inputJournal.style.fontWeight = "bold";
//                    }
//                    if (sessionStorage.getItem("italic" + i) == "true") {
//                        inputJournal.style.fontStyle = "italic";
//                    }
//                    if (sessionStorage.getItem("underline" + i) == "true") {
//                        inputJournal.style.textDecoration = "underline";
//                    }
//                }

                div.appendChild(inputJournal);
            } //for
        }
