let countOfLetters=(word)=>{
    let  sentence=word.toLowerCase();
    let countofElements = {};
    let elements, count, noOfCount;
    
    for (count = 0,  sentence.length; count <sentence.length; ++count) {
       elements = sentence.charAt(count);
       noOfCount = countofElements[elements];
       countofElements[elements] = noOfCount ? noOfCount + 1: 1;
    }
    for (elements in countofElements) {
       if(elements!=' ')
       console.log(elements + " == " + countofElements[elements]);
    }
}
module.exports={countOfLetters}


