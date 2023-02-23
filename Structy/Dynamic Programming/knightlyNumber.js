// knightly number
// A knight is on a chess board. Can you figure out the total number of ways the knight can move to a target position in exactly m moves? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

// Write a function, knightlyNumber, that takes in 6 arguments:

// n, m, kr, kc, pr, pc

// n = the length of the chess board
// m = the number of moves that must be used
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the target row
// pc = the target column
// The function should return the number of different ways the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.

test_00:
knightlyNumber(8, 2, 4, 4, 5, 5); // -> 2
test_01:
knightlyNumber(8, 2, 7, 1, 7, 1); // -> 3
test_02:
knightlyNumber(8, 2, 5, 4, 5, 4); // -> 8
test_03:
knightlyNumber(8, 3, 5, 2, 4, 4); // -> 21
test_04:
knightlyNumber(20, 6, 18, 7, 10, 15); // -> 60
test_05:
knightlyNumber(20, 12, 8, 3, 9, 14); // -> 98410127
test_06:
knightlyNumber(8, 2, 0, 0, 1, 1); // -> 0

// n = length of board
// m = number of moves
//time O(m * n^2)
//space O(m * n^2)

const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
    let node = m + ',' + kr + ',' + kc
    if(node in memo) return memo[node] 
    let total = 0
    if(0 > kr || kr >= n || 0 > kc || kc >= n ) return 0
    if(m === 0){
      if(kr === pr && kc === pc){
        return 1
      } else {
        return 0
      }
    }
    const deltas = [
                    [kr + 2, kc + 1],
                   [kr + 2, kc - 1],
                   [kr + 1, kc + 2],
                   [kr + 1, kc -2],
                   [kr - 2, kc + 1],
                   [kr - 2, kc - 1],
                   [kr - 1, kc + 2],
                   [kr - 1, kc - 2],
                   ]
    for(let delta of deltas){
      const [a, b] = delta
        total += knightlyNumber(n, m - 1, a, b, pr, pc, memo)
    }
    memo[node] = total
    return memo[node]
  };
  
  module.exports = {
    knightlyNumber
  };
  