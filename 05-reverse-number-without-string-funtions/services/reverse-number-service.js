async function getReversedNumber(req, res) {
    await getReverseNumber(req).then(data => {
    res.status(200).json({
        data: data
    });
}).catch(
    res.status(404)
)
}

function getReverseNumber(req) {
    return new Promise((resolve, reject) => {
        try {
            let inputNumber = req.body.number;
            resolve(reverseNumber(inputNumber));
        } catch (e) {
            reject(e);
        }
    })
  }
  function reverseNumber(inputNumber) {
     
    let reversedNumber = 0;
    while (inputNumber > 0) {
        reversedNumber = (reversedNumber * 10) + (inputNumber % 10);
        inputNumber = Math.floor(inputNumber / 10);
    }
  
    return reversedNumber;
  }


module.exports=getReversedNumber