let inputArr = [1,5, 2, 4, 6, 1, 3,1];
let n = inputArr.length;
let answer =[];
let thirdLargest;
let numberSort=(inputArr) =>{ 
    
        
    for(let i = 0; i < n; i++) {
    
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
        if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
       }
    }
    return inputArr;
}
answer =numberSort(inputArr);
thirdLargest = answer[n-3];
console.log(inputArr);
console.log(thirdLargest);