// check ascii value and check with the second word.
var stringOne = "race"
var stringTwo = "care"

const calcAlphabet = (str = '') => {
    return str.split("").reduce((acc, val) => {
       return acc + val.charCodeAt(0);
    }, 0);
 };

var  printAnagram=(firstScore,secondScore)=>{
    if (firstScore == secondScore)
        console.log("anagram")
     else
        console.log("not anagram")
 }
 
 var firstScore = calcAlphabet(stringOne);
 var secondScore = calcAlphabet(stringTwo);
 printAnagram(firstScore,secondScore);



