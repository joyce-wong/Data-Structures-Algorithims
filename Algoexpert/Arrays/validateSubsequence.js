// Validate Subsequence

// Given two non-empty arrays of integers, write a function that determines whether
// the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array.
// For instanceof, the numbers [1, 3, 4] form a subsequence of the array
// [1, 2, 3, 4 ], and so do the number [2, 4]. Note that a single number
// in an array and the array itself are both valid subsequences of the array.

//n = length of array
//time: O(n)
//space: O(1)
// function isValidSubsequence(array, sequence) {
//     //declare pointer indices for both array and sequence
//     let arrI = 0
//     let seqI = 0
//     //while loop that iterates through both array and sequence
//     while(arrI < array.length && seqI < sequence.length){
//       //if you find element in both array and sequence, increment sequence pointer
//      if(array[arrI] === sequence[seqI]) {
//        seqI++
//      }
//       //always increment array pointer in the cycle
//        arrI++
//     }
//     //if you get to the end of the sequence with the pointer with the
//     //right length , then
//     //you found all the elements in sequence in array in the correct order
//     return seqI === sequence.length
//   }

  //n = length of array
//time: O(n)
//space: O(1)
function isValidSubsequence(array, sequence) {
    //declare pointer for sequence
    let seqI = 0
    //loop through array
    for(let el of array){
      //if pointer reaches the end of sequence, break to save time
      if(seqI === sequence.length) break
      //if el is found in the sequence, increment index for sequence
      if(el === sequence[seqI]){
        seqI++
      }
    }
    //if you get to the end of sequence using the index
    //and the length of sequence is the same as the index
    //you found every element in sequence within array in the correct order
    return seqI === sequence.length
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  