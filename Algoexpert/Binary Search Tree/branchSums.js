// Branch Sums

// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends
// at any leaf node.

// Each Binary Tree node has an integer value, a left child node, and a right
// child node. Children nodes can either be BinaryTree nodes themselves or
// None/null.

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  //n = number of nodes
  //time: O(n)
  //space: O(n)
  function branchSums(root) {
    //declare sums variable as array to track sums
    const sums = []
    //use helper function to fill the array with sums
    //initalize with root node and runningSum of 0
    branchSumsHelper(root, 0, sums)
    return sums
  }
  
  //helper function fills the array with sums
  function branchSumsHelper(node, runningSum, sums){
    //base case
    if(node === null) return
    //declare variable to track newRunningSum by adding runningSum to node.value
    const newRunningSum = runningSum + node.value
    //if you've reached the null nodes at the bottom, push the newRunningSum into sums array and return
    if(node.left === null && node.right === null){
      sums.push(newRunningSum)
      return
    }
    //recursive case on leftTree
    const leftTree = branchSumsHelper(node.left, newRunningSum, sums)
    //recursive case on rightTree
    const rightTree = branchSumsHelper(node.right, newRunningSum, sums)
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  