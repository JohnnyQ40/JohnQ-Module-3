// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
function generatePassword() {
  var length = window.prompt("how long would you like your password to be? (between 8-128)");
if (length < 8){
  window.alert("password lenth must be longer than 7");
}
else if (length > 128) {
 window.alert("password length must be shorter than 129");
}
var chars = "";
var lowerCase = window.confirm("use lowercase letters?");
if (lowerCase) {
  chars+= "abcdefghijklmnopqrstuvwxyz";
}
var upperCase = window.confirm("use uppercase letter?");
if (upperCase) {
  chars+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
var numeric = window.confirm("use numerics?");
if (numeric) {
  chars+= "1234567890";
}
var specialChars = window.confirm("use special character?");
if (specialChars) {
  chars += "!@#$%^&*()";
}
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
generateBtn.addEventListener("click", writePassword);