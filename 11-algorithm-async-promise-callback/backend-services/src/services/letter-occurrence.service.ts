import { Injectable } from '@nestjs/common';

@Injectable()
export class LetterOccuranceService {

countOfLetters(word): any {
    let  sentence=word.toLowerCase();
    let countofElements = {};
    let elements, count, noOfCount;
    let result =[];
    
    for (count = 0,  sentence.length; count <sentence.length; ++count) {
       elements = sentence.charAt(count);
       noOfCount = countofElements[elements];
       countofElements[elements] = noOfCount ? noOfCount + 1: 1;
    }
    for (elements in countofElements) {
       if(elements!=' ')
        result.push(elements + " == " + countofElements[elements]) 
    }
  
    return result
}
}