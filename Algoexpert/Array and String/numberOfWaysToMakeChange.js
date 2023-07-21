// Number of Ways to Make Change 

// Given an array of distinct positive integers representing coin 
// denominations and a single non-negative integer n representing a
// target amount of money, write a function that returns the number of ways 
// to make change for that target amount using the given coin
// denominations. 

// Note that an unlimited amount of coins is at your disposal. 

//n = input parameter that represents the amount you are trying to make
//d = ?
//time: O(nd)
//space
function numberOfWaysToMakeChange(n, denoms) {
    //declare ways to be a new array of length n + 1, filled with 0s
    const ways = new Array(n + 1).fill(0)
    //set the element at 0 index of ways to be 1
    ways[0] = 1
    //loop through denoms array
    for(let denom of denoms){
      for(let amount = 1; amount < n + 1; amount++){
        //starting at 1 index until n
        //if denom is less than or equal to amount
        if(denom <= amount){
          //add ways[amount - denom] to ways[amount]
          ways[amount] += ways[amount - denom]
        }
      }
    }
    //then return ways[n] to represent the 
    //number of ways to make change to total to n
    return ways[n]
  }
  
  // Do not edit the line below.
  exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;