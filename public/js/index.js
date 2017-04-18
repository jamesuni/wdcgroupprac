// index.js required to drive index.html

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// controls the functionality of the next button
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  window.location.replace('account.html');
}

// controls the functionality of the register button
function register() {
  if (document.getElementsByName("task") == "Account Sign In") {
    document.getElementsByName("task") = "Create New Account";
    document.getElementsByName("forminput") = "";
    document.getElementByName("next").style.visibility = "hidden";
  }
}
