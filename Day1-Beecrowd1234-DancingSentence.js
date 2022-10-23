/* A sentence is called dancing if its first letter is uppercase and the case of each subsequent letter
is the opposite of the previous letter. Spaces should be ignored when determining the case of a letter.
For example, "A b Cd" is a dancing sentence because the first letter ('A') is uppercase, the next letter ('b')
is lowercase, the next letter ('C') is uppercase, and the next letter ('d') is lowercase.

Input
The input contains several test cases. Each test case is composed by one line that contais a string sentence.
This string will contain between 1 and 50 characters ('A'-'Z','a'-'z' or space ' '), inclusive, or at least, one letter ('A'-'Z','a'-'z').

Output
Turn the sentence into a dancing sentence (like following examples) by changing the cases of the letters where necessary.
All spaces in the original sentence must be preserved, ie, " sentence " must be converted in " SeNtEnCe ". */

//Get the input values
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var input =
//   "This is a dancing sentence\n  This   is         a  dancing   sentence  \naaaaaaaaaaa\nz";

//Create an array with a string for each line
var lines = input.trim().split("\n");

//Transform each string in an array of chars
lines = lines.map((line) => Array.from(line));

var isUpperCase = true;

//Iterate through each input line
lines.forEach(function (line) {
  //Transform the input line
  line = line
    .map(function (char) {
      if (char != " " && isUpperCase) {
        char = char.toUpperCase();
        isUpperCase = false;
      } else if (char != " " && !isUpperCase) {
        char = char.toLowerCase();
        isUpperCase = true;
      }
      return char;
    })
    .join("");
  //Reset the variable for the next line
  isUpperCase = true;
  //Print the output
  console.log(line);
});
