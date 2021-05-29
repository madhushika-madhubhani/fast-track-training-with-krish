function findAnagram(req) {
    return new Promise((resolve, reject) => {
        try {
            let firstWord = req.body.word;
            let secendWord = req.body.wordSecond;
            resolve(printAnagram(firstWord,secendWord));
        } catch (e) {
            reject(e);
        }
    })
  }
let calcAlphabet = (word) =>{
    let total=0;
    let strArr = word.split("")
    let alphabet = { a:1 , b:2 , c:3 , d:4 , e:5, f:6 , g:7, h:8, i:9 , j:10 , k:11 , l:12, m:13, n:14 , o:15, p:16 ,q:17 , r:18 , s:19, t:20, u:21, v:22 , w:23 , x:24, y:25 , z:26}
  
    for (var i = 0 ; i<strArr.length ; i++) {

        total = total + alphabet [strArr[i]];
        }
      return total
}
/*
  function printAnagram(wordOne, wordSecond) {
   
    wordOne = wordOne.replace(/[^\w]/g, '').toLowerCase()
    wordSecond = wordSecond.replace(/[^\w]/g, '').toLowerCase()
    if (wordOne.length !== wordSecond.length) {
        return false
    }
    let arrB = wordSecond.split("")
    for (let char of wordOne ){ 
        if (!arrB.includes(char)) {
            return false
            break;
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }

    return true

}
*/


 printAnagram=(stringOne,stringTwo)=>{
    let firstScore = calcAlphabet(stringOne);
    let secondScore = calcAlphabet(stringTwo);
    if (firstScore == secondScore)
        return "anagram"
     else
        return "not anagram"

 }
 module.exports= {findAnagram}
 


