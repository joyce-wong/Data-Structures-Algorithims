// Smallest Difference

// Write a function that takes in two non-empty array of integers, finds the
// pair of numbers(one from each array) whose absolute difference is closest 
// to zero, and returns an array containing these two numbers, with the
// number from the first array in the first position. 

// Note that the absolute difference of two integers is the distance between them 
// on the real number line. For example, the absolute difference of -5 and 5
// is 10 and the absolute difference of -5 and -4 is 1. 

// You can assume that there will only be one pair of numbers with the smallest 
// difference. 

// function smallestDifference(arrayOne, arrayTwo) {
//     //declare smallest variable as Infinity
//     let smallest = Infinity
//     //declare output array
//     let output = []
//     //loop through arrayOne
//     for(let i = 0; i < arrayOne.length; i++){
//       let elOne = arrayOne[i]
//       //loop through arrayTwo
//       for(let j = 0; j < arrayTwo.length; j++){
//         let elTwo = arrayTwo[j]
//         //let difference be absolute value between the two elements
//         let difference = Math.abs(elOne - elTwo)
//         //if difference is less than smallest
//         if(difference < smallest) {
//           //replace smallest with difference
//           smallest = difference
//           //update output
//           output = [elOne, elTwo]
//         }
//       }
//     }
//     //return output
//     return output
//   }

//n = number of elements in arrayOne
//m = number of elements in arrayTwo
//time: O(nlog(n) + mlog(m))
//space: O(1)
function smallestDifference(arrayOne, arrayTwo) {
    //sort both arrays in ascending order
    arrayOne = arrayOne.sort((a, b) => a - b)
    arrayTwo = arrayTwo.sort((a, b) => a - b)
    //declare two index pointers at beginning of arrays
    let i = 0
    let j = 0
    //declare smallest variable and difference variable as Infinity
    let smallest = Infinity
    let difference = Infinity
    //declare output array
    let output = []
    //while loop before end of both arrays
    while(i < arrayOne.length && j < arrayTwo.length ){
      //track the elements within the array
      let firstNum = arrayOne[i]
      let secondNum = arrayTwo[j]
      //difference is absolue value between firstNum and secondNum
    difference = Math.abs(firstNum - secondNum)
      //if firstNum is less, increment i
      if(firstNum < secondNum){
        i++
      }
        //else if secondNum is less, increment j
      else if(secondNum < firstNum){
        j++
      }
        //else return the pair of numbers if they are equal in value
      else{
        return [firstNum, secondNum]
      }
      //furthermore if smallest is more than difference
      if(smallest > difference){
        //replace smallest with difference
        smallest = difference
        //and update output
        output = [firstNum, secondNum]
      }
    }
    //return output array
    return output
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;
  