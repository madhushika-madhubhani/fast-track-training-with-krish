function findmissingNumber(req) {
    return new Promise((resolve, reject) => {
        try {
            let inputArr = req.body.array;
            resolve(findValue(inputArr));
        } catch (e) {
            reject(e);
        }
    })
  }
  const findValue=(inputArr) =>{ 
    let n = inputArr.length;
    for(let i = 0; i < n; i++) {
    
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }

             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
    }
    let missingNumber=findMissedNumber(inputArr)
    return missingNumber;
}

const findMissedNumber= (numArray)=>{
    let   missing =[];

    for(var i = 1; i < numArray.length; i++) 
    {     
        if(numArray[i] - numArray[i-1] != 1) 
        {         
            var x = numArray[i] - numArray[i-1];
            for(var j=1; j<x ;j++){
                missing.push(numArray[i-1]+j);
                j++;
            }
        }
    }
    return missing;
}

  module.exports= {findmissingNumber}