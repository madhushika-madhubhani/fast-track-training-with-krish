// check ascii value and check with the second word.
var stringOne = "race"
var stringTwo = "care"

function calcAlphabet (word) {
    var total=0;
    var strArr = word.split("")
    var alphabet = { a:1 , b:2 , c:3 , d:4 , e:5, f:6 , g:7, h:8, i:9 , j:10 , k:11 , l:12, m:13, n:14 , o:15, p:16 ,q:17 , r:18 , s:19, t:20, u:21, v:22 , w:23 , x:24, y:25 , z:26}
  
    for (var i = 0 ; i<strArr.length ; i++) {

        total = total + alphabet [strArr[i]];
    
        }
      return total
}

 printAnagram=(firstScore,secondScore)=>{
    if (firstScore == secondScore)
        console.log("anagram")
     else
        console.log("not anagram")

 }

 var firstScore = calcAlphabet(stringOne);
 var secondScore = calcAlphabet(stringTwo);
 printAnagram(firstScore,secondScore);



