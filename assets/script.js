// Assignment Code
var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// Creating a variable(generateBtn) referencing the html button
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  if (passwordLength < 8 || passwordLength > 128){
  alert("invalid length. Choose a number between 8 and 128");
}
return completedPassword;
}


// Write password to the #password input
// function called "writePassword"
function writePassword() {
// creates variable "password" and sets it equal to the return function called "generatePassword"
  var password = generatePassword();
// creates variable "passwordText" with a function grabbing "id=password" in html
  var passwordText = document.querySelector("#password");
// setting value to password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// PHASE 1: creating variables and getting the info we need 
// what do we need to do? 
// must PROMPT user for length of word (8-128)
var passwordLength = prompt("pick a number between 8 and 128 (minimum 8 characters)");

// confirm user for upper/lower case (yes/no? USE CONFIRM)
var includeUppercase = confirm("Include uppercase letters?");
var includeLowercase = confirm("Include lowercase letters?");


// confirm user if theyd like to use special characters
var includeSpecial = confirm("Include special characters?");
// confirm user if theyd like to use numbers
var includeNumbers = confirm("Include numbers?");
// create a pool of available characters(lowercase/uppercase/numbers/special characters)
var availableChars = [];
// if they said yes to numbers, add the numbers to available char
if (includeNumbers){
  availableChars = availableChars.concat(numbersChar);
}
if (includeUppercase){
  availableChars = availableChars.concat(upperChar);
}
if (includeLowercase){
  availableChars = availableChars.concat(lowerChar);
}
if (includeSpecial){
  availableChars = availableChars.concat(specialChar);
}
if (availableChars.length === 0){
  alert("No length")
}
// all are yes/no except for length
// THINK about edge cases for bad length imputs, (user imputs bad length) 
// if user types in 6, say what they did wrong, terminate function, and restart
// else if statement to explain that they chose the wrong values
// what if they say no to every type character(return no password available)

// phase 2
// what values do we need to track?
// create password variable that is an EMPTY STRING
var completedPassword = "";
// create a for loop that runs length number of times based on an array 
// in for loop we need to generate a single random character and Append this character to our password
// FOR LOOP STEPS
// create a random number between 0 and length of our available pool characters type array based on what the user choses
// select 1 element from array of availableChars at index random number we gen
for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random() * availableChars.length);
  
  // Select an element from availableChars at the random number index
  var newChar = availableChars[randomNum];
  
  // Append the new element to the password variable
  password += newChar;
}
// view newChar = availableChars[randomNum]
// Append this new element to password variable
// RETURN password we just created
return password;