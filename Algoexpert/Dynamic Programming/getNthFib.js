// Nth Fibonacci

// The Fibonacci sequence is defined as follows: the first number of the sequence 
// is 0, the second number is 1, and the nth number is the sum of the (n-1)th
// and (n-2)th numbers. Write a function that takes in an integer n and returns
// the nth Fibonacci number.

// Important note: the Fibonacci sequence is often defined with its first two 
// numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first 
// Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2)
// is equal to F1, etc... 

//recursive solution with memoization
//n = input number
//time: O(n)
//space: O(n)
// function getNthFib(n, memo = {}) {
//     //if n is in memo, return the value at n
//     if(n in memo) return memo[n]
//     //base cases in this problem
//     if(n === 2) {
//       return 1
//     } else if (n === 1){
//       return 0
//     } 
//       //else store the recursive calls in the memo and return the memo[n]
//     else {
//     memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo)
//      return memo[n]
//       }
//     }

//n = input number
//time: O(n)
//space: O(1)
function getNthFib(n) {
    //initialize array with first two fibonacci values
    let lastTwo = [0, 1]
    //intialize counter as three because you have already stored
    //the first two fibonacci values
    let counter = 3
    //while loop until counter is less than or equal to n
    while(counter <= n){
      //store the two values in the array into a temp variable
      const nextFib = lastTwo[0] + lastTwo[1]
      //get rid of 0th element of the array and replace it with element at 1 index
      lastTwo[0] = lastTwo[1]
      //replace the element at 1 with the sum of the previous two elements in the array
      lastTwo[1] = nextFib
      //increment the counter
      counter++
    }
    //if n is more than 1, return the element at the 1 index
    //if n is 0 or 1, return the element at the 0 index
    return n > 1 ? lastTwo[1] : lastTwo[0]
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;