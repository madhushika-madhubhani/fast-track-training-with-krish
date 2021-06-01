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
    
    add(data) {
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
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
      }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    printLeafNodes() {
       

        let result = [];
        let currentNode = this.root;
       
        const traversalFunction = (node) => {
            if (node.left) {
                traversalFunction(node.left);
                if (node.left.left === null && node.left.right === null) {
                    //console.log(node.left)
                    result.push(node.left.data);
                }
            }
            if (node.right) {
                traversalFunction(node.right);
                if (node.right.left === null && node.right.right === null) {
                   
                    result.push(node.right.data);
                }
            }
        }
        traversalFunction(currentNode);
        return result;
    } 
    
 
   


}
export default BinaryTree
