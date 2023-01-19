// best bridge
// Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.

test_00:
const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 1
test_01:
const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 2
test_02:
const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["L", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 3
test_03:
const grid = [
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "L", "L", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 3
test_04:
const grid = [
  ["L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "L", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L"],
];
bestBridge(grid); // -> 2
test_05:
const grid = [
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W", "W", "W", "L"],
];
bestBridge(grid); // -> 8

//r = number of rows 
//c = number of columns 
//time O(rc)
//space O(rc)
const bestBridge = (grid) => {
    let mainIsland
    for (let r = 0; r < grid.length; r++){
      for (let c = 0; c < grid[0].length; c++){
        const possibleIsland = exploreIsland(grid, r, c, new Set())
        if(possibleIsland.size > 0) {
          mainIsland = possibleIsland
          break
        }
      }
    }
    const visited = new Set(mainIsland)
    const queue = []
    for(let position of mainIsland){
      const [row, column] = position.split(',').map(Number)
      queue.push([row, column, 0])
    }
    while(queue.length > 0){
      const [row, column, distance] = queue.shift()
      
      const position = row + ',' + column
      if(grid[row][column] === 'L' && !mainIsland.has(position)) return distance - 1
    
      const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        for(let delta of deltas){
          const [deltaRow, deltaColumn] = delta
          const neighborRow = row + deltaRow
          const neighborColumn = column + deltaColumn
          const neighborPosition = neighborRow + ',' + neighborColumn
          if(isInBounds(grid, neighborRow, neighborColumn) && !visited.has(neighborPosition)){
            visited.add(neighborPosition)
            queue.push([neighborRow, neighborColumn, distance + 1])
        }
      }
    }
  };
  
  const isInBounds = (grid, r, c) => {
    const rowInBounds = 0 <= r && r < grid.length
    const columnInBounds = 0 <= c && c < grid[0].length
    return rowInBounds && columnInBounds
  }
  
  const exploreIsland = (grid, r, c, visited) => {
    
    
    if(!isInBounds(grid, r, c) || grid[r][c] === 'W') return visited
    
    const position = r +',' + c
    if(visited.has(position)) return visited
    visited.add(position)
    
    exploreIsland(grid, r + 1, c, visited)
    exploreIsland(grid, r - 1, c, visited)
    exploreIsland(grid, r, c + 1, visited)
    exploreIsland(grid, r, c - 1, visited)
    
    return visited
  }
  
  module.exports = {
    bestBridge,
  };
  