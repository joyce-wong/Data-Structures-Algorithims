// Spiral Traverse

// Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n==m)
// and returns a one-dimensional array of all the array's elements in spiral order. 

// Spiral order starts at the top left corner of the two-dimensional array, goes to 
// the right, and proceeds in a spiral pattern all the way until every element has been visited. 

//n = total number of elements in the array
//time: O(n)
//space: O(n)
//iterative solution
function spiralTraverse(array) {
    //declare result array, startRow, endRow, startCol, endCol variables
    let result = []
    let startRow = 0
    let endRow = array.length - 1
    let startCol = 0
    let endCol = array[0].length - 1
  
    //while loop when startRow is less than or equal to endRow
    //and startCol is less than or equal to endCol
    while(startRow <= endRow && startCol <= endCol){
      //for loop through columns
      for(let col = startCol; col <= endCol; col++){
        //push the top row into the result
        result.push(array[startRow][col])
      }
  
      //for loop through the rows
      for(let row = startRow + 1; row <= endRow; row++){
        //push the right column in to the result
        result.push(array[row][endCol])
      }
  
      //for loop through the next to last column and go left
      for(let col = endCol - 1; col >= startCol; col--){
        //handle edge case for single row in the middle of the matrix
        //don't double count the values in this row which we've already 
        //counted in for loop above
        if(startRow === endRow) break
        //push the bottom row into the result from right to left
        result.push(array[endRow][col])
      }
  
      //for loop through the next to last row and go up
      for(let row = endRow - 1; row > startRow; row--){
        //handle the edge case when there's a single column
        //in the middle of the matrix. In this case, we don't
        //want to double-count the values in this column, which
        //we've already counted in the second for loop above.
        if(startCol === endCol) break
        //push the next to last column into the result from bottom to top
          result.push(array[row][startCol])
      }
      //increment startRow, decrement endRow, increment startCol, decrement endCol 
      startRow++
      endRow--
      startCol++
      endCol--
    }
    //return result
    return result
  }

  //recursive solution
//n = total number of elements in the array
//time: O(n)
//space: O(n)
// function spiralTraverse(array) {
//     //declare result variable as empty array
//     const result = []
//     //call helper function spiralFill with the arguments below
//     spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result)
//     //return result
//     return result 
//   }
  
//   //helper function that fills result recursively
//   function spiralFill(array, startRow, endRow, startCol, endCol, result){
//     //if startRow is more than endRow or startCol is more than endCol, return
//     if(startRow > endRow || startCol > endCol) return
  
//     //for loop through the top row of the array
//     for(let col = startCol; col <= endCol; col++){
//       //push in top row of the array into result from left to right
//       result.push(array[startRow][col])
//     }
  
//     //for loop through the last column of the array
//     for(let row = startRow + 1; row <= endRow; row++){
//       //push in the last column of the array into result from top to bottom
//       result.push(array[row][endCol])
//     }
  
//     //for loop through the next to last row from right to left
//     for(let col = endCol - 1; col >= startCol; col--){
//       //handle the edge case when there's a single row in the middle of the matrix
//       //don't double-count the values in this row which we've counted in first
//       //for loop above
//       if(startRow === endRow) break
//       //push the next to last row of the array into result from right to left
//       result.push(array[endRow][col])
//     }
  
//     //for loop through the second column of the array from bottom to top
//     for(let row = endRow -1; row >= startRow + 1; row--){
//       //handle the edge case when there's a single column in the middle
//       //of the matrix
//       //don't double-count the values in this column
//       if(startCol === endCol) break
//       //push the second column of the array from bottom to top into the result
//       result.push(array[row][startCol])
//     }
  
//     //recursive case, increment startRow, decrement endRow, increment startCol,
//     //decrement endCol
//     spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol -1, result)
//   }
  
  
  // Do not edit the line below.
  exports.spiralTraverse = spiralTraverse;