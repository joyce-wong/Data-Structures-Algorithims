// Height Balanced Binary Tree

// You're given the root node of a Binary Tree. Write a function that returns true
// if this Binary Tree is height balanced and false if it isn't. 

// A Binary Tree is height balanced if for each node in the tree, the difference between 
// the height of its left subtree and the height of its right subtree
// is at most 1.

// Each BinaryTree node has an integer value, a left child node, and a right child 
// node. Children nodes can either be BinaryTree nodes themselves or None/null. 

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeInfo {
    constructor(isBalanced, height){
      this.isBalanced = isBalanced
      this.height = height
    }
  }
  
  //n = number of nodes in binary tree
  //time: O(n)
  //space: O(h)
  function heightBalancedBinaryTree(tree) {
    //use helper function to get treeInfo
    let treeInfo = getTreeInfo(tree)
    return treeInfo.isBalanced
  }
  
  //helper function that gets tree info
  function getTreeInfo(node){
    //base case
    //if input node is null, return a new instance of TreeInfo
    //with isBalanced as true
    if(node === null){
      return new TreeInfo(true, -1)
    }
    //recursive case on node.left
    const leftSubtreeInfo = getTreeInfo(node.left)
    //recursive case on node.right
    const rightSubtreeInfo = getTreeInfo(node.right)
  
    //check isBalanced by checking if left subtree and right subtree
    //are balanced and the differences between their heights is less than 1
    const isBalanced = leftSubtreeInfo.isBalanced && rightSubtreeInfo.isBalanced && Math.abs(
      leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1
    //check the height by getting the max of left subtree
    //and right subtree heights and adding 1
    const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1
    //return new instance of TreeInfo
    return new TreeInfo(isBalanced, height)
  }
  
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.heightBalancedBinaryTree = heightBalancedBinaryTree;
  