let inputArr = [10,11,14,13,15];
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
/*
var   missing =[];
var ans =(arr)=>{
    for (var i = arr[0]; i <=arr.length; i++) {
        if (arr.indexOf(i) == -1) {
          missing.push(i);
        }
      }
      console.log(missing);
        
}

ans(sortedArray);*/

