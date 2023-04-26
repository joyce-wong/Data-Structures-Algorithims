// Node Depths

// The distance between a node in a Binary Tree and the tree's root is called the
// node's depth. 

// Write a function that takes in a Binary Tree and returns the sum of its nodes'
// depths.

// Each Binary tree node has an integer value, a left child node, and a right
// child node. Children nodes can either be Binary Tree nodes themselves or
// None/ null.

//depth first iterative solution
//n = number of nodes in Binary Tree
//h = height of binary tree
//time: O(n)
//space: O(h)
// function nodeDepths(root) {
//     //declare sum variable to keep track total levels
//     let sum = 0
//     //base case if root is null, return 0
//     if(root === null) return 0
//     //declare stack that has destructured node at root and level at 0
//     const stack = [{node: root, level: 0}]
//     //while loop through stack
//     while(stack.length > 0){
//       //destructure popped off value to {node, level}
//       const {node, level} = stack.pop()
//       //add the level to the sum for each node
//       sum += level
//   //if the node.right is not null, push in node.right and level + 1
//       //don't forget to push in object with key/value pairs!
//       if(node.right !== null) stack.push({node: node.right, level: level + 1})
//       //if the node.left is not null, push in node.left and level + 1
//       if(node.left !== null) stack.push({node: node.left, level: level + 1})
//     }
//     //return sum
//     return sum
//   }
  
//   // This is the class of the input binary tree.
//   class BinaryTree {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }

//depth first recursive solution with helper 
//n = number of nodes in binary tree
//h = height of binary tree
//time: O(n ^ 2)
//space: O(h)
// function nodeDepths(root) {
//     //declare variable to track sum
//     let sum = 0
//     //declare levels array
//     const levels = []
//     //fill levels using helper function initialized with root, levels, and 0
//     exploreDepths(root, levels, 0)
//     //for loop through outer array of levels
//     for(let el of levels){
//       //for loop through inner arrays of levels
//       for(let char of el){
//          sum += char 
//       }
//     }
//     //return sum
//     return sum
//   }
  
//   //recursive helper function that tracks level
//   function exploreDepths(root, levels, level){
//     //base case if root is null, return
//     if(root === null) return
//     //if length of levels equals level
//     if(levels.length === level){
//       //set levels at level to level inner array
//       levels[level] = [level]
//       //otherwise, push the level into levels at level
//     } else {
//       levels[level].push(level)
//     }
//     //recursive function on root.left, add 1 to level
//     const leftTree = exploreDepths(root.left, levels, level + 1)
//     //recursive function on root.right, add 1 to level
//     const rightTree = exploreDepths(root.right, levels, level + 1)
//   }
  
//   // This is the class of the input binary tree.
//   class BinaryTree {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//depth first recursive simplified
//n = number of nodes in Binary tree
//h = height of Binary tree
//time: O(n)
//space: O(h)
//add extra parameter for level tracking
function nodeDepths(root, level = 0) {
    //base case if root is null, return 0
    if(root === null) return 0
    //add level to recursive case for both root.left and root.right
    return level + nodeDepths(root.left, level + 1) + nodeDepths(root.right, level + 1)
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
  exports.nodeDepths = nodeDepths;
  