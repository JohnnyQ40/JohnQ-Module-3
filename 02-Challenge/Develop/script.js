//generates password by extracting random letters/numerics from a prompted list
function generatePassword() {
  //prompts for password length
  var length = window.prompt("how long would you like your password to be? (between 8-128)");
if (length < 8){
  window.alert("password lenth must be longer than 7");
}
else if (length > 128) {
 window.alert("password length must be shorter than 129");
}
var chars = "";
 //prompts for use of lowercase letters and adds to "chars" variable
var lowerCase = window.confirm("use lowercase letters?");
if (lowerCase) {
  chars+= "abcdefghijklmnopqrstuvwxyz";
}
//prompts for use of uppercase letters and adds to "chars" variable
var upperCase = window.confirm("use uppercase letter?");
if (upperCase) {
  chars+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
//prompts for use of numerics and adds to "chars" variable
var numeric = window.confirm("use numerics?");
if (numeric) {
  chars+= "1234567890";
}
//prompts for use of special characters and adds to "chars" variable
var specialChars = window.confirm("use special character?");
if (specialChars) {
  chars += "!@#$%^&*()";
}
// randomly pulls characters from "chars" in order to form the new Password
      var newPassword = "";
  for (var i = 0, j = chars.length; i < length; ++i) {
      newPassword += chars.charAt(Math.floor(Math.random() * j));
  }
  console.log(newPassword);
  return newPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");
//creates an event listener to create a password when the password button is clicked
generateBtn.addEventListener("click", writePassword);
