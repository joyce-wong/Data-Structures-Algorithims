// BST Traversal

// Write three functions that take in a Binary Search Tree(BST) and an empty 
// array, traverse the BST, add its nodes' values to the input array and return
// that array. The three functions should traverse the BST using the in-order, pre-order, 
// and post-order tree-traversal techniques, respectively. 

// If you're unfamiliar with tree-traversal techniques, we recommend watching 
// the Conceptual Overview section of this question's video explanation
// before starting to code. 

// Each BST node has an integer value, a left child node, and a right child node.
// A node is said to be a valid BST node if and only if it satisfies 
// the BST property: its value is strictly greater than the values of every node
// to its left; its value is less than or equal to the values of every node to 
// its right; and its children nodes are either valid BST nodes themselves
// or None / null. 

//time: O(n)
//space: O(n)
function inOrderTraverse(tree, array) {
    if(tree !== null){
      inOrderTraverse(tree.left, array)
      array.push(tree.value)
      inOrderTraverse(tree.right, array)
    }
    return array
  }
  
  function preOrderTraverse(tree, array) {
    if(tree !== null){
      array.push(tree.value)
      preOrderTraverse(tree.left, array)
      preOrderTraverse(tree.right, array)
    }
    return array
  }
  
  function postOrderTraverse(tree, array) {
    if(tree !== null){
      postOrderTraverse(tree.left, array)
      postOrderTraverse(tree.right, array)
      array.push(tree.value)
    }
    return array
  }
  
  // Do not edit the lines below.
  exports.inOrderTraverse = inOrderTraverse;
  exports.preOrderTraverse = preOrderTraverse;
  exports.postOrderTraverse = postOrderTraverse;