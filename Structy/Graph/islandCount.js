// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

islandCount(grid); // -> 4
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

islandCount(grid); // -> 1
test_03:
 const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid); // -> 0

//depth first recursive with one helper function
//r = number of rows
// c = number of columns
// time O(rc)
// space O(rc)
const islandCount = (grid) => {
    const visited = new Set()
    let count = 0
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
        if(exploreIsland(grid, i, j, visited) === true) count++
      }
    }
    return count
  }
  
  const exploreIsland = (grid, row, column, visited) => {
    const rowInBounds = row >= 0 && row < grid.length
    const columnInBounds = column >= 0 && column < grid[0].length
    if(!rowInBounds || !columnInBounds) return false
    
    if(grid[row][column] === 'W') return false
    
    const position = row + ',' + column
    if(visited.has(position)) return false
    visited.add(position)
    
    exploreIsland(grid, row + 1, column, visited)
    exploreIsland(grid, row - 1, column, visited)
    exploreIsland(grid, row, column + 1, visited)
    exploreIsland(grid, row, column - 1, visited)
    
    return true
  }
  
  module.exports = {
    islandCount,
  };