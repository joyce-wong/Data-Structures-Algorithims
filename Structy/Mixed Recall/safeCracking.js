// safe cracking
// Oh-no! You forgot the number combination that unlocks your safe. Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).

// The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.

// Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. The function should return a string representing the combination.

test_00:
safeCracking([
  [7, 1],
  [1, 8],
  [7, 8],
]); // -> '718'
test_01:
safeCracking([
  [3, 1],
  [4, 7],
  [5, 9],
  [4, 3],
  [7, 3],
  [3, 5],
  [9, 1],
]); // -> '473591'
test_02:
safeCracking([
  [2, 5],
  [8, 6],
  [0, 6],
  [6, 2],
  [0, 8],
  [2, 3],
  [3, 5],
  [6, 5],
]); // -> '086235'
test_03:
safeCracking([
  [0, 1],
  [6, 0],
  [1, 8],
]); // -> '6018'
test_04:
safeCracking([
  [8, 9],
  [4, 2],
  [8, 2],
  [3, 8],
  [2, 9],
  [4, 9],
  [8, 4],
]); // -> '38429'

//e = number of hints
//time: O(e)
//space: O(e)
const safeCracking = (hints) => {
    const parentChild = fillGraph(hints)
    return topologicalOrder(parentChild)
  }
  
  const topologicalOrder = (graph) => {
    const numParents = {}
      for(let node in graph){
        numParents[node] = 0 
      }
     for(let node in graph){
       for(let child of graph[node]){
         numParents[child]++
       }
     }
    
    const ready = []
    for(let node in numParents){
      if(numParents[node] === 0){
        ready.push(node)
      }
    }
    
    let combination = ""
    while(ready.length > 0){
      const node = ready.pop()
      combination += node
      for(let child of graph[node]){
        numParents[child]--
        if(numParents[child] === 0){
          ready.push(child)
        }
      }
      
    }
    return combination
  };
  
  
  const fillGraph = (edges) => {
    const graph = {}
    
    for(let edge of edges){
      const [a, b] = edge
      if(!(a in graph)) graph[a] = []
      if(!(b in graph)) graph[b] = []
      graph[a].push(String(b))
    }
    return graph
  }
  
  module.exports = {
    safeCracking,
  };
  