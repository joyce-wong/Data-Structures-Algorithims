// Number Of Ways To Traverse Graph

// You're given two positive integers representing the width and height of a
// grid-shaped, rectangular graph. Write a function that returns the
// number of ways to reach the bottom right corner of the graph when 
// starting at the top left corner. Each move you take must either 
// go down or right. In other words, you can never move up or left in the 
// graph. 

// For example, given the graph illustrated below, with width = 2 and 
// height = 3, there are three ways to reach the bottom right corner 
// when starting at the top left corner. 

// //recursive solution
// //n = width of the graph
// //m = height of the graph
// //time: O(2^(n+m))
// //space: O(n + m)
// function numberOfWaysToTraverseGraph(width, height) {
//     //base case 
//     //if width or height is 1, return 1
//    if(width === 1 || height === 1) return 1
  
//     //recursive case
//     //return recursive case on width - 1, height + recursive case on width, height - 1
//     return(
//       numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1)
//     )
//   }

//n = width of graph
//m = height of graph
//time: O(n * m)
//space: O(n * m)
// function numberOfWaysToTraverseGraph(width, height) {
//     //declare numberOfWays variable as empty array
//     const numberOfWays = []
//     //loop through height + 1
//     for(let i = 0; i < height + 1; i++){
//       //push empty row array into numberOfWays at each index
//       numberOfWays.push([])
//       //loop through width + 1
//       for(let j = 0; j < width + 1; j++){
//         //push 0 into numberOfWays at i index
//         numberOfWays[i].push(0)
//       }
//     }
//   //exit nested loop
//     //for loop through width + 1
//     for(let widthIdx = 1; widthIdx < width + 1; widthIdx++){
//       //nested for loop through height + 1
//       for(let heightIdx = 1; heightIdx < height + 1; heightIdx++){
//         //if widthIdx is 1 or heightIdx is 1, set
//         if(widthIdx === 1 || heightIdx === 1){
//           //numberOfWays[heightIdx][widthIdx] to 1
//           numberOfWays[heightIdx][widthIdx] = 1
//           //otherwise
//         } else {
//           //set waysLeft to numberOfWays at heightIdx at widthIdx - 1
//           const waysLeft = numberOfWays[heightIdx][widthIdx - 1]
//           //set waysUp to numberOfWays at heightIdx - 1 at widthIdx
//           const waysUp = numberOfWays[heightIdx - 1][widthIdx]
//           //set numberOfWays to heightIdx at widthIdx to waysLeft + waysUp
//           numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp
//         }
//       }
//     }
//     //return numberOfWays[height][width]
//     return numberOfWays[height][width];
//   }

//n = width of the graph
//m = height of the graph
//time: O(n + m)
//space: O(1)
function numberOfWaysToTraverseGraph(width, height) {
    //set xDistanceToCorner to equal width - 1
    const xDistanceToCorner = width - 1
    //set yDistanceToCorner to equal height - 1
    const yDistanceToCorner = height - 1
  
    //The number of permutations of right and down movements is the
    //number of ways to reach the bottom right corner
  
    //set numerator to equal factorial(xDistanceToCorner + yDistanceToCorner)
    const numerator = factorial(xDistanceToCorner + yDistanceToCorner)
    //set denominator to equal factorial(xDistanceToCorner) * factorial(yDistanceToCorner)
    const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner)
    //return ( numerator divided by denominator ) rounded down
    return Math.floor(numerator/denominator)
  }
  
  //helper function that returns the factorial of a number
  function factorial(num){
    //let result equal 1
    let result = 1
  
    //loop through n + 1 starting from n = 2
    for(let n = 2; n < num + 1; n++){
      //multiply the result by n each time
      result *= n
    }
    //return result
    return result 
  }
  
  // Do not edit the line below.
  exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
  
  
  