// Min Number of Coins For Change 

// Given an array of positive integers representing coin denominations and a 
// single non-negative integer n representing a target amount of money, 
// write a function that returns the smallest number of coins needed to 
// make change for (to sum up to) that target amount using the given coin
// denominations. 

// Note that you have access to an unlimited amount of coins. In other words, 
// if the denominations are [1, 5, 10], you have access to an unlimited 
// amount of 1s, 5s, and 10s. 

// If it's impossible to make change for the target amount, return -1. 

//d = number of denoms
//n = amount of change
//time: O(nd)
//space: O(n)
function minNumberOfCoinsForChange(n, denoms) {
    //create a new array with n + 1 elements that are all Infinity
    let numOfCoins = new Array(n + 1).fill(Infinity)
    //set the 0th element of the array to be 0
    numOfCoins[0] = 0
    for(const denom of denoms){
      //loop through numOfCoins array
      for(let amount = 0; amount < numOfCoins.length; amount++){
        //if denom is less than or equal to amount
        if(denom <= amount){
          //set the numOfCoins at amount index to be
          //the minimum of numOfCoins at amount index
          //or numOfCoins[amount - denom] + 1
          numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
        }
      }
    }
    //return if numOfCoins at n index does not equal
    //Infinity, return numOfCoins[n], if it does equal 
    //Infinity, return -1
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
  }
  
  // Do not edit the line below.
  exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
  