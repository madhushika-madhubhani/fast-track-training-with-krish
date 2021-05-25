let array = [1, 2, 3, 4, 5, 6, "jkk", 8, 9, 10];

let searchAlgorithm =(number)=>{
 
  for(let i = 0; i< number; i++){
  if(number == array[i]){
    console.log("Found it, it's at index " + i)
  }else{
    console.log("Not found")
  }
  
};
}
searchAlgorithm(8)
