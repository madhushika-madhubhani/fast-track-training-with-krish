import { Injectable } from '@nestjs/common';
import { callbackify } from 'util';

@Injectable()
export class LargestNumberService {

   printLargestNumber = (inputArr: number[],callback):any=>{

    for(let i = 0; i < inputArr.length; i++) {
            
        let min = i;
        for(let j = i+1; j < inputArr.length; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
       
    }
  callback(inputArr)
    }

     
    
}
