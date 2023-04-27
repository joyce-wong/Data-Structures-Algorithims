// Evaluate Expression Tree

// You're given a binary expression tree. Write a function to evaluate this tree
// mathematically and return a single resulting integer.

// All leaf nodes in the tree represent operands, which will always be positive
// integers. All of the other nodes represent operators. There are 4 operators
// supported, each of which is represented by a negative integer:

// -1: Addition operator, adding the left and right subtrees.

// -2: Subtraction operator, subtracting the right subtree from the left subtree.

// -3: Division operator, dividing the left subtree by the right subtree.
// If the result is a decimal, it should be rounded towards zero.

// -4: Multiplication operator, multiplying the left and right subtrees.

// You can assume the tree will always be a valid expression tree. Each operator
// also works as a grouping symbol, meaning the bottom of the tree is always
// evaluated first, regardless of the operator.

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  //depth first recursive tranversal
  //n = number of nodes in the Binary tree
  //h = height of the Binary tree
  //time: O(n)
  //space: O(h)
  function evaluateExpressionTree(tree) {
    //base case if the tree.value is positive, you are at a leaf node
    //return tree.value
    if(tree.value >= 0) return tree.value
  
    //save recursive case on tree.left to a variable
     const leftValue = evaluateExpressionTree(tree.left)
    //recursive case on tree.right to a variable
    const rightValue = evaluateExpressionTree(tree.right)
  
    //if operand is -1, add the two values
    if(tree.value === -1){
      return leftValue + rightValue
    }
    //if operand is -2, subtract
    if(tree.value === -2){
      return leftValue - rightValue
    }
    //if operand is -3, divide
    //note: Math.trunc removes the part of the number to the right of the
    //decimal point. This is different from Math.floor which rounds the number
    //With negative numbers, Math.floor will round down negatively and
    //Math.floor will just remove the number to the right of the decimal point
    if(tree.value === -3){
      return Math.trunc(leftValue/rightValue)
    }
    //if operand is -4, multiply
    if(tree.value === -4){
      return leftValue * rightValue
    }
  }
  
  
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.evaluateExpressionTree = evaluateExpressionTree;
  