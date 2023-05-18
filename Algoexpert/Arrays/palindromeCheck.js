// Palindrome Check 

// Write a function that takes in a non-empty string and that returns a boolean 
// representing whether the string is a palindrome. 

// A palindrome is defined as a string that's written the same forward and 
// backward. Note that single-character strings are palindromes. 


//iterative solution 1
//time: O(n)
//space: O(n)
// function isPalindrome(string) {
//     //initialize variable with empty array to track reversed string
//     let str2 = []
//     //loop through string backwards
//     for(let j = string.length - 1; j >= 0; j--){
//       //push each character into the array in reverse
//       str2.push(string[j])
//     }
//     //check if original string is the same as reversed array joined
//     return string === str2.join('')
//   }

  //recursive solution
//time: O(n)
//space: O(n)
//add second parameter i to represent index initialized as 0
// function isPalindrome(string, i = 0) {
//     //declare second pointer to track end of string index
//     let j = string.length - 1 - i
//     //if i is still more than or equal to j, return true
//     //otherwise return whether or not the characters
//     //are equal at each index, and the recursive case that shrinks
//     //the array inwards with each call
//     return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1)
//   }

  //iterative solution 2 with optimum space
function isPalindrome(string) {
    //declare left pointer index at beginning of string 
    let left = 0
    //declare right pointer index at end of string
    let right = string.length - 1
    //while loop that moves both pointers toward center of string
    while (left <= right){
      //if the characters at each index are not the same return false
      if(string[left] !== string[right]) return false
      left++
      right--
    }
    //if you get to the middle and all characters each i and j index
    // are the same, return true
    return true
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;