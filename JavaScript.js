



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
                     return false;
                }
            else if (containsDot == -1)
                {
                     document.getElementById('emailText').style.borderColor="red"
                     document.getElementById('emailText').value = "";
                     document.getElementById('emailText').placeholder = "(must contain '.')";
                     return false;
                }
            else
            {
                 document.getElementById('emailText').style.borderColor="blue"
                 return true;
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












        //returns the number of journal entries 
        function getNumEntries()
        {
            var numEntries = 0;
            for (i = 1; i < 20; i++) //note is just 'i = 1' not 'var i = i'
                {
                    if (sessionStorage.getItem(i.toString()) != null)
                        {
                            numEntries++;
                        }
                }
            return numEntries;
        }



        function testSet()
        {
             
            //works out how many entries there are, then + 1 to get to an empty place. 
            
            var position = getNumEntries() + 1;
            var posName = position.toString();

                        
            
            //––––––––––––– text that appears when the 'submit' button is pressed
            document.getElementById("submitStatus").style.background = "white";
            if (document.getElementById('journalText').value == "") //'null' does not work here!
                {
                document.getElementById("submitStatus").style.color = "red";
                document.getElementById("submitStatus").innerHTML = "Submission error: write something before submiting!";
                }
            else
                {
                    document.getElementById("submitStatus").style.color = "green";
                    document.getElementById("submitStatus").innerHTML = "Submission successful! Total journal entries: " + posName;
                    
                    
                    sessionStorage.setItem(posName, document.getElementById('journalText').value);                
            
                        if (document.getElementById('titleText').value == "")
                        {
                            sessionStorage.setItem('title' + posName, getDate());
                        }
                        else
                        {
                            sessionStorage.setItem('title'  + posName, document.getElementById('titleText').value);
                        }
            
                        if (document.getElementById('journalText').style.fontWeight == "bold")
                        {
                            sessionStorage.setItem("bold"  + posName, "true");
                        }
                        else
                        {
                            sessionStorage.setItem("bold"  + posName, "false");
                        }
            
                        if (document.getElementById('journalText').style.fontStyle == "italic")
                        {
                            sessionStorage.setItem("italic" + posName, "true");
                        }
                        else
                        {
                            sessionStorage.setItem("italic"  + posName, "false");
                        }
            
                        if (document.getElementById('journalText').style.textDecoration == "underline")
                        {
                            sessionStorage.setItem("underline"  + posName, "true");
                        }
                        else
                        {
                            sessionStorage.setItem("underline"  + posName, "false");
                        }
                }
        
            
            sessionStorage.setItem("fontColor"  + posName,  document.getElementById('journalText').style.color);
            sessionStorage.setItem("fontSize"  + posName,   document.getElementById('journalText').style.fontSize);
            sessionStorage.setItem("fontFamily"  + posName, document.getElementById('journalText').style.fontFamily);

            
        }




        function newTextarea()
        {
            
                
            //––––––––––––– text that appears when the 'submit' button is pressed
            if (sessionStorage.getItem('1') == null)
                {
                document.getElementById("submitStatus").style.background = "white";
                document.getElementById("submitStatus").style.color = "red";
                document.getElementById("submitStatus").innerHTML = "Submission error: you don't have any past journal entries!";
                }
            else
                {
                    //credit to http://stackoverflow.com/questions/7377399/creating-a-textarea-with-javascript#7377447
                    
                    var numEntries = getNumEntries();

                     for (i = 1; i <= numEntries; i++)
                     {
                        var div = document.getElementById("divThree");
            
                        var inputTitle = document.createElement("textarea");
                        var inputJournal = document.createElement("textarea");
            
 
        
                        inputJournal.value = sessionStorage.getItem(i.toString());
                        inputTitle.value = sessionStorage.getItem('title' + i.toString());
            
                        if (sessionStorage.getItem("bold" + i.toString()) == "true")
                        {
                            inputJournal.style.fontWeight = "bold";
                        }
            
                        if (sessionStorage.getItem("italic" + i.toString()) == "true")
                        {
                            inputJournal.style.fontStyle = "italic";
                        }
            
                        if (sessionStorage.getItem("underline" + i.toString()) == "true")
                        {
                            inputJournal.style.textDecoration = "underline";
                        }
            
                        inputJournal.style.color = sessionStorage.getItem('fontColor'  + i.toString());
                        inputJournal.style.fontSize = sessionStorage.getItem('fontSize'  + i.toString());
                        inputJournal.style.fontFamily = sessionStorage.getItem('fontFamily'  + i.toString());
        
                         
                        inputTitle.cols = "50";
                        inputTitle.rows = "1";
            
                        inputJournal.cols = "50";
                        inputJournal.rows = "20";
              
                        div.appendChild(inputTitle); 
                
                        div.appendChild(inputJournal);
            
                    }//for
                    
                    
                      
            }//else
        
            

            
        }








        
function onSubmit()
{
    
    document.getElementById("submitStatus").style.background = "white";
//    alert(document.getElementById("paswordText").value); //doesn't work! because it is password type?
    
//    Boolean isEmailValid = verifyEmail; //causing error
    var isEmailValid = verifyEmail; //NOT WORKING. WHY?
    
    if (document.getElementById("emailText").value == "")
    {
                document.getElementById("submitStatus").style.color = "red";
                document.getElementById("submitStatus").innerHTML = "Submission error: enter an email address!";
    }
                //the fact it is type 'password' is causing it to block actions, like 'alert(pasword)'  !
//    else if (document.getElementById("paswordText").value == "")
//    {
//                document.getElementById("submitStatus").style.color = "red";
//                document.getElementById("submitStatus").innerHTML = "Submission error: enter your password";
//    }
    else if (isEmailValid == false)   //NOT WORKING. WHY?
        {
                document.getElementById("submitStatus").style.color = "red";
                document.getElementById("submitStatus").innerHTML = "Submission error: email address was not valid.";
        }
    else 
    {
                sessionStorage.setItem('emailText', document.getElementById('emailText').value);

                document.getElementById("submitStatus").style.color = "green";
                document.getElementById("submitStatus").innerHTML = "Submission successful! You are now logged in.";
    }
    
    
}









                function loadLogin()
                {
                    if (sessionStorage.getItem('emailText') != null)
                    {
                        document.getElementById("loginBox").innerHTML = "Logged in as: '" + sessionStorage.getItem('emailText') + "'";
                        document.getElementById("loginBox").style.color = "blue";
                    }
                    else {
                        document.getElementById("loginBox").innerHTML = "[Not logged in]";
                    }
                }








