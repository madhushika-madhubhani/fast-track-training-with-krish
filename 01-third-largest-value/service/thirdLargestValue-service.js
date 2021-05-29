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
            let length = origArray.length;
    
            for (let i = 0; i < length; i++) {
                if (origArray[i] <= pivot) {
                    left.push(origArray[i]);
                } else {
                    right.push(origArray[i]);
                }
            }
          return sortedArray.concat(sortArray(left), pivot, sortArray(right))
           
        
        }
    }

module.exports={findThirdLargest}