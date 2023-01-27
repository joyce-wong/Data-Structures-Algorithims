// sum possible
// Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.

test_00:
sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
test_01:
sumPossible(15, [6, 2, 10, 19]); // -> false
test_02:
sumPossible(13, [6, 2, 1]); // -> true
test_03:
sumPossible(103, [6, 20, 1]); // -> true
test_04:
sumPossible(12, []); // -> false
test_05:
sumPossible(12, [12]); // -> true
test_06:
sumPossible(0, []); // -> true
test_07:
sumPossible(271, [10, 8, 265, 24]); // -> false
test_08:
sumPossible(2017, [4, 2, 10]); // -> false
test_09:
sumPossible(13, [3, 5]); // -> true

//recursive without memoization times out
// const sumPossible = (amount, numbers) => {
//   if(amount === 0) return true
//   if(amount < 0) return false
//   for(let n of numbers){
//       if(sumPossible(amount - n, numbers) === true) {
//         return true
//       }
//     }
//   return false
// };

//dynamic programming with memoization
//a = amount
//n = length of numbers
// time O(a*n)
//space O(a)
const sumPossible = (amount, numbers, memo={}) => {
    if(amount in memo) return memo[amount]
    if(amount === 0) return true
    if(amount < 0) return false
    for(let n of numbers){
      if(sumPossible(amount - n, numbers, memo) === true){
        memo[amount] = true
        return true
      }
    }
    memo[amount] = false
    return false
  }
  
  module.exports = {
    sumPossible,
  };
  