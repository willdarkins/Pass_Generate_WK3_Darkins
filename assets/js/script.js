var specialCharacters = ['!', "#", "&", "$", "%", "'", ")", "(", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "`",]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]


// Assignment code here
var userPrompt = function() {
  charLength = prompt("Enter the number of characters for your new password. Length must be 8-128 characters.");

  if (charLength < 8) {
    alert ("Password length must be 8-128 characters. Re-enter password that's 8-128 characters long.");
    return;
  } 

  if (charLength > 128) {
    alert ("Password length must be 8-128 characters. Re-enter password that's 8-128 characters long.");
    return;
  }

  var hasNumbers = confirm("Should your password include numbers?");

  var hasUpper = confirm("Should your password include uppercase letters?");

  var hasLower = confirm("Should your password include lowercase letters?");

  var hasSpecial = confirm("Should your password include special characters?");

  if (
    hasNumbers === false && 
    hasUpper === false && 
    hasLower === false &&
    hasSpecial === false
  ) {
    alert("You must have one character type.");
    return
  }
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Create a function of getting random items- Math.floor - Math.random
// Write password to the #password input
function writePassword() {
  userInput();
var passInput = []; //This is the final output, or results
var passCharacters = []; //Need to iterate through this new concat array - This takes in individual values from arrays, above
var guranteeCharacters = []; //Need to iterate through this new concat array - This is where the concat result of characters live

//There will be 4 "if" statements. "Did they say yes to has Special above?" if so "I want to call the function of the random items (line 47) with the array called "specialCharacters"
// We will concat the specialCharacters array to create a more condensed array that will be used in the Math.floor process
// Research .push concept in order to understand the above
// Research .join that will be used

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var getRandomItems = function() {
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

