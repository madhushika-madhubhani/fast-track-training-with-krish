/*--------- initial code-------------
let sentence = "i am studying" ;
need to ignore space
	

*/

let sentence = " I am studying" ;
let noSpacesString= sentence.replace(/ /g,'');
console.log(noSpacesString)
let letter =0 ;
function countOfLetters( noSpacesString)
{  
   
    for (var i = 0; i < noSpacesString.length; i++) {

        if ((noSpacesString[i] >= 'A' && noSpacesString[i] <= 'Z')
            || (noSpacesString[i] >= 'a' && noSpacesString[i] <= 'z'))
          {
            letter++;
          }
         
          if (letter > 0) {
            console.log(noSpacesString[i] + "=" + letter);
            letter=0;
            
        }
    }
}
countOfLetters(noSpacesString);

// problem : string = apple   a=1 p=1 p=1 l=1 e=1