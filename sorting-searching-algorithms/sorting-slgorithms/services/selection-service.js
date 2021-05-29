selection=(req)=> {
    return new Promise((resolve, reject) => {
        try {
            let unsortedArray = req.body.array;
            resolve(selectionSort(unsortedArray));
        } catch (e) {
            reject(e);
        }
    })
  }
let selectionSort=(inputArr) =>{ 
    
    for(let i = 0; i < inputArr.length; i++) {
        
        let min = i;
        for(let j = i+1; j < inputArr.length; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
       
    }
    return inputArr;
}
module.exports={selection}