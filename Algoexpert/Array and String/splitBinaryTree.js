// Split Binary Tree 

// Write a function that takes in a Binary Tree with at least one node and
// checks if that Binary Tree can be split into two Binary Trees of equal
// sum by removing a single edge. If this split is possible, return the new
// sum of each Binary Tree, otherwise return 0. Note that you do not need to
// return the edge that was removed. 

// The sum of a Binary Tree is the sum of all values in that Binary Tree. 

// Each BinaryTree node has an integer value, a left child node, and a 
// right child node. Children nodes can either be BinaryTree nodes
// themselves or None/null. 

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  exports.BinaryTree = BinaryTree;
  
  //n = number of nodes
  //h = height of tree
  //time: O(n)
  //space: O(h)
  function splitBinaryTree(tree) {
    //store desiredSubtreeSum as result of getTreeSum(tree) divided by two
    const desiredSubtreeSum = getTreeSum(tree) / 2
    //canBeSplit is a boolean variable that stores the 1st index of trySubtrees helper
    //function on tree and desiredSubtreeSum
    const canBeSplit = trySubtrees(tree, desiredSubtreeSum)[1]
    return canBeSplit ? desiredSubtreeSum : 0
  }
  
  function trySubtrees(tree, desiredSubtreeSum){
    //if tree is null, return [0, false]
    if(tree === null) return [0, false]
  
    //destructure the array returned in recursive case of tree.left
    const [leftSum, leftCanBeSplit] = trySubtrees(tree.left, desiredSubtreeSum)
    //destructure the array returned in recursive case of tree.right
    const [rightSum, rightCanBeSplit] = trySubtrees(tree.right, desiredSubtreeSum)
  
    //currentTreeSum is tree.value plus leftSum plus rightSum
    const currentTreeSum = tree.value + leftSum + rightSum
    //declare boolean variable that is true if leftCanBeSplit or rightCanBeSplit or currentTreeSum equals desiredSubtreeSum
    const canBeSplit = leftCanBeSplit || rightCanBeSplit || currentTreeSum === desiredSubtreeSum
    //return array that contains currentTreeSum and canBeSplit
    return [currentTreeSum, canBeSplit]
  }
  
  //helper function that sums up the tree's value
  function getTreeSum(tree){
    //base case
    //if tree is null, return 0
    if(tree === null) return 0
    //otherwise, return tree.value and add the recursive case
    //on tree.left and tree.right
    return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right)
  }
  
  // Do not edit the line below.
  exports.splitBinaryTree = splitBinaryTree;
  