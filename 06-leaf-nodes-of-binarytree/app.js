const BinaryTree = require ("./service/leaf-node-print-service");

const binaryTree = new BinaryTree();
let data =[30,44,5,34,67,89,90,44,3,56,2,35,76,4,2,67,92,94,98,82,78,,98,89,99,100,101,102];
for (let i=0;i<data.length;i++){
  binaryTree.add(data[i]);
}
console.log(binaryTree.printLeafNodes());
console.log(binaryTree.isBalanced());

