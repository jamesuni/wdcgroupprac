



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
        


        function titleTextClick()
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
            
            document.getElementById('titleText').placeholder = "(Default title: " + today + ")";
        }
        
        function journalTextClick()
        {
             document.getElementById('journalText').placeholder = "What happened today? Start at the beginning...";
        }