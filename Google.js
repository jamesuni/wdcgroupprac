//https://developers.google.com/identity/sign-in/web/
function onSignIn(googleUser) {
    

    //not working - why?
    //alert("full name: " + profile.getName());
   
    
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile(),
        id_token = googleUser.getAuthResponse().id_token;

    
    sessionStorage.setItem("emailText", profile.getEmail());

    
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    console.log("ID Token: " + id_token);     // The ID token you need to pass to your backend:
}
