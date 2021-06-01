import BinaryTree from './service/pre-order-traversal-service.js';
const binaryTree = new BinaryTree();
let data =[9,4,17,3,6,22,5,7,20];
for (let index=0;index<data.length;index++){
  binaryTree.add(data[index]);
}
console.log(binaryTree.preOrder());
