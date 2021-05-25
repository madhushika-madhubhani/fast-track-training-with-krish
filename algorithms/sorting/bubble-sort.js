
var numberArr = [33, 103, 3, 726, 200,"zndj", 2000,984,"bdjv","acv"];
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

let bubbleSort2 = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
let bubbleSort3= (inputArr) =>{
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < inputArr.length - 1; i++) {
        if (inputArr[i] > inputArr[i + 1]) {
          [inputArr[i], inputArr[i + 1]] = [inputArr[i + 1], inputArr[i]];// ES6+ syntax to swap
          isSorted = false;
        }
      }
    }
    return inputArr;
  }
bubbleSort(numberArr);
//bubbleSort2(numberArr)
console.log(numberArr)