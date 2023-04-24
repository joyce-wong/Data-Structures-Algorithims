// Find Closest Value in BST

// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST.

// You can assume that there will only be one closest value.

// Each BST node has an integer value, a left child node, and a right child node.
// A node is said to be a valid BST node if and only if it satisfies the BST
// property: its value is strictly greater than the values of every node to its left;
// its value is less than or equal to the values of every node to its right; 
// and its children nodes are either valid BST nodes themselves or None / null.

//depth first recursive solution
//average: time: O(log(n)) | space: O(log(n))
//worst: time: O(n) | space: O(n)
// function findClosestValueInBst(tree, target) {
//     //helper function that returns the value closest to target
//     return findClosestValueInBstHelper(tree, target, tree.value)
//   }
  
//   function findClosestValueInBstHelper(tree, target, closest){
//     //base case
//     if(tree === null) return closest
//     //if the absolute value of difference of closest to target is more than
//     //the absolute value of the difference of the target number and tree value,
//     //replace the closest with tree.value
//     if(Math.abs(target - closest) > Math.abs(target - tree.value)){
//       closest = tree.value
//     }
//     //if the target is less than the tree.value, recurse on the left tree
//     if(target < tree.value){
//       return findClosestValueInBstHelper(tree.left, target, closest)
//       //if the target is more than the tree.value, recurse on the right tree
//     } else if (target > tree.value){
//       return findClosestValueInBstHelper(tree.right, target, closest)
//     } else {
//       //if you found target in the tree and it equals closest, return closest
//       return closest
//     }
//   }
//   // This is the class of the input tree. Do not edit.
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }

//depth first iterative solution
//average: time: O(log(n)) | space: O(1)
//worst: time: O(n) | space: O(1)
function findClosestValueInBst(tree, target) {
    //helper function that returns the closest value
    return findClosestValueInBstHelper(tree, target, tree.value)
  }
  
  function findClosestValueInBstHelper(tree, target, closest){
    //declare variable currentNode to be equal to tree
    let currentNode = tree
    //while loop until you reach a null node at bottom of tree
    while(currentNode !== null){
      //if the absolute value of the difference between the target node and closest
      // is more than the absolute value of the difference between 
      //target and currentNode.value, replace the closest with currentNode.value
      if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
        closest = currentNode.value
      }
      //if the target less than currentNode.value, 
      //set currentNode to currentNode.left
      if(target < currentNode.value){
        currentNode = currentNode.left
        //else if the target is more than currentNode.value, 
        //set currentNode to currentNode.right
      } else if (target > currentNode.value){
        currentNode = currentNode.right
      } else {
        //if you found that the target equals the currentNode.value
        //break to save time
        break
      }
    }
    //return closest
    return closest
  }
    
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  
  