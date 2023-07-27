// Levenshtein Distance

// Write a function that takes in two strings and returns the minimum number 
// of edit operations that need to be performed on the first string to 
// obtain the second string. 

// There are three edit operations: insertion of a character, deletion of a 
// character, and substitution of a character for another. 

//n = length of str1
//m = length of str2
//time: O(nm)
//space: O(nm)
// function levenshteinDistance(str1, str2) {
//     //create a 2D matrix
//     const edits = []
//     //loop through str2
//     for(let i = 0; i < str2.length + 1; i++){
//       //create row subarray
//       const row = []
//       //loop through str1
//       for(let j = 0; j < str1.length + 1; j++){
//         //push j index into each row
//         row.push(j)
//       }
//       //set the 0th element in each row to i index
//       row[0] = i
//       //push row into edits
//       edits.push(row)
//     }
//     //loop through str2
//     for(let i = 1; i < str2.length + 1; i++){
//       //loop through str1
//       for(let j = 1; j < str1.length + 1; j++){
//         //if str2 at i - 1 index equals str1 at j - 1 index
//         if(str2[i - 1] === str1[j - 1]){
//           //set edits[i][j] to be equal to edits[i - 1][j - 1]
//           edits[i][j] = edits[i - 1][j - 1]
//           //otherwise
//         } else {
//           //set edits[i][j] to be equal to 1 + the minimum of either
//           //edits[i - 1][j - 1], edits[i - 1][j], or edits[i][j - 1]
//           edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1])
//         }
//       }
//     }
//     //exit all loops and return edits[str2.length][str1.length]
//     return edits[str2.length][str1.length]
//   }

  //n = length of str1
//m = length of str2
//time: O(nm)
//space: O(min(n, m))
function levenshteinDistance(str1, str2) {
    //if str1 is shorter than str2, small is str1, otherwise it's str2
    const small = str1.length < str2.length ? str1 : str2
    //if str1 is longer than or equal in length to str2, big is str1, otherwise it's str2
    const big = str1.length >= str2.length ? str1 : str2
    //create evenEdits array 
    const evenEdits = []
    //create oddEdits as array of length small length + 1
    const oddEdits = new Array(small.length + 1)
    //loop through small length + 1
    for(let j = 0; j < small.length + 1; j++){
      //push j index into evenEdits
      evenEdits.push(j)
    }
    //loop through big length + 1
    for(let i = 1; i < big.length + 1; i++){
      //declare currentEdits and previousEdits variables
      let currentEdits, previousEdits
      //if i is odd
      if(i % 2 === 1){
        //set currentEdits to oddEdits
        currentEdits = oddEdits
        //set previousEdits to evenEdits
        previousEdits = evenEdits
        //otherwise
      } else {
        //set currentEdits to evenEdits
        currentEdits = evenEdits
        //set previousEdits to oddEdits
        previousEdits = oddEdits
      }
      //set the 0th element of currentEdits to i index
      currentEdits[0] = i
      //loop through small length + 1
      for(let j = 1; j < small.length + 1; j++){
        //if big[i - 1] equals small[j - 1]
        if(big[i - 1] === small[j - 1]){
          //set currentEdits[j] to equal previousEdits at j - 1
          currentEdits[j] = previousEdits[j - 1]
          //otherwise
        } else {
          //set currentEdits at j to equal 1 plus the minimum of 
          //previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]
          currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1])
        }
      }
    }
    //if the length of big is even return evenEdits[small.length]
    //otherwise return oddEdits[small.length]
    return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length]
  }
  
  // Do not edit the line below.
  exports.levenshteinDistance = levenshteinDistance;
  
  