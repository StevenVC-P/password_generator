// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowers = "abcdefghijklmnopqrstuvwxyz";;
var splitLowers = lowers.split("");
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var splitUppers = uppers.split("");
var numbers = "0123456789";
var splitNumbers = numbers.split("");
var special = "!@#$%^&*";
var splitSpecial = special.split("");

var selectedCharacters = [];
var characterCount;
var password = "";


function askUser() {                                                                      //seting up the function
  var userResponse = prompt("How many characters? (Please pick between 8 and 128");
  characterCount = parseInt(userResponse)                                                  // Creates user prompt to create a value for characterCount
  if (characterCount < 8 || characterCount > 128 || isNaN(characterCount)) {             // Begins a check is the value is or is not between 8 and 128
    alert("Please enter a number between 8 and 128");                                   // Sends an alert for a wrong value
    askUser();                                                                          // restarts the function
  }
  return;
}




function charCounter() {
  for (let i = 1; i <= characterCount; i++) {
    var randomindex = Math.floor(Math.random()
      * selectedCharacters.length);

    password += selectedCharacters[randomindex];
    console.log(password)

  }
}

function generatePassword() {
  password = "";
  selectedCharacters = [];

  askUser();

  var includeLower = confirm("Allow lower case characters?"); //sets true or false
  var includeUpper = confirm("Allow upper case characters?"); //sets true or false
  var includeNumbers = confirm("Allow numbers?");             //sets true or false
  var includeSpecial = confirm("Allow special characters?");  //sets true or false

  if (includeLower) {
    selectedCharacters = selectedCharacters.concat(splitLowers);
  }

  if (includeUpper) {
    selectedCharacters = selectedCharacters.concat(splitUppers);
  }

  if (includeNumbers) {
    selectedCharacters = selectedCharacters.concat(splitNumbers);
  }

  if (includeSpecial) {
    selectedCharacters = selectedCharacters.concat(splitSpecial);
  }



  charCounter();

  return password;
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

//use the push method to add items in the