var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

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
	console.log(midpoint)
    let leftArr   = arr.slice(0, midpoint);
    let rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}

console.log(mergesort( unsortedArr));

/*slice()
slice(start)
slice(start, end)*/
//sorting an array of 100 elements will take 2ms