
function binarySearch(req) {
  return new Promise((resolve, reject) => {
      try {
          let first = req.body.array;
          let second = req.body.searchvalue;
          
          resolve(findValue(first, second));
      } catch (e) {
          reject(e);
      }
  })
}
function findValue  (list, item) {
    let low = 0
    let high = list.length - 1
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2) 
      let guess = list[mid]
  
      if (guess === item) {
    
        return mid
      }
  
      if (guess > item) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    
    return "Searched value is not in the array" 
  }
 

  module.exports= {binarySearch}

 
