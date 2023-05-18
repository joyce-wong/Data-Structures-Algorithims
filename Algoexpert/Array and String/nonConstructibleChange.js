// Non-Constructible Change

// Given an array of positive integers representing the values
// of coins in your possession, write a function that returns
// the minimum amount of change(the minimum sum of money) that
// you cannot create. The given coins can have any positive integer
// value and aren't neccessarily unique(i.e., you can have
//     multiple coins of the same value).

//     For example, if you're given coins = [1, 2, 5], the minimum
// amount of change that you can't create is 4. If you're given no coins,
// the minimum amount of change that you can't create is 1.

//n = number of coins
//time: O(nlogn)
//space: O(1)
function nonConstructibleChange(coins) {
    //if coins is an empty array, return 1
    if(coins.length === 0) return 1
    //sort the array of coins by value
    coins = coins.sort((a, b) => a - b)
    //declare variable currentChange as 0
    let currentChange = 0
    //loop through ascending coins array in ascending order
    for(let i = 0; i < coins.length; i++){
      let coin = coins[i]
      //if the coin is more than the currentChange + 1, return currentChange and add 1
      if(coin > currentChange + 1){
        return currentChange + 1
      } else {
        //otherwise, increment currentChange by coin amount
        currentChange += coin
      }
    }
    //the min amount of change you can't make will be one more
    //than the maximum amount of change you can make
    return currentChange + 1
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  