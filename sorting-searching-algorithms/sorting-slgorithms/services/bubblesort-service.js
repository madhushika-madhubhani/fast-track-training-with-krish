
function bubblesort(req) {
    return new Promise((resolve, reject) => {
        try {
            let unsortedArray = req.body.array;
            resolve(bubbleSortCal(unsortedArray));
        } catch (e) {
            reject(e);
        }
    })
  }
let bubbleSortCal = (inputArr) => {
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
module.exports={bubblesort}