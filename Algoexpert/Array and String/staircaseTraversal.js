//Staircase Traversal

// You're given two positive integers representing the height of a staircase and
// the maximum number of steps that you can advance up the staircase at a time. 
// Write a function that returns the number of ways in which you can climb 
// the staircase. 

// For example, if you were given a staircase of height = 3 and maxSteps = 2 
// you could climb the staircase in 3 ways. You could take 1 step, then 1 step, 
// you could also take 1 step, then 2 steps, and you could take 2 steps, then 1
// step. 

// Note that maxSteps <= height will always be true. 

//n = height of staircase, k = number of allowed steps
//time: O(n*k)
//space: O(n)
// function staircaseTraversal(height, maxSteps) {
//     return numberOfWaysToTop(height, maxSteps, {0: 1, 1:1})
//   }
  
//   function numberOfWaysToTop(height, maxSteps, memoize){
//     if(height in memoize) return memoize[height]
  
//     let numberOfWays = 0
//     for(let step = 1; step < Math.min(maxSteps, height) + 1; step++){
//       numberOfWays += numberOfWaysToTop(height - step, maxSteps, memoize)
//     }
//     memoize[height] = numberOfWays
//     return numberOfWays
//   }
  
//   // Do not edit the line below.
//   exports.staircaseTraversal = staircaseTraversal;

//n = height of staircase, k = number of allowed steps
//time: O(n*k)
//space: O(n)
// function staircaseTraversal(height, maxSteps) {
//     const waysToTop = new Array(height + 1).fill(0)
//      waysToTop[0] = 1
//      waysToTop[1] = 1
   
//      for(let currentHeight = 2; currentHeight < height + 1; currentHeight++){
//        let step = 1
//        while(step <= maxSteps && step <= currentHeight){
//          waysToTop[currentHeight] = waysToTop[currentHeight] + waysToTop[currentHeight - step]
//          step++
//        }
//      }
//      return waysToTop[height]
//    }
   
   
   
//    // Do not edit the line below.
//    exports.staircaseTraversal = staircaseTraversal;

//n = height of staircase
//time: O(n)
//space: O(n)
function staircaseTraversal(height, maxSteps) {
    let currentNumberOfWays = 0
    const waysToTop = [1]
  
    for(let currentHeight = 1; currentHeight < height + 1; currentHeight++){
      const startOfWindow = currentHeight - maxSteps - 1
      const endOfWindow = currentHeight - 1
      if(startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow]
  
      currentNumberOfWays += waysToTop[endOfWindow]
      waysToTop.push(currentNumberOfWays)
    }
    return waysToTop[height]
  }
  
  // Do not edit the line below.
  exports.staircaseTraversal = staircaseTraversal;
  