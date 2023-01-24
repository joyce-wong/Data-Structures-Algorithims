knight attack
A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

Write a function, knightAttack, that takes in 5 arguments:

n, kr, kc, pr, pc

n = the length of the chess board
kr = the starting row of the knight
kc = the starting column of the knight
pr = the row of the pawn
pc = the column of the pawn
The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.

test_00:
knightAttack(8, 1, 1, 2, 2); // -> 2
test_01:
knightAttack(8, 1, 1, 2, 3); // -> 1
test_02:
knightAttack(8, 0, 3, 4, 2); // -> 3
test_03:
knightAttack(8, 0, 3, 5, 2); // -> 4
test_04:
knightAttack(24, 4, 7, 19, 20); // -> 10
test_05:
knightAttack(100, 21, 10, 0, 0); // -> 11
test_06:
knightAttack(3, 0, 0, 1, 2); // -> 1
test_07:
knightAttack(3, 0, 0, 1, 1); // -> null

// n = length of board
// time O(n^2)
// space O(n^2)
const knightAttack = (n, kr, kc, pr, pc) => {
    const visited = new Set()
    visited.add(kr + ',' + kc)
    const queue = [[kr, kc, 0]]
    while(queue.length > 0){
      const [r, c, step] = queue.shift()
      if(r === pr && c === pc){
        return step
      } 
      const neighbors = knightPositions(n, r, c)
      
      for(let neighbor of neighbors){
        const [neighborRow, neighborCol] = neighbor
        const neighborKey = neighborRow + ',' + neighborCol
      if(!visited.has(neighborKey)){
        visited.add(neighborKey)
        queue.push([neighborRow, neighborCol, step + 1])
        }
      }
    }
    return null
  };
  
  const knightPositions = (n, r, c) => {
    const positions = [
      [ r + 2, c + 1 ],
      [ r - 2, c + 1 ],
      [ r + 2, c - 1 ],
      [ r - 2, c - 1 ],
      [ r + 1, c + 2 ],
      [ r - 1, c + 2 ],
      [ r + 1, c - 2 ],
      [ r - 1, c - 2 ],
    ]
    const inboundsPositions = []
    for (let pos of positions){
      const [newRow, newCol] = pos
      if(0 <= newRow && newRow < n && 0 <= newCol && newCol < n)
      inboundsPositions.push(pos)
    }
    return inboundsPositions
  }
    
  
  
  module.exports = {
    knightAttack,
  };
  