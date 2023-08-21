// Cycle In Graph

// You're given a list of edges representing an unweighted, directed graph with 
// at least one node. Write a function that returns a boolean representing
// whether the given graph contains a cycle. 

// For the purpose of this question, a cycle is defined as any number of vertices, 
// including just one vertex, that are connected in a closed chain. A cycle 
// can also be defined as a chain of at least one vertex in which the first 
// vertex is the same as the last. 

// The given list is what's called an adjacency list, and it represents a
// graph. The number of vertices in the graph is equal to the length of
// edges, where each index i in edges contains vertex i's outbound edges, 
// in no particular order. Each individual edge is represented by a
// positive integer that denotes an index(a destination vertex) in the list 
// that this vertex is connected to. Note that these edges are
// directed, meaning that you can only travel from a particular vertex to 
// its destination, not the other way around(unless the destination vertex itself
// has an outbound edge to the original vertex).

// Also note that this graph may contain self-loops. A self-loop is an edge 
// that has the same destination and origin; in other words, it's an edge
// that connects a vertex to itself. For the purpose of this  question, a 
// self-loop is considered a cycle. 

//v = number of vertices
//e = number of edges in graph
// function cycleInGraph(edges) {
//     //set numberOfNodes to be length of edges
//     const numberOfNodes = edges.length
//     //set visited to be a new array with the length of numberOfNodes filled with boolean false
//     const visited = new Array(numberOfNodes).fill(false)
//     //set currentlyInStack to be a new array with the length of numberOfNodes filled with false
//     const currentlyInStack = new Array(numberOfNodes).fill(false)
  
//     //loop through numberOfNodes
//     for(let node = 0; node < numberOfNodes; node++){
//       //if visited[node] is true, skip the cycle
//       //since the node has already been visited
//       if(visited[node]) continue
  
//       //call helper function isNodeInCycle and store the value
//       //in variable containsCycle
//       const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack)
//       //if containsCycle, return true
//       if(containsCycle) return true
//     }
//     //if not, return false
//     return false
//   }
  
//   //helper function isNodeInCycle detects if node is in a cyle
//   function isNodeInCycle(node, edges, visited, currentlyInStack){
//     //set visited[node] equal to true
//     visited[node] = true
//     //set currentlyInStack[node] to true
//     currentlyInStack[node] = true
  
//     //declare neighbors to be edges[node]
//     const neighbors = edges[node]
//     //loop through neighbors
//     for(const neighbor of neighbors){
//       //if neighbor is not visited
//       if(!visited[neighbor]){
//         //store call to helper function isNodeInCycle to containsCycle variable
//         const containsCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack)
//         //if containsCycle, return true
//         if(containsCycle) return true
//         //otherwise if neighbor is currentlyInStack return true
//       } else if(currentlyInStack[neighbor]){
//         return true
//       }
//     }
//     //exit loops and set currentlyInStack[node] to false
//     currentlyInStack[node] = false
//     //return false
//     return false
//   }

//destructure an array of constants to associate them with numbers 
//to implement a white grey black algorithm
const [WHITE, GREY, BLACK] = [0, 1, 2]
//v = number of vertices
//e = number of edges in the graph
//time: O(v + e)
//space: O(v)
function cycleInGraph(edges) {
  //declare numberOfNodes to be equal to edges.length
 const numberOfNodes = edges.length
  //declare a new array with numberOfNodes length and fill it with value of WHITE
  const colors = new Array(numberOfNodes).fill(WHITE)

  //loop through numberOfNodes
  for(let node = 0; node < numberOfNodes; node++){
    //if colors[node] does not equal WHITE skip to next cycle
    if(colors[node] !== WHITE) continue

    //store the call to helper function traverseAndColorNodes to containsCycle
    const containsCycle = traverseAndColorNodes(node, edges, colors)
    //if containsCycle, return true
    if(containsCycle) return true
  }
  //otherwise return false
  return false
}

//declare function traverseAndColorNodes
function traverseAndColorNodes(node, edges, colors){
  //set colors[node] to GREY
  colors[node] = GREY

  //declare neighbors to be edges[node]
  const neighbors = edges[node]
  //loop through neighbors
  for(const neighbor of neighbors){
    //set neighborColor to colors[neighbor]
    const neighborColor = colors[neighbor]

    //if neighborColor is GREY, return true
    if(neighborColor === GREY) return true

    //if neighborColor is BLACK, skip cycle
    if(neighborColor === BLACK) continue

    //store call to helper function traverseAndColorNodes
    const containsCycle = traverseAndColorNodes(neighbor, edges, colors)
    //if containsCycle, return true
    if(containsCycle) return true
  }
  //set colors[node] to BLACK
  colors[node] = BLACK
  //return false
  return false
}

// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;

  