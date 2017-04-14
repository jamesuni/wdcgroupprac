// checks whether inputs are valid
function valid_email() {

  // import form data
  var email = document.getElementById("emailText").value;

  // search for '@' and '.'
  if ((email.search('@') && email.search(/\./))) {
    // returns true
    return -1;
  }

  // returns false
  return 0;
}

function valid_password() {
  // get password
  var password = document.getElementById('passwordText').value;
  var nums= "0123456789";
  var syms = "!@#$%^&*<>?`~|:;().,{}[]";
  var hasnums = false;
  var hassyms = false;

  // password is valid if has symbol, number, > 8 chars
  for (int i = 0; i < password.length; i++) {
    hasnums = hasnums || (nums.search(password.charAt(i)));
    hassyms = hassyms || (syms.search(password.charAt(i)));
  }

  state = hasnums && hassyms && (password.length > 8);
  return state;
}
