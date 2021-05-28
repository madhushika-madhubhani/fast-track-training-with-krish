let inputArr = [16,18,19,21,20];
let n = inputArr.length;
let   missing =[];

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

let findMissingNumber= (numArray)=>{
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
    console.log(missing);
}

let sortedArray =numberSort(inputArr);
console.log(sortedArray)
findMissingNumber(sortedArray);
            
         

       
    
