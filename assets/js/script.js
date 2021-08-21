// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Enter the number of characters for your new password");
  var numbers = confirm("Should your password include numbers?");
  var lowerCase = confirm("Should your password include lowercase letters?");
  var upperCase = confirm("Should your password include uppercase letters?");
  var special = confirm("Should your password include special characters?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
