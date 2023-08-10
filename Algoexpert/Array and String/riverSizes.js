// River Sizes

// You're given a two-dimensional array(a matrix) of potentially unequal height 
// and width containing only 0s and 1s. Each 0 represents land, and each 1
// represents part of a river. A river consists of any number of 1s that 
// are either horizontally or vertically adjacent(but not diagonally adjacent).
// The number of adjacent 1s forming a river determine its size. 

// Note that a river can twist. In other words, it doesn't have to be a straight
// vertical line or a straight horizontal line; it can be L-shaped, for example. 

// Write a function that returns an array of the sizes of all rivers 
// represented in the input matrix. The sizes don't need to be in 
// any particular order. 

//w = width of matrix
//h = height of matrix
//time: O(wh)
//space: O(wh)
function riverSizes(matrix) {
    //declare output array to store sizes of each river of 1s
    const sizes = []
    //visited is a matrix with the same size as matrix that contains
    //all false values
    const visited = matrix.map(row => row.map(value => false))
    //loop through each row of the matrix
    for(let i = 0; i < matrix.length; i++){
      //loop through the elements of the matrix
      for(let j = 0; j < matrix[i].length; j++){
        //if visited[i][j] is true, continue to next loop
        if(visited[i][j]) continue
        //otherwise, call traverseNode helper function
        traverseNode(i, j, matrix, visited, sizes)
      }
    }
    //return sizes array
    return sizes
  }
  
  //traverseNode helper function that tracks which nodes in matrix have been visited
  //and adds the sizes of each river into the sizes array
  function traverseNode(i, j, matrix, visited, sizes){
    //initialize currentRiverSize as 0
    let currentRiverSize = 0
    //initialize nodesToExplore as a 2-d matrix that contains i and j
    const nodesToExplore = [[i, j]]
    //while nodesToExplore is not empty
    while(nodesToExplore.length){
      //currentNode is the last node in nodesToExplore
      const currentNode = nodesToExplore.pop()
      //set the initial values of i and j
      // i = currentNode[0]
      // j = currentNode[1]
      let [i, j] = currentNode
      //if the node is already visited, continue to next loop
      if(visited[i][j]) continue
      //otherwise mark the node as true in visited
      visited[i][j] = true
      //if matrix[i][j] is 0, continue to next loop because the node is land
      if(matrix[i][j] === 0) continue
      //otherwise, increment currentRiverSize by 1
      currentRiverSize++
      //set unvisitedNeighbors to a call on helper function getUnvisitedNeighhbors
      const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
      //loop through neighbor of unVisitedNeighbors
      for(const neighbor of unvisitedNeighbors){
        //push each neighbor into nodesToExplore
        nodesToExplore.push(neighbor)
      }
    }
    //if currentRiverSize is more than 0, push currentRiverSize into sizes
    if(currentRiverSize > 0) sizes.push(currentRiverSize)
  }
  
  //helper function that gets unvisited neighbors for each node in matrix
  function getUnvisitedNeighbors(i, j, matrix, visited){
    //initialize unvisitedNeighbors as an empty array
    const unvisitedNeighbors = []
    //if the row is not the first row and the node hasn't been visited
    //push the node into unvisitedNeighbors
    if(i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j])
    //if the row is not the last row and the node hasn't been visited
    //push the node into unvisitedNeighbors
    if(i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j])
    //if the column is no the first column and the node hasn't been visited
    //push the node into unvisitedNeighbors
    if(j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1])
    //if the column is not the last column and the node hasn't been visited
    //push the node into unvisitedNeighbors
    if(j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1])
    //return unvisitedNeighbors
    return unvisitedNeighbors
  }
  
  // Do not edit the line below.
  exports.riverSizes = riverSizes;
  