function linearSearch(req) {
    return new Promise((resolve, reject) => {
        try {
            let array = req.body.array;
            let searchValue = req.body.searchvalue;
            
            resolve(findValue(array, searchValue));
        } catch (e) {
            reject(e);
        }
    })
  }
let findValue =(array,searchValue)=>{
 
    for(let i = 0; i< searchValue; i++){
    if(searchValue == array[i]){
      return "Found it, it's at index " + i
    }else{
      return "Not found"
    }
    
  };
  }

  module.exports= {linearSearch}
