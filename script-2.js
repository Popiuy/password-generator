var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// Creating a variable (generateBtn) referencing the html button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt user for the length of the password (8-128)
  var passwordLength = prompt("Choose a number between 8 and 128 (minimum 8 characters)");

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid length. Please choose a number between 8 and 128.");
    return ""; // Return an empty string to indicate failure
  }

  // Confirm if the user wants to include uppercase letters
  var includeUppercase = confirm("Include uppercase letters?");
  
  // Confirm if the user wants to include lowercase letters
  var includeLowercase = confirm("Include lowercase letters?");
  
  // Confirm if the user wants to include special characters
  var includeSpecial = confirm("Include special characters?");
  
  // Confirm if the user wants to include numbers
  var includeNumbers = confirm("Include numbers?");
  
  // Create an array to store the available characters
  var availableChars = [];

  // Add the selected character types to the available characters array
  if (includeUppercase) {
    availableChars = availableChars.concat(upperChar);
  }
  if (includeLowercase) {
    availableChars = availableChars.concat(lowerChar);
  }
  if (includeSpecial) {
    availableChars = availableChars.concat(specialChar);
  }
  if (includeNumbers) {
    availableChars = availableChars.concat(numbersChar);
  }

  // Check if no character types were selected
  if (availableChars.length === 0) {
    alert("No character types selected. Please choose at least one character type.");
    return ""; // Return an empty string to indicate failure
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * availableChars.length);
    var newChar = availableChars[randomNum];
    password += newChar;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);