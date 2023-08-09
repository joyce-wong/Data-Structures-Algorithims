// Breadth-first Search

// You're given a Node class that has a name and an array of optional children 
// nodes. When put together, nodes form an acyclic tree-like structure. 

// Implement the breadthFirstSearch method on the Node class, which takes in
// an empty array, traverses the tree using the Breadth-first Search approach
// (specifically navigating the tree from left to right), stores all of the nodes'
// names in the input array, and returns it. 

// If you're unfamiliar with the Breadth-first Search, we recommend watching the
// Conceptual Overview section of this question's video explanation before 
// starting to code. 

// Do not edit the class below except
// for the breadthFirstSearch method.
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
  
    //v = vertices of graph
    //e = edges of graph
    //time: O(v + e)
    //space: O(v)
    breadthFirstSearch(array) {
      //initialize queue with this
      let queue = [this]
      //while the queue is not empty
      while(queue.length > 0){
        //current is the shifted first element of the queue
        const current = queue.shift()
        //push current.name into the array
        array.push(current.name)
        //loop through current.children
        for(const child of current.children){
          //push each child into queue
          queue.push(child)
        }
      }
      //return array
      return array
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  