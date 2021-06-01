import  BinaryTree from './service/in-order-traversal-service.js'
const binaryTree = new BinaryTree();
let data =[3,4,5,6,7,9,10,17,20,22]
for(let index=0; index<data.length;index++){
  binaryTree.add(data[index]);
}
console.log(binaryTree.inOrder());
  
