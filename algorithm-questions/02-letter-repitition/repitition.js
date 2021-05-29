

function countOfLetters( sentence)
{  
    let noSpacesString= sentence.replace(/ /g,'');
    let letter =0 ;

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
module.exports={countOfLetters}
