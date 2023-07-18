// Symmetrical Tree

// Write a function that takes in a Binary Tree and returns if that tree 
// is symmetrical. A tree is symmetrical if the left and right subtrees
// are mirror images of each other. 

// Each BinaryTree node has an integer value, a left child node, and a right
// child node. Children nodes can either be BinaryTree nodes themselves 
// or None/ null. 

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  exports.BinaryTree = BinaryTree;
  
  //iterative solution
  //n = number of nodes
  //h = height of tree
  //time: O(n)
  //space: O(h)
//   function symmetricalTree(tree) {
//     //put tree.left into stackLeft
//     let stackLeft = [tree.left]
//     //put tree.right into stackRight
//     let stackRight = [tree.right]
  
//     //while stackLeft is not empty
//     while(stackLeft.length > 0){
//       //left is the popped value from stackLeft
//       const left = stackLeft.pop()
//       //right is the popped value from stackRight
//       const right = stackRight.pop()
  
//       //if the left is null and the right is null, continue
//       if(left === null && right === null){
//         continue
//       }
//       //if the left is null or right is null or left.value doesn't 
//       //equal right.value, return false
//       if(left === null || right === null || left.value !== right.value){
//         return false
//       }
  
//       //push left.left into the stackLeft
//       stackLeft.push(left.left)
//       //push left.right into the stackLeft
//       stackLeft.push(left.right)
//       //push right.right into stackRight
//       stackRight.push(right.right)
//       //push right.left into stackRight
//       stackRight.push(right.left)
//     }
//     //return true
//     return true
//   }
  
//   // Do not edit the line below.
//   exports.symmetricalTree = symmetricalTree;

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  exports.BinaryTree = BinaryTree;
  
  //recursive solution
  //n = number of nodes
  //h = height of tree
  //time: O(n)
  //space: O(h)
  function symmetricalTree(tree) {
    //return the result of the helper function called on tree.left, tree.right
    return treesAreMirrored(tree.left, tree.right)
  }
  
  //recursive helper function that returns a boolean indicating if the trees are mirrored
  function treesAreMirrored(left, right){
    //if left is not null and right is not null and left.value equals right.value
    if(left !== null && right !== null && left.value === right.value){
      //return treesAreMirrored recursively on left.left, right.right
      //and  treesAreMirrored recursively on left.right, right.left
      return treesAreMirrored(left.left, right.right) && treesAreMirrored(left.right, right.left)
    }
    //otherwise if those conditions from the if statement are not met
    //return if left equals right
    return left === right
  }
  
  // Do not edit the line below.
  exports.symmetricalTree = symmetricalTree;
  
  