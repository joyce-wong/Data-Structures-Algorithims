// is prime
// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

// test_00:
isPrime(2); // -> true
// test_01:
isPrime(3); // -> true
// test_02:
isPrime(4); // -> false
// test_03:
isPrime(5); // -> true
// test_04:
isPrime(6); // -> false
// test_05:
isPrime(7); // -> true
// test_06:
isPrime(8); // -> false
// test_07:
isPrime(25); // -> false
// test_08:
isPrime(31); // -> true
// test_09:
isPrime(2017); // -> true
// test_10:
isPrime(2048); // -> false
// test_11:
isPrime(1); // -> false
// test_12:
isPrime(713); // -> false

/*const isPrime = (n) => {
  // todo
  //brute force
  //for loop that starts at 2 and goes up to the number and stops before the number
  //skip the number (continue)
  //check if n is divisible by 2, 3, 4, 5, 6, 7, 8, 9, 10
  //if it is return false
  //if it is not return true
  if(n === 1) return false
  for(let i = 2; i < n; i++ ){
    if(i === n){
      continue
    }
    if(n % i === 0){
      return false
    }
  }
  return true
};*/

//optimizing by stopping at the square root of n
//instead of iterating all the way through
//time O(square_root(n)) O(1)space
const isPrime = (n) => {
    if(n === 1) return false
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(i === n){
        continue
      }
      if(n % i === 0){
        return false
      }
    }
    return true
  }
  
  module.exports = {
    isPrime,
  };