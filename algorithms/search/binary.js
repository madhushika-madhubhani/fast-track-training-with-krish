let binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2) //Math.floor() function returns the largest integer less than or equal to a given number.
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
  
    return null //if not found
  }

  console.log(binarySearch([2,1,3,4,89], 1)) //