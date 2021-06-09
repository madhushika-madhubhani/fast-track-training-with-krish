import { Injectable } from '@nestjs/common';

@Injectable()
export class LargestNumberService {

   
printLargestNumber =(unsortedArray: number[],largestNumber: number):number=>{
    let sortedArray = unsortedArray.sort(function(a, b){return a - b});
    return sortedArray[sortedArray.length-largestNumber]
        
    }
 
}
     
    

/*1 2
3 1
3 2
3 4 */
