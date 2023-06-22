// Validate BST

// Write a function that takes in a potentially invalid Binary Search Tree (BST)
// and returns a boolean representing whether the BST is valid. 

// Each BST node has an integer value, a left child node, and a right child node. 
// A node is said to be a valid BST node if and only if it satisfies the BST 
// property: its value is strictly greater than the values of every node to 
// its left; its value is less than or equal to the values of every node to 
// its right; and its children nodes are either valid BST nodes themselves
// or null. 

// A BST is valid if and only if all of its nodes are valid BST nodes. 

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  //time: O(n)
  //space: O(d)
  //recursion with helper function
  function validateBst(tree) {
    //return the result of the helper function which will be a boolean
    return validateBstHelper(tree, -Infinity, Infinity)
  }
  
  function validateBstHelper(tree, minValue, maxValue){
    //if the tree is null, return true because it will be valid
    if(tree === null) return true
    //if the tree.value is less than minValue or tree.value is more than
    //or equal to maxValue, return false
    if(tree.value < minValue || tree.value >= maxValue) return false
    //leftIsValid is the recursive case on the left subtree
    let leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
    //return the result of the recursive case on the left and right subtrees
    return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;
  