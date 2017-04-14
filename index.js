// index.js required to drive index.html

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// controls the functionality of the next button
function next() {

  // on load state
  if (document.getElementByName("task").innerHTML === "Account Sign In") {
    if (!verify_email) {
      document.getElementByName("pagestate") = "Invalid email address, try again";
      document.getElementsByName("forminput") = "";
      return;
    } else {
      document.getElementByName("forminput").placeholder = "Enter password";
      document.getElementByName("next").innerHTML = "Login";
      document.getElementsByName("forminput") = "";
    }
  } else if (document.getElementByName("next").innerHTML === "Login") {
    // need to check if password valid
      if (!verify_password) {
        document.getElementsByName("pagestate") = "Password is incorrect, try again";
        document.getElementsByName("forminput") = "";
        return;
      } else {
        window.location.replace("pageJournal.html");
      }
  }
}

// controls the functionality of the register button
function register() {
  if (document.getElementsByName("task") == "Account Sign In") {
    document.getElementsByName("task") = "Create New Account";
    document.getElementsByName("forminput") = "";
    document.getElementByName("next").style.visibility = "hidden";
  }
}
