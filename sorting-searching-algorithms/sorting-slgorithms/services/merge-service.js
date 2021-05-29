function mergesortAl(req) {
    return new Promise((resolve, reject) => {
        try {
            let unsortedArray = req.body.array;
            resolve(mergesort(unsortedArray));
        } catch (e) {
            reject(e);
        }
    })
  }
let merge =(leftArr, rightArr)=> {
    var sortedArr = [];
      while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
          sortedArr.push(leftArr[0]);
          leftArr = leftArr.slice(1)
       } else {
          sortedArr.push(rightArr[0]);
          rightArr = rightArr.slice(1)
         }
       }
      while (leftArr.length)
        sortedArr.push(leftArr.shift());
      while (rightArr.length)
        sortedArr.push(rightArr.shift());
      return sortedArr;
    }
    
    let mergesort=(arr)=> {
      if (arr.length < 2) {
        return arr; }
      else {
        let midpoint = parseInt(arr.length / 2);
        let leftArr   = arr.slice(0, midpoint);
        let rightArr  = arr.slice(midpoint, arr.length);
        return merge(mergesort(leftArr), mergesort(rightArr));
      }
    }
    module.exports={mergesortAl}