



function verifyEmail()
 {
                        
            var stringEmail = document.getElementById('emailText').value;
            var containsSign = stringEmail.search('@');
            var containsDot = stringEmail.search(/\./); //just .search('.') does not work – '.' is Regular Expression for 'any', so if the string contains anything, it will return true
  
            if (containsSign == -1)
                {
                     document.getElementById('emailText').style.borderColor="red"
                     document.getElementById('emailText').value = "";
                     document.getElementById('emailText').placeholder = "(must contain '@')";
                }
            else if (containsDot == -1)
                {
                     document.getElementById('emailText').style.borderColor="red"
                     document.getElementById('emailText').value = "";
                     document.getElementById('emailText').placeholder = "(must contain '.')";
                }
            else
            {
                 document.getElementById('emailText').style.borderColor="blue"
            }
            
}






    function verifyPassword()
    {
           var stringPassword = document.getElementById('passwordText').value;
           var numberArray = "0123456789";
           var symbolArray = "!@#$%^&*<>?`~\|:;().,{}[]"
            
           
            var containsNumber = false;
            var containsSymbol = false;
            for (i = 0; i < stringPassword.length; i++) //note it is just 'i = 0' not 'int i = 0'
                {
                    for (j = 0; j < numberArray.length; j++) //NUMBERS
                        {
                            if (stringPassword.charAt(i) === numberArray.charAt(j))
                                {
                                    containsNumber = true;
                                }
                        }
                    
                    for (j = 0; j < symbolArray.length; j++) //SYMBOLS
                        {
                            if (stringPassword.charAt(i) === symbolArray.charAt(j))
                                {
                                    containsSymbol = true;
                                }
                        }
                }
            

            if (stringPassword.length < 6)
                {
                    document.getElementById('passwordText').style.borderColor="red"
                    document.getElementById('passwordText').value = "";
                    document.getElementById('passwordText').placeholder = "(6 letters or more)";
                }
            else if (containsNumber === false)
                {
                    document.getElementById('passwordText').style.borderColor="red"
                    document.getElementById('passwordText').value = "";
                    document.getElementById('passwordText').placeholder = "(must contain a number)";
                }
            else if (containsSymbol === false)
                {
                    document.getElementById('passwordText').style.borderColor="red"
                    document.getElementById('passwordText').value = "";
                    document.getElementById('passwordText').placeholder = "(must contain a symbol)";
                }
            else
            {
                document.getElementById('passwordText').style.borderColor="blue"
            }
    }








        function boldText() 
        {
            if (document.getElementById('journalText').style.fontWeight == "bold")
                {
                   document.getElementById('journalText').style.fontWeight = "normal";
                   document.getElementById('buttonBold').style.backgroundColor = "transparent";
                }
            else{
                    document.getElementById('journalText').style.fontWeight = "bold";
                    document.getElementById('buttonBold').style.backgroundColor = "lightblue";
                }                
        }
        
        function italicText() 
        {
            if (document.getElementById('journalText').style.fontStyle == "italic")
                {
                   document.getElementById('journalText').style.fontStyle = "normal";
                   document.getElementById('buttonItalic').style.backgroundColor = "transparent";
                }
            else{
                    document.getElementById('journalText').style.fontStyle = "italic";
                    document.getElementById('buttonItalic').style.backgroundColor = "lightblue";
                }          
        }

        function underlineText() 
        {
            if (document.getElementById('journalText').style.textDecoration == "underline")
                {
                   document.getElementById('journalText').style.textDecoration = "none"; /* 'none' not 'normal' */
                   document.getElementById('buttonUnderline').style.backgroundColor = "transparent";
                }
            else{
                    document.getElementById('journalText').style.textDecoration = "underline";
                    document.getElementById('buttonUnderline').style.backgroundColor = "lightblue";
                }          
        }
        


        function chooseFont()
        {
            document.getElementById('journalText').style.fontFamily = textFont.value;   
        }
        
         function chooseSize()
        {   
            document.getElementById('journalText').style.fontSize = textSize.value;  
        }
        
        function chooseColor()
        {
             document.getElementById('journalText').style.color = textColor.value;  
        }
        

        function getDate()
        //credit to http://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
        {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            
            if(dd < 10) {
                dd = '0'+ dd
            } 

            if(mm < 10)  {
                mm = '0' + mm
            } 

            today = mm+ '/' + dd +'/'+ yyyy;
            
            return today;
        }


        function titleTextClick()
        {            
            var today = getDate();   
            document.getElementById('titleText').placeholder = "(Default title: " + today + ")";
        }
        
        function journalTextClick()
        {
             document.getElementById('journalText').placeholder = "What happened today? Start at the beginning...";
        }



        function testSet()
        {
//            sessionStorage.getItem('content1'); //needed??
            sessionStorage.setItem('content1', document.getElementById('journalText').value);
            
            if (document.getElementById('titleText').value == "")
                {
                    sessionStorage.setItem('title1', getDate());

                }
            else
                {
                    sessionStorage.setItem('title1', document.getElementById('titleText').value);
                }
            
            if (document.getElementById('journalText').style.fontWeight == "bold")
                {
                    sessionStorage.setItem("bold1", "true");
                }
            else
                {
                  sessionStorage.setItem("bold1", "false");
                }
            
            if (document.getElementById('journalText').style.fontStyle == "italic")
                {
                    sessionStorage.setItem("italic1", "true");
                }
            else
                {
                  sessionStorage.setItem("italic1", "false");
                }
            
            if (document.getElementById('journalText').style.textDecoration == "underline")
                {
                    sessionStorage.setItem("underline1", "true");
                }
            else
                {
                  sessionStorage.setItem("underline1", "false");
                }
            
            
            sessionStorage.setItem("fontColor1",  document.getElementById('journalText').style.color);
            sessionStorage.setItem("fontSize1",   document.getElementById('journalText').style.fontSize);
            sessionStorage.setItem("fontFamily1", document.getElementById('journalText').style.fontFamily);

            
        }



//        function gotoNewEntry()
//        {
//            
//        }

        function newTextarea()
        {
        
        
            //credit to http://stackoverflow.com/questions/7377399/creating-a-textarea-with-javascript#7377447
            var div = document.getElementById("divThree");
            
            var inputTitle = document.createElement("textarea");
            var inputJournal = document.createElement("textarea");
            
 
            
            
            inputJournal.value = sessionStorage.getItem('content1');
            inputTitle.value = sessionStorage.getItem('title1');
            
            if (sessionStorage.getItem("bold1") == "true")
                {
                    inputJournal.style.fontWeight = "bold";
                }
            
            if (sessionStorage.getItem("italic1") == "true")
                {
                    inputJournal.style.fontStyle = "italic";
                }
            
            if (sessionStorage.getItem("underline1") == "true")
                {
                    inputJournal.style.textDecoration = "underline";
                }
            
            inputJournal.style.color = sessionStorage.getItem('fontColor1');
            inputJournal.style.fontSize = sessionStorage.getItem('fontSize1');
            inputJournal.style.fontFamily = sessionStorage.getItem('fontFamily1');
            
            
            
    
            
            
            inputTitle.cols = "50";
            inputTitle.rows = "1";
            
            inputJournal.cols = "50";
            inputJournal.rows = "20";
            
            div.appendChild(inputTitle); //appendChild
//            div.insertAdjacentHTML('afterEnd', "\n" );     //not supported on firefox? //need '\n' inserted                                                                   here
            div.appendChild(inputJournal);
            //also need two '\n's inserted here
            
//            getNumEntries(); 
        }






            //not working
//    function getNumEntries()
//        {
//             var entries = 1;
//             var currentString = 'content' + entries.toString;
//            
//            while (sessionStorage.getItem(currentString) != null)
//            {
//                entries++;
//                currentString = 'content' + entries.toString;
//            }
//            
//            alert("entries: " + entries);
//            
//            
//            
//        }


function onSubmit() //not used yet
{
    sessionStorage.setItem('emailText', document.getElementById('emailText').value);
    sessionStorage.setItem('passwordText', document.getElementById('passwordText').value);
}









