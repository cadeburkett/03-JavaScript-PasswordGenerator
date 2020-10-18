var numberic = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "<", ">", "?", "/", "~"];
var emoji = ["😈", "☠️", "💅🏻", "👠", "🕷", "🍭"];

var passwordText = document.querySelector("#password")

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function() {

alert("Please answer the following questions: OK is yes. Cancel is NO");

var length = prompt("Password must be between 8-128  characters long");
  if(length < 8 || length > 128 || isNaN(length)) {
    alert("Please try again.")
  } else {
    console.log("continue")

var lowChars = confirm("Would you like lowercase characters?")
var upperChars = confirm("Would you like uppercase characters?");
var numChars = confirm("Would you like numerical characters?");
var specChars= confirm("Would you like Special characters?");
var emoChars = confirm("Would you like emojis?");
console.log(lowChars, upperChars, numChars, specChars)

var userChoices = [];

if(lowercaseTrue) {userChoices.push(lowercase)}
if(uppercaseTrue) {userChoices.push(uppercase)}
if(numbericTrue) {userChoices.push(numberic)}
if(specialTrue) {userChoices.push(special)}
console.log(userChoices)

var input = confirm("Password length is " + length + ". Password includes lowercase letters: " + lowercaseTrue + ". Password includes uppercase letters: " + uppercaseTrue + ". Password contains numbers: " + numbericTrue + ". Password contains special characters: " + specialTrue + ".");
  if(input.confirm === true) {
    generatePassword
  }

 