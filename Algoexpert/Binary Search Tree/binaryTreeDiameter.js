// Binary Tree Diameter

// Write a function that takes in a Binary Tree and returns its diameter. 
// The diameter of a binary tree is defined as the length of its longest
// path, even if that path doesn't pass through the root of the tree. 

// A path is a collection of connected nodes in a tree, where no node is 
// connected to more than two other nodes. The length of a path is the 
// number of edges between the path's first node and its last node. 

// Each BinaryTree node has an integer value, a left child node, 
// and a right child node. Children nodes can either be BinaryTree 
// nodes themselves or None / null. 

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeInfo{
    constructor(diameter, height){
      this.diameter = diameter
      this.height = height
    }
  }
  
  //n = number of nodes
  //h = height of binary tree
  //time: O(n)
  //space: O(h)
  function binaryTreeDiameter(tree) {
    //return the diameter of getTreeInfo(tree) function
    return getTreeInfo(tree).diameter
  }
  
  //helper function to get tree's info
  function getTreeInfo(tree){
    //base case, if tree is null, return a new instance of class TreeInfo
    //with 0 diameter and 0 height
    if(tree === null){
      return new TreeInfo(0,0)
    }
    //recursive case of helper function on tree.left
    let leftTreeInfo = getTreeInfo(tree.left)
    //recursive case of helper function on tree.right
    let rightTreeInfo = getTreeInfo(tree.right)
  
    //add the height of the leftTree and rightTree to get longestPathThroughRoot
    let longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height
    //maxDiameterSoFar is the maximum of leftTreeInfo.diameter and rightTreeInfo.diameter
    let maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter)
    //currentDiameter is the maximum of longestPathThroughRoot and maxDiameterSoFar
    let currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar)
    //currentHeight is 1 added to the maximum of leftTreeInfo.height and rightTreeInfo.height
    let currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height)
  
    //return new instance of TreeInfo class with input arguments as 
    //currentDiameter and currentHeight
    return new TreeInfo(currentDiameter, currentHeight)
  }
  
  // Do not edit the line below.
  exports.binaryTreeDiameter = binaryTreeDiameter;