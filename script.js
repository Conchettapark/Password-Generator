// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Created Arrays for the following criteria of the password. 
var specialChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '+', '`', '{', '|', '}', '~']
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

console.log(specialChars)
console.log(numberChars)
console.log(lowercaseChars)
console.log(uppercaseChars)

//User to select length of password which has to be 8-128 characters. Function was created to generate a password.
function generatePassword() {
var numPasswordChars = prompt("How many characters would you like your password to contain?")

if (numPasswordChars < 8) {
   alert("Password needs to be greater then 8 characters");
  return
  }
else if (numPasswordChars > 128) {
  alert("Password needs to be less then 128 characters")
  return
}

console.log(numPasswordChars)

//Created confirm varables for all criteria that are nessesary for password to be created.
  var shouldUseSpecial = confirm("Click OK to confirm including special characters")
  var shouldUseNumbers = confirm("Click OK to confirm including numeric characters")
  var shouldUseLowercase = confirm("Click OK to confirm including lowercase characters")
  var shouldUseUppercase = confirm("Click OK to confirm including uppercase characters")

console.log(shouldUseSpecial)
console.log(shouldUseNumbers)
console.log(shouldUseLowercase)
console.log(shouldUseUppercase)

//Created below action to merge all criteria to final password based on selections from above.
var charsToUse = []
var password = ''

  if(shouldUseSpecial) {
    charsToUse = charsToUse.concat(specialChars)
  }
  if(shouldUseNumbers) {
    charsToUse = charsToUse.concat(numberChars)
  }
  if(shouldUseLowercase) {
    charsToUse = charsToUse.concat(lowercaseChars)
  }
  if(shouldUseUppercase) {
    charsToUse = charsToUse.concat(uppercaseChars)
  }
// But at least one option must be selected.
  if(charsToUse.length == 0){
    alert('You must choose at least one character type')
    return
  }
  console.log(charsToUse)
  console.log(password)

// For Loop to randomly select through criteria 
  for(var i = 1; i <= numPasswordChars; i++){
    var charIndex = Math.floor(Math.random() * charsToUse.length)
    var charFromIndex = charsToUse[charIndex]
    password = password.concat(charFromIndex)
  }
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password){
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
