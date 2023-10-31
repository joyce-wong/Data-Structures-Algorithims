// Reveal Minesweeper

// Minesweeper is a popular video game. From Wikipedia, "The game features a grid of clickable
// squares, with hidden "mines" scattered throughout the board." The objective
// is to clear the board without detonating any mines, with help from clues 
// about the number of neighboring mines in each field." Specifically, when 
// a player clicks on a square (also called a cell) that doesn't contain a mine,
// the square reveals a number representing the number of immediately 
// adjacent mines (including diagonally adjacent mines).

// You're given a two-dimensional array of strings that represents a Minesweeper 
// board for a game in progress. You're also given a row and a column 
// representing the indices of the next square that the player clicks on the board.
// Write a function that returns an updated board after the click (your function can
// mutate the input board).

// The board will always contain only strings, and each string will be one 
// of the following:

// "M": A mine that has not been clicked on. 

// "X": A mine that has been clicked on, indicating a lost game. 

// "H": A cell with no mine, but whose content is still hidden to the player. 

// "0-8": A cell with no mine, with an integer from 0 to 8 representing the 
// number of adjacent mines. Note that this is a single-digit integer represented 
// as a string. For example "2" would mean there are 2 adjacent cells with mines. 
// Numbered cells are not clickable as they have already been revealed. 

// If the player clicks on a mine, replace the "M" with "X", indicating the game 
// was lost. 

// If the player clicks on a cell adjacent to a mine, replace the "H" with a string
// representing the number of adjacent mines. 

// If the player clicks on a cell with no adjacent mines, replace the "H" with "0".
// Additionally, reveal all of the adjacent hidden cells as if the player had 
// clicked on those cells as well. 

// You can assume the given row and column will always represent a legal move.
// The board can be of any size and have any number of mines in it. 

//w = width of board
//h = height of board
//time: O(w*h)
//space: O(w*h)
function revealMinesweeper(board, row, column) {
    if(board[row][column] === 'M'){
      board[row][column] = 'X'
      return board
    }
   
     const neighbors = getNeighbors(board, row, column)
     let adjacentMinesCount = 0
     for(const [neighborRow, neighborColumn] of neighbors){
       if(board[neighborRow][neighborColumn] === 'M'){
         adjacentMinesCount++
       }
     }
   
     if(adjacentMinesCount > 0){
       board[row][column] = adjacentMinesCount.toString()
     } else {
       board[row][column] = '0'
       for(const [neighborRow, neighborColumn] of neighbors){
         if(board[neighborRow][neighborColumn] === 'H'){
           revealMinesweeper(board, neighborRow, neighborColumn)
         }
       }
     }
     return board
   }
   
   function getNeighbors(board, row, column){
     const directions = [
       [0, 1],
       [0, -1],
       [1, 0],
       [-1, 0],
       [1, 1],
       [1, -1],
       [-1, 1],
       [-1, -1],
     ]
     const neighbors = []
     for(const [directionRow, directionColumn] of directions){
       const newRow = row + directionRow
       const newColumn = column + directionColumn
       if(0 <= newRow && newRow < board.length && 0 <= newColumn && newColumn < board[0].length){
         neighbors.push([newRow, newColumn])
       }
     }
     return neighbors
   }
   
