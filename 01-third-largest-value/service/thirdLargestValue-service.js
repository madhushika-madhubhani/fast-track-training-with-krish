function findThirdLargest(req) {
    return new Promise((resolve, reject) => {
        try {
            let unsortedArray = req.body.array;
            resolve(printValue(unsortedArray));
        } catch (e) {
            reject(e);
        }
    })
  }
const printValue =(unsortedArray)=>{
      const sortedArray =sortArray(unsortedArray);
      return sortedArray[sortedArray.length-3]

  }
const sortArray = (origArray) => {
        if (origArray.length <= 1) { 
            return origArray;
        } else {
    
            let left = [];
            let right = [];
            let sortedArray = [];
            let pivot = origArray.pop();
    
          for (const index in unsortedArray) {
             if (unsortedArray[index] <= pivot) {
                 leftArray.push(unsortedArray[index]);
             } else {
                 rightArray.push(unsortedArray[index]);
             }
             return sortedArray.concat(sortArray(leftArray), pivot, sortArray(rightArray))
         }
          return sortedArray.concat(sortArray(left), pivot, sortArray(right))
           
        
        }
    }

module.exports={findThirdLargest}
