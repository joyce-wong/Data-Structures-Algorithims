// Transpose Matrix 

// You're given a 2D array of integers matrix. Write a function that returns
// the transpose of the matrix. The transpose of a matrix is a flipped 
// version of the original matrix across its main diagonal(which runs from top-left 
//     to bottom-right); it switches the row and column indices of the original matrix. 

//     You can assume the input matrix always has at least 1 value; 
//     however its width and height are not necessarily the same. 

//w = width of matrix
//h = height of matrix
//time: O(w * h)
//space: O(w * h)
function transposeMatrix(matrix) {
    //declare result array
    let result = []
    //loop through columns
    for(let j = 0; j < matrix[0].length; j++){
      let row = []
      //loop through rows
      for(let i = 0; i < matrix.length; i++){
        //push the element into the row for result reversing the 
        //index for the row and column
        row.push(matrix[i][j])
      }
      //push the row into the result
      result.push(row)
    }
    //return result
    return result
  }
  
  // Do not edit the line below.
  exports.transposeMatrix = transposeMatrix;