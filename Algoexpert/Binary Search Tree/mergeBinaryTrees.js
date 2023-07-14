// Merge Binary Trees 

// Given two binary trees, merge them and return the resulting tree.
// If two nodes overlap during the merger then sum the values, otherwise
// use the existing node. 

// Note that your solution can either mutate the existing trees or return 
// a new tree. 

// This is an input class. Do not edit.
// class BinaryTree {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   exports.BinaryTree = BinaryTree;
  
//   //n = number of nodes
//   //h = height of tree
//   //recursive solution
//   //time: O(n)
//   //space: O(h)
//   function mergeBinaryTrees(tree1, tree2) {
//     //base cases
//     //if tree1 is null, return tree2
//     if(tree1 === null){
//       return tree2
//     }
//     //if tree2 is null return tree1
//     if(tree2 === null){
//       return tree1
//     }
//     //add the values of the root nodes together
//     tree1.value += tree2.value
//     //recursive case on tree1.left
//     tree1.left = mergeBinaryTrees(tree1.left, tree2.left)
//     //recursive case on tree1.left
//     tree1.right = mergeBinaryTrees(tree1.right, tree2.right)
//     //return tree1 that has been mutated to add in values of tree2
//     return tree1
//   }
  
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
  //iterative solution
  //time: O(n)
  //space: O(h)
  function mergeBinaryTrees(tree1, tree2) {
    //if tree1 is null, return tree2
    if(tree1 === null){
      return tree2
    }
  
    //declare variables to track stacks of each tree
   let tree1Stack = [tree1]
   let tree2Stack = [tree2]
  
    //while loop while tree1Stack is not empty
    while(tree1Stack.length > 0){
      //the current nodes are at the end of the stack
      const tree1Node = tree1Stack.pop()
      const tree2Node = tree2Stack.pop()
  
      //if tree2Node is null, don't do anything
      if(tree2Node === null) continue
  
      //add the values of the nodes together
      tree1Node.value += tree2Node.value
  
      //if tree1Node.left is null
      if(tree1Node.left === null){
        //set tree1Node.left to tree2Node.left
        tree1Node.left = tree2Node.left
      } else {
        //otherwise, push tree1Node.left onto tree1Stack
        tree1Stack.push(tree1Node.left)
        //and push tree2Node.left onto tree2Stack
        tree2Stack.push(tree2Node.left)
      }
  
      //if tree1Node.right is null
      if(tree1Node.right === null){
        //set tree1Node.right to tree2Node.right
        tree1Node.right = tree2Node.right
      } else {
        //otherwise push tree1Node.right onto tree1Stack
        tree1Stack.push(tree1Node.right)
        //and push tree2Node.right onto tree2Stack
        tree2Stack.push(tree2Node.right)
      }
    }
    //return tree1 mutated to add the values of tree2
    return tree1
  }
  
  // Do not edit the line below.
  exports.mergeBinaryTrees = mergeBinaryTrees;
  