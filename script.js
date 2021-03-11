// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowers = "abcdefghijklmnopqrstuvwxyz";
console.log(lowers);
var splitLowers = lowers.split("");
console.log(splitLowers[1]); 

var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(uppers);
var splitUppers = uppers.split("");
console.log(splitUppers[1]); 

var numbers = "0123456789";
console.log(numbers);
var splitNumbers = numbers.split("");
console.log(splitNumbers[1]); 

var special = "!@#$%^&*";
console.log(special);
var splitSpecial = special.split("");
console.log(splitSpecial[1]); 

function generatePassword(){
  var password = "";
  var characterCount = prompt("How many characters?");
  var includeLower = confirm("Allow lower case characters?"); //sets true or false
  var includeUpper = confirm("Allow upper case characters?"); //sets true or false
  var includeNumbers = confirm("Allow numbers?");             //sets true or false
  var includeSpecial = confirm("Allow special characters?");  //sets true or false
  var selectedCharacters = [];

  if (includeLower) {
    var selectedCharacters = selectedCharacters.concat(splitLowers);
  } 

  if (includeUpper) {
    var selectedCharacters = selectedCharacters.concat(splitUppers);
  } 

  if (includeNumbers) {
    var selectedCharacters = selectedCharacters.concat(splitNumbers);
  }

  if (includeSpecial) {
    var selectedCharacters = selectedCharacters.concat(splitSpecial);
  }

console.log(selectedCharacters)



  for (let i = 1; i <= characterCount; i++) {
    var randomindex = Math.floor(Math.random()
                  * selectedCharacters.length);
  
    password += selectedCharacters[randomindex]
  
  }
  return password
}




// if includeNumbers()

// Don't touch anything below
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// datatype that can store lots of potential characters

//use the push method to add items in the array