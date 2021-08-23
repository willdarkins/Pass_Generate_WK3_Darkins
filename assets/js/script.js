var specialCharacters = ['!', "#", "&", "$", "%", "'", ")", "(", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "`",]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
var passCharacters = [];
var minimumCount = 0;
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = userPrompt();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Assignment code here
var userPrompt = function() {
  charLength = parseInt(prompt("Enter the number of characters for your new password. Length must be 8-128 characters."), 10);

  if (charLength < 8) {
    alert ("Password length must be 8-128 characters. Re-enter password that's 8-128 characters long.");
    return userPrompt();
  } 

  if (charLength > 128) {
    alert ("Password length must be 8-128 characters. Re-enter password that's 8-128 characters long.");
    return userPrompt();
  }


  var hasSpecial = confirm("Should your password include special characters?");

  if (hasSpecial === true) {
    passCharacters = passCharacters.concat(passCharacters, specialCharacters);
  }

  var hasUpper = confirm("Should your password include uppercase letters?");

  if (hasUpper === true) {
    passCharacters = passCharacters.concat(passCharacters, upperCaseLetters);
  }

  var hasLower = confirm("Should your password include lowercase letters?");

  if (hasLower === true) {
    passCharacters = passCharacters.concat(passCharacters, lowerCaseLetters);
  }

  var hasNumbers = confirm("Should your password include numbers?");

  if (hasNumbers === true) {
    passCharacters = passCharacters.concat(passCharacters, numbers);
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
}

var getRandomItems = function() {
  for (var i =0; i < (parseInt(charLength - minimumCount)); i ++) {
    guranteeCharacters = passCharacters[Math.floor(Math.random() * passCharacters.length)];
    return guranteeCharacters;
  }
}

writePassword();


