var specialCharacters = ['!', "#", "&", "$", "%", "'", ")", "(", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "`",]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
var passCharacters = [];
var finalPassword = "";

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = userPrompt();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Assignment code here
var userPrompt = function() {
  charLength = prompt("Enter the number of characters for your new password. Length must be 8-128 characters.");
  
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert ("Password length must be 8-128 characters. Re-enter password that's 8-128 characters long.");
    return userPrompt();
  } 

  var hasSpecial = confirm("Should your password include special characters?");

  if (hasSpecial) {
    passCharacters = passCharacters.concat(specialCharacters);
    finalPassword += getRandomItems(specialCharacters)
  }

  var hasUpper = confirm("Should your password include uppercase letters?");

  if (hasUpper) {
    passCharacters = passCharacters.concat(upperCaseLetters);
    finalPassword += getRandomItems(upperCaseLetters);
  }

  var hasLower = confirm("Should your password include lowercase letters?");

  if (hasLower) {
    passCharacters = passCharacters.concat(lowerCaseLetters);
    finalPassword += getRandomItems(lowerCaseLetters);
  }

  var hasNumbers = confirm("Should your password include numbers?");

  if (hasNumbers) {
    passCharacters = passCharacters.concat(numbers);
    finalPassword += getRandomItems(numbers);
  }

  if (
    hasNumbers === false && 
    hasUpper === false && 
    hasLower === false &&
    hasSpecial === false
  ) {
    alert("You must have one character type.");
    return userPrompt();
  }

  for(var i=finalPassword.length; i< charLength; i++) {
    finalPassword += getRandomItems(passCharacters);
  }
  return finalPassword;
}

var getRandomItems = function(characterArray) {
  guranteeCharacters = characterArray[Math.floor(Math.random() * characterArray.length)];
  return guranteeCharacters;
}


