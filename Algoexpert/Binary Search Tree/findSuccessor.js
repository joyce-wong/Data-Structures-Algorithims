// Find Successor

// Write a function that takes in a Binary Tree(where nodes have an additional
// pointer to their parent node) as well as a node contained in that tree 
// and returns the given node's successor. 

// A node's successor is the next node to be visited(immediately after the given
//     node) when traversing its tree using the in-order tree-traversal technique. 
//     A node has no successor if it's the last node to be visited in the
//     in-order traversal.

// If a node has no successor, your function should return None/ null.

// Each BinaryTree node has an integer value, a parent node, a left child node,
// and a right child node. Children nodes can either be BinaryTree nodes
// themselves or None / null. 

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  //n = number of nodes in the tree
  //time: O(n)
  //space: O(n)
  //recursive solution with helper function
  function findSuccessor(tree, node) {
    //declare variable that uses helper function to getInOrderTraversalOrder
    const inOrderTraversalOrder = getInOrderTraversalOrder(tree)
  
    //for loop through inOrderTraversalOrder
    for(let idx = 0; idx < inOrderTraversalOrder.length; idx++){
      //declare variable to track currentNode
      const currentNode = inOrderTraversalOrder[idx]
      //if currentNode is not equal to node, skip the iteration
      if(currentNode !== node) continue
  
      //if idx is at the end, return null
      if(idx === inOrderTraversalOrder.length - 1) return null
  
      //return inOrderTraversalOrder at the idx + 1
      return inOrderTraversalOrder[idx + 1]
    }
  }
  
  //helper function to getInOrderTraversalOrder
  function getInOrderTraversalOrder(node, order = []){
    //base case
    //if node is null, return order
    if(node === null) return order
  
    //recursive case on left
    getInOrderTraversalOrder(node.left, order)
    //push the node into order array
    order.push(node)
    //recursive case on right
    getInOrderTraversalOrder(node.right, order)
  
    return order
  }
  
  // This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  //n = number of nodes in tree
  //h = height of tree
  //time: O(h)
  //space: O(1)
  //2 helper functions
  function findSuccessor(tree, node) {
    //if node.right is not null, return the result of getLeftmostChild 
    //helper function on node.right
    if(node.right !== null){
      return getLeftmostChild(node.right)
    }
    //otherwise, return the result of getRightmostParent helper function
    return getRightmostParent(node)
  }
  
  function getLeftmostChild(node){
    //initialize currentNode as node
    let currentNode = node
    while(currentNode.left !== null){
      //make currentNode to be currentNode.left
      currentNode = currentNode.left
    }
    //return currentNode which will be the left most child
    return currentNode
  }
  
  //helper function that gets the right most parent
  function getRightmostParent(node){
    //initialize currentNode as node
    let currentNode = node
    //while currentNode.parent is not null and currentNode.parent.right is 
    //equal to currentNode, 
    //set currentNode to currentNode.parent
    while(currentNode.parent !== null && currentNode.parent.right === currentNode){
      currentNode = currentNode.parent
    }
    //return currentNode.parent which will be the right most parent
    return currentNode.parent
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.findSuccessor = findSuccessor;
  