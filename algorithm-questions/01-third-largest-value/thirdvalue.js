const numberSort = (inputArr) => {

let n = inputArr.length;
let answer =[];
let thirdLargest;
        
    for(let i = 0; i < n; i++) {
    
        let min = i; //smallest index
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
        
          
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
       
    }
   
    thirdLargest = inputArr[n-3];
    return thirdLargest;
}
module.exports = { numberSort }
