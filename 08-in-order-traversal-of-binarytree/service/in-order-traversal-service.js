class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
class BinaryTree {
    constructor() {
      this.root = null;
    }
    add=(data)=> {
   
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const binaryTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return binaryTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return binaryTree(node.right);
            }
          } else {
            return null;
          }
        };
        return binaryTree(node);
      }
    }  
    inOrder=()=> {
    
        if (this.root == null) {
          return null;
        } else {
          const result = new Array();
          function traverseInOrder(node) {       
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
          }
          traverseInOrder(this.root);
         return ("in-order : "+ result )
          
        };
      }
 
}

export default BinaryTree
