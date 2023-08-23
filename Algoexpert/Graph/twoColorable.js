// Two-Colorable

// You're given a list of edges representing a connected, unweighted, undirected
// graph with at least one node. Write a function that returns a boolean 
// representing whether the given graph is two-colorable. 

// A graph is two-colorable(also called bipartite) if all of the nodes can be 
// assigned one of two colors such that no nodes of the same color are connected 
// by an edge.

// The given list is what's called an adjacency list, and it represents a graph. 
// The number of vertices in the graph is equal to the length of edges, where 
// each index i in edges contains vertex i's siblings, in no particular order. 
// Each individual edge is represented by a positive integer that denotes an 
// index in the list that this vertex is connected to. Note that this graph is 
// undirected, meaning that if a vertex appears in the edge list of another
// vertex, then the inverse will also be true. 

// Also note that this graph may contain self-loops. A self-loop is an edge that 
// has the same destination and origin; in other words, it's an edge that connects 
// a vertex to itself. Any self-loop should make a graph not 2-colorable. 

//v = number of vertices
//e = number of edges in graph
//time: O(v + e)
//space: O(v)
function twoColorable(edges) {
    //create an array of the same length of edges and put null as each element
    const colors = edges.map(edge => null)
    //set the 0th element of colors to be true
    colors [0] = true
    //set stack to an array with 0 in it
    const stack = [0]
  
    //while the stack is not empty
    while(stack.length > 0){
      //pop node off the stack
      const node = stack.pop()
      //loop through the connection of edges[node]
      for(const connection of edges[node]){
        //if colors[connection] is null
        if(colors[connection] === null){
          //set colors[connection] to be equal to not colors[node]
          colors[connection] = !colors[node]
          //push the connection into the stack
          stack.push(connection)
          //else if the colors[connection] equals colors[node]
        } else if (colors[connection] === colors[node]){
          //return false because edges is not bipartite
          return false
        }
      }
    }
    //return true after exiting loop because you were able to loop through edges[node]
    //without coloring nodes next to each other the same color
    return true
  }
  
  // Do not edit the line below.
  exports.twoColorable = twoColorable;
  