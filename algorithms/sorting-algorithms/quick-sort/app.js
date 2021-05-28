let sampleArray = [2,5,44,23,1,1];
let quick_Sort =(origArray) =>{
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = origArray.pop();
		let length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

console.log("Original array: " + sampleArray);
let sortedArray = quick_Sort(sampleArray);
console.log("Sorted array: " + sortedArray);
