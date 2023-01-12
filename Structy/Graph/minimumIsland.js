// minimum island
// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

// You may assume that the grid contains at least one island.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

minimumIsland(grid); // -> 9
test_03:
const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

minimumIsland(grid); // -> 1

//r = number of rows
//c = number columns
//O(rc) time, O(rc) space
const minimumIsland = (grid) => {
    const visited = new Set()
    let min = Infinity
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
        const size = exploreIsland(grid, i, j, visited)
         if(size > 0 && size < min){
           min = size
         } 
      }
    }
    return min
    };
  
  const exploreIsland = (grid, row, column, visited) => {
    const rowInBounds = row >= 0 && row < grid.length
    const columnInBounds = column >= 0 && column < grid[0].length
    if(!rowInBounds || !columnInBounds) return 0
    
    if(grid[row][column] === 'W') return 0
    
    const position = row + ',' + column
    
    if(visited.has(position)) return 0
    visited.add(position)
    
    let size = 1
    size += exploreIsland(grid, row + 1, column, visited)
    size += exploreIsland(grid, row - 1, column, visited)
    size += exploreIsland(grid, row, column + 1, visited)
    size += exploreIsland(grid, row, column - 1, visited)
    return size
  }
  
  module.exports = {
    minimumIsland,
  };