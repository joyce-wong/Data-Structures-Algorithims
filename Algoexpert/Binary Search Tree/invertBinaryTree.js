// Invert Binary Tree

// Write a function that takes in a Binary Tree and inverts it. In other words,
// the function should swap every left node in the tree for its corresponding
// right node. 

// Each BinaryTree has an integer IDBCursorWithValue, a left child node, and a 
// right child node. Children nodes can either be BinaryTree nodes 
// themselves or None/null. 

//iterative solution
//n = number of nodes
//time: O(n)
//space: O(n)
function invertBinaryTree(tree) {
    //put the tree into a queue
    let queue = [tree]
    //while the queue is not empty
    while(queue.length){
      //make the current node the last item in the queue
      current = queue.pop()
      //if current is null, continue
      if(current === null){
        continue
      }
      //call helper function to swap left and right nodes
      swapLeftAndRight(current)
      //push current.left into the queue
      queue.push(current.left)
      //push current.right into the queue
      queue.push(current.right)
    }
  }
  
  //helper function that swaps the left and right nodes
  function swapLeftAndRight(tree){
    const temp = tree.left
    tree.left = tree.right
    tree.right = temp
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  //recursive solution
//n = number of nodes
//time: O(n)
//space: O(d)
function invertBinaryTree(tree) {
    //base case, if the tree is null, return
    if(tree === null){
      return
    }
    //call the helper function to swap left and right nodes
    swapLeftAndRight(tree)
    //recursive call on left subtree
    invertBinaryTree(tree.left)
    //recursive call on right subtree
    invertBinaryTree(tree.right)
  }
  
  //helper function for swapping left and right nodes
  function swapLeftAndRight(tree){
    let temp = tree.left
    tree.left = tree.right
    tree.right = temp
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.invertBinaryTree = invertBinaryTree;
  