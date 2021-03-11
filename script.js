// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowers = "abcdefghijklmnopqrstuvwxyz";
console.log(lowers);
var splitLowers = lowers.split("");
console.log(SplitLowers[1]); 

var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(uppers);
var splitUppers = uppers.split("");
console.log(splitUppers[1]); 

var numbers = "0123456789";
console.log(numbers);
var splitNumbers = numbers.split("");
console.log(splitNumbers[1]); 

var special = "!@#$%^&*(){}[]-=+<>/";
console.log(special);
var splitSpecial = special.split("");
console.log(splitSpecial[1]); 

var selectedCharacters;

function generatePassword(){
  var finalValue = "";
  var characterCount = prompt("How many characters?");
  var includeLower = confirm("Allow lower case characters?");
  var includeUpper = confirm("Allow upper case characters?");
  var includeNumbers = confirm("Allow numbers?");
  var includeSpecial = confirm("Allow special characters?");

  if (includeLower) {
    var selectedCharacters = selectedCharacter.concat(splitLowers);
  } 

  if (includeUpper) {
    var selectedCharacters = selectedCharacter.concat(splitUppers);
  } 

  if (includeNumber) {
    var selectedCharacters = selectedCharacter.concat(splitNumbers);
  }

  if (includeSpecial) {
    var selectedCharacters = selectedCharacter.concat(splitSpecial);
  }


  for (i = 1; i <= characterCount; i++) {
    var char = Math.floor(Math.random()
                  * str.length +1);
  
    finalValue += str.charAt(char)
  
  }
  return finalValue
}


// if includeNumbers()

for (i = 1; i <= characterCount; i++) {
  var char = Math.floor(Math.random()
                * str.length +1);

  password += str.charAt(char)

}
return password;

// Don't touch anything below
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

datatype that can store lots of potential characters
