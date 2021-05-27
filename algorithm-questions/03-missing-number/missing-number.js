let inputArr = [1,5,3,2,8,6,7,9,10];
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

console.log(numberSort(inputArr));