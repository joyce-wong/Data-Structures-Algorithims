// Reconstruct BST

// The pre-order traversal of a Binary Tree is a traversal technique that
// starts at the tree's root node and visits nodes in the following order:

// 1. Current node 
// 2. Left subtree
// 3. Right subtree 

// Given a non-empty array of integers representing the pre-order traversal 
// of a Binary Search Tree(BST), write a function that creates the 
// relevant BST and returns its root node. 

// The input array will contain the values of BST nodes in the order in which
// these nodes would be visited with a pre-order traversal. 

// Each BST node has an integer value, a left child node, and a right child node. 
// A node is said to be a valid BST node if and only if it satisfies
// the BST property: its value is strictly greater than the values 
// of every node to its left; its value is less than or equal to the values
// of every node to its right; and its children nodes are either valid BST
// nodes themselves or None / null. 

// This is an input class. Do not edit.
// class BST {
//     constructor(value, left = null, right = null) {
//       this.value = value;
//       this.left = left;
//       this.right = right;
//     }
//   }
  
//   //n = length of input array
//   //time: O(n^2)
//   //space: O(n)
//   function reconstructBst(preOrderTraversalValues) {
//     //base case
//     //if the array is empty, return null
//     if(preOrderTraversalValues.length === 0) return null
  
//     //declare currentValue variable as 0th element in input array
//     const currentValue = preOrderTraversalValues[0]
//     //declare rightSubtreeRootIdx to be the length of the input array
//     let rightSubtreeRootIdx = preOrderTraversalValues.length
  
//     //loop through rest of array
//     for(let idx = 1; idx < preOrderTraversalValues.length; idx++){
//       const value = preOrderTraversalValues[idx]
//       //if value is more than or equal to currentValue
//       if(value >= currentValue){
//         //set the rightSubtreeRootIdx to idx
//         rightSubtreeRootIdx = idx
//         //break the loop
//         break
//       }
//     }
//     //recursive case on leftSubtree
//     const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx))
//     //recursive case on rightSubtree
//     const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx))
//     //return new BST with arguments currentValue, leftSubtree, rightSubtree
//     return new BST(currentValue, leftSubtree, rightSubtree)
//   }

  // This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  //add class TreeInfo that takes in rootIdx parameter
  class TreeInfo {
    constructor(rootIdx){
      this.rootIdx = rootIdx
    }
  }
  
  //n = length of input array
  //time: O(n)
  //space: O(n)
  function reconstructBst(preOrderTraversalValues) {
    //instatiate treeInfo with TreeInfo class of rootIdx 0
    const treeInfo = new TreeInfo(0)
    //return the value from the helper function
    return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo) 
  }
  
  //helper function that reconstructs BST from range
  function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo){
    //base case
    //if the rootIdx of the currentSubtreeInfo equals the length of preOrderTraversalValues, return null
    if(currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null
  
    //set rootValue to preOrderTraversalValues at the index of currentSubtreeInfo.rootIdx
    const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx]
    //if rootValue is less than lowerBound or rootValue is more than or 
    //equal to upperBound, return null
    if(rootValue < lowerBound || rootValue >= upperBound) return null
  
    //increment currentSubtreeInfo.rootIdx
    currentSubtreeInfo.rootIdx++
    //recursive case on leftSubtree
    const leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo)
    //recursive case on rightSubtree
    const rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo)
    //return new BST with arguments rootValue, leftSubtree, and rightSubtree
    return new BST(rootValue, leftSubtree, rightSubtree)
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.reconstructBst = reconstructBst;
  
  