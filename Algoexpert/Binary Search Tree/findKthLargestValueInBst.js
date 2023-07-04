// Find Kth Largest Value in BST 

// Write a function that takes in a Binary Search Tree(BST) and a positive 
// integer k and returns the kth largest integer contained in the BST. 

// You can assume that there will only be integer values in the BST and that k
// is less than or equal to the number of nodes in the tree. 

// Also, for the purpose of this question, duplicate integers will be treated
// as distinct values. In other words, the second largest value in a BST
// containing values {5, 7, 7} will be 7 - not 5. 

// Each BST node has an integer value, a left child node, and a right
// child node. A node is said to be a valid BST node if and only if it satisfies
// the BST property: its value is strictly greater than the values of 
// every node to its left; its value is less than or equal to the values 
// of every node to its right; and its children nodes are either valid BST
// nodes themselves or None/null.

// This is an input class. Do not edit.
// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   //n = number of nodes in tree
//   //time: O(n)
//   //space: O(n)
//   function findKthLargestValueInBst(tree, k) {
//     //declare empty array
//     let sortedNodeValues = []
//     //call helper function to traverse the array in order
//     //and put the nodes values into the sortedNodeValues array
//     inOrderTraverse(tree, sortedNodeValues)
//     //return the kth value from the back of the array
//     return sortedNodeValues[sortedNodeValues.length - k]
//   }
  
//   //helper function
//   function inOrderTraverse(node, sortedNodeValues){
//     //if node is null, return
//     if(node === null) return
  
//     //recursive call on node.left
//     inOrderTraverse(node.left, sortedNodeValues)
//     //push the node's value into sortedNodeValues array
//     sortedNodeValues.push(node.value)
//     //recursive call on node.right
//     inOrderTraverse(node.right, sortedNodeValues)
//   }

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  //implement new class with numberOfNodesVisited and latestVisitedNodeValue
  //in constructor to track these values
  class TreeInfo {
    constructor(numberOfNodesVisited, latestVisitedNodeValue){
      this.numberOfNodesVisited = numberOfNodesVisited
      this.latestVisitedNodeValue = latestVisitedNodeValue
    }
  }
  
  //h = height of tree, k = input parameter
  function findKthLargestValueInBst(tree, k) {
    //instatiate new class with 0 nodes visited and a placeholder for
    //latestVisitedNodeValue
    const treeInfo = new TreeInfo(0, -1)
    //call the helper function to traverse the tree
    //in reverse order
    reverseInOrderTraverse(tree, k, treeInfo)
    //return the latestVisitedNodeValue in the treeInfo class
    return treeInfo.latestVisitedNodeValue
  }
  
  //helper function
  function reverseInOrderTraverse(node, k, treeInfo){
    //if the node is null or if the treeInfo.numberOfNodesVisited
    //is more than or equal to k, return
    if(node === null || treeInfo.numberOfNodesVisited >= k) return
  
    //traverse the tree in reverse order on node.right (recursive call)
    reverseInOrderTraverse(node.right, k, treeInfo)
    //if tracker for numberOfNodesVisited is less than k
    if(treeInfo.numberOfNodesVisited < k){
      //increment the tracker for numberOfNodesVisited
      treeInfo.numberOfNodesVisited++
      //track the latestVisitedNodeValue as node.value
      treeInfo.latestVisitedNodeValue = node.value
      //recursive call on the node.left
      reverseInOrderTraverse(node.left, k, treeInfo)
    }
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;
  
  