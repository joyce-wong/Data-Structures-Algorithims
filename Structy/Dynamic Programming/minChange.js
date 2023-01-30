// min change
// Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

test_00:
minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
test_01:
minChange(13, [1, 9, 5, 14, 30]); // -> 5
test_02:
minChange(23, [2, 5, 7]); // -> 4
test_03:
minChange(102, [1, 5, 10, 25]); // -> 6
test_04:
minChange(200, [1, 5, 10, 25]); // -> 8
test_05:
minChange(2017, [4, 2, 10]); // -> -1
test_06:
minChange(271, [10, 8, 265, 24]); // -> -1
test_07:
minChange(0, [4, 2, 10]); // -> 0
test_08:
minChange(0, []); // -> 0

//a = amount
//c = number of coins
// time O(a * c)
//space O(a)
const minChange = (amount, coins) => {
    const answer = minChangeHelper(amount, coins)
    if(answer === Infinity) return -1
    return answer
  }
  
  const minChangeHelper = (amount, coins, memo ={}) => {
    if(amount in memo) return memo[amount]
    if(amount === 0) return 0
    if(amount < 0) return Infinity
    let minTimes = Infinity
    for(let coin of coins){
      const minCoins = 1 + minChangeHelper(amount - coin, coins, memo)
      minTimes = Math.min(minCoins, minTimes)
      }
    memo[amount] = minTimes
    return minTimes
  };
  
  module.exports = {
    minChange,
  };
  