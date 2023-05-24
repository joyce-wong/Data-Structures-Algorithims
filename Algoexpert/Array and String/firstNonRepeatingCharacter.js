// First Non-Repeating Character

// Write a function that takes in a string of lowercase English-alphabet letters
// and returns the index of the string's first non-repeating character. 

// The first non-repeating character is the first character in a string that
// occurs only once. 

// If the input string doesn't have any non-repeating characters, your function
// should return -1. 

//n = length of input string
//time: O(n)
//space: O(1)
function firstNonRepeatingCharacter(string) {
    //declare object to store character frequency
    let obj = {}
    //loop through string
    for(let char of string){
      //if the char is not already stored in obj, initialize with count of 1
      if(!obj[char]){
        obj[char] = 1
        //else increment the count
      } else {
        obj[char]++
      }
      //exit loop
    }
    //loop through string and keep track of index
    for(let i = 0; i < string.length; i++){
      let char = string[i]
      //if the char occurs once in the obj, return the index i
      if(obj[char] === 1) return i
    }
    //if all the chars have frequency of more than 1, return -1
    return -1;
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;

  //n = length of input string
//time: O(n^2)
//space: O(1)
// function firstNonRepeatingCharacter(string) {
//     //loop through string with index i
//     for(let i = 0; i < string.length; i++){
//       //declare variable foundDuplicate to be false
//     let foundDuplicate = false
//       //nested loop through entire string again with index j
//       for(let j = 0; j < string.length; j++)
//         //if the elements are the same but the indices are not,
//         //there are duplicate characters within the string
//         if(string[i] === string[j] && i !== j){
//           //set foundDuplicate to true
//           foundDuplicate = true
//         }
//       //if you didn't find a duplicate within the inner loop, return the index i
//       if(foundDuplicate === false) return i
//     }
//     //if all the characters are duplicated, return -1
//     return -1;
//   }