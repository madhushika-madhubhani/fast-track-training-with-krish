let inputArr = [10,11,14,13,15];
//let inputArr = [5,3,2,1];
let n = inputArr.length;
let numberSort=(inputArr) =>{ 
    for(let i = 0; i < n; i++) {
    
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }

             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
    }
    return inputArr;
}
var sortedArray =numberSort(inputArr);
console.log(sortedArray)

var findMissingNumber= (numArray)=>{
    for(var i = 1; i < numArray.length; i++) 
    {     
        if(numArray[i] - numArray[i-1] != 1) 
        {         
            var x = numArray[i] - numArray[i-1];
            for(var j=1; j<x ;j++){
                missing.push(numArray[i-1]+j);
                j++;
            }
        }
    }
    console.log(missingNumber);
}
findMissingNumber(sortedArray);

