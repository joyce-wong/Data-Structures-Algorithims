// Depth-first Search

// You're given a Node class that has a name and an array of optional children
// nodes. When put together, nodes form an acyclic tree-like structure.

// Implement the depthFirstSearch method on the Node class, which takes in an
// empty array, traverses the tree using the Depth-first Search approach
// (specifically navigating the tree from left to right), stores all of the
// nodes' names in the input array, and returns it.

// If you're unfamiliar with the Depth-first Search, we recommend watching the 
// Conceptual Overview section of this question's video explanation before 
// starting to code.

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
    //v = number of vertices in the input graph
    //e = number of edges in the input graph
    //time: O(v + e)
    //space: O(v)
    depthFirstSearch(array) {
      //push name of node into input array
      array.push(this.name)
      //loop through elements of this.children array
        for(let child of this.children){
          //call the depthFirstSearch method on each element of this.children array
          //the recursion and loop checks each node to see if it has children to loop over
           child.depthFirstSearch(array)
          }
      //return input array
      return array
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  