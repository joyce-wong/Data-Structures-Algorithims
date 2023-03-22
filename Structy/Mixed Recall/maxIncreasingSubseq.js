// max increasing subseq
// Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument. The function should return the length of the longest subsequence of strictly increasing numbers.

// A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.

test_00:
const numbers = [4, 18, 20, 10, 12, 15, 19];
maxIncreasingSubseq(numbers); // -> 5
test_01:
const numbers = [12, 9, 2, 5, 4, 32, 90, 20];
maxIncreasingSubseq(numbers); // -> 4
test_02:
const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 70];
maxIncreasingSubseq(numbers); // -> 5
test_03:
const numbers = [7, 14, 10, 12];
maxIncreasingSubseq(numbers); // -> 3
test_04:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
maxIncreasingSubseq(numbers); // -> 21
test_05:
const numbers = [
  1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,
  104,
];
maxIncreasingSubseq(numbers); // -> 23
test_06:
const numbers = [
  1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16,
  17, 18, 19, 20, 21, 100,101 ,102, 103, 104, 105
];
maxIncreasingSubseq(numbers); // -> 27

//n = length of array
//time = O(n ^ 2)
//space = O(n ^ 2)
const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo = {}) => {
  const key = i + ',' + previous
  if(key in memo) return memo[key]
  
  if(i === numbers.length) return 0
  

  const options = []
   const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo)
    options.push(dontTakeCurrent)
  
  const current = numbers[i]
  if(current > previous){
    //replace previous parameter with current as new argument
     const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo)
      options.push(takeCurrent)
  }
   
  //need to spread out options array here
  memo[key] = Math.max(...options)
  return memo[key]
};

module.exports = {
  maxIncreasingSubseq,
};
