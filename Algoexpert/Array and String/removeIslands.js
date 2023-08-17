// Remove Islands

// You're given a two-dimensional array(a matrix) of potentially unequal height 
// and width containing only 0s and 1s. The matrix represents a
// two-toned image, where each 1 represents black and each 0 
// represents white. An island is defined as any number of 1s that are 
// horizontally or vertically adjacent (but not diagonally adjacent) and 
// that don't touch the border of the image. In other words, a group of 
// horizontally or vertically adjacent 1s isn't an island if any of those
// 1s are in the first row, last row, first column, or last column of 
// the input matrix. 

// Note that an island can twist. In other words, it doesn't have to be a 
// straight vertical line or a straight horizontal line; it can be 
// L-shaped, for example. 

// You can think of islands as patches of black that don't touch the border
// of the two-toned image. 

// Write a function that returns a modified version of the input matrix,
// where all of the islands are removed. You remove an island by 
// replacing it with 0s. 

// Naturally, you're allowed to mutate the input matrix. 

//w = width of matrix
//h = height of matrix
//time: O(wh)
//space: O(wh)
function removeIslands(matrix) {
    //declare matrix to keep track of onesConnectedToBorder
    const onesConnectedToBorder = []
    //loop through the rows of matrix
    for(let row = 0; row < matrix.length; row++){
      //push [] into each row
      onesConnectedToBorder.push([])
      for(let col = 0; col < matrix[0].length; col++){
        //push false into each element of each column
        onesConnectedToBorder[row].push(false)
      }
    }
  
    //loop through the rows of matrix
    for(let row = 0; row < matrix.length; row++){
      //loop through the columns of matrix
      for(let col = 0; col < matrix[row].length; col++){
        //check if the row is a border
        const rowIsBorder = row === 0 || row === matrix.length - 1
        //check if the col is a border
        const colIsBorder = col === 0 || col === matrix[row].length -1
        //check if you are in a border
        const isBorder = rowIsBorder || colIsBorder
        //if not border, go to next loop
        if(!isBorder) continue
  
        //if you're not at a 1 in your position, go to the next loop
        if(matrix[row][col] !== 1) continue
  
        //call findOnesConnectedToBorder function
        findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder)
      }
    }
  
    //loop through the rows
    for(let row = 1; row < matrix.length - 1; row++){
      //loop through the columns
      for(let col = 1; col < matrix[row].length - 1; col++){
        //if onesConnectedToBorder at current position, skip to next loop cycle
        if(onesConnectedToBorder[row][col]) continue
  
        //otherwise, set matrix at the current position to 0
        matrix[row][col] = 0
      }
    }
    //return matrix
    return matrix
  }
  
  //helper function that findsOnesConnectedToBorder
  function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder){
    //set stack at startRow, startCol position
    const stack = [[startRow, startCol]]
  
    //while the stack still has elements
    while(stack.length > 0){
      //set currentPositiion to top of stack
      const currentPosition = stack.pop()
      //destructure currentPosition into [currentRow, currentCol]
      const [currentRow, currentCol] = currentPosition
  
      //track alreadyVisited as currentPosition within onesConnectedToBorder
      const alreadyVisited = onesConnectedToBorder[currentRow][currentCol]
      //if alreadyVisited, skip to next loop cycle
      if(alreadyVisited) continue
  
      //otherwise, set the onesConnectedToBorder at currentPosition to true
      onesConnectedToBorder[currentRow][currentCol] = true
  
      //declare neighbors variable to track the call on 
      //helper function getNeighbors
      const neighbors = getNeighbors(matrix, currentRow, currentCol)
      //loop through neighbors
      for(const neighbor of neighbors){
        //destructure each neighbor into [row, col]
        const [row, col] = neighbor
  
        //if matrix at row and col is not 1, skip to next loop cycle
        if(matrix[row][col] !== 1) continue
  
        //otherwise, push the 1 at matrix[row][col] into stack
        stack.push(neighbor)
      }
    }
  }
  