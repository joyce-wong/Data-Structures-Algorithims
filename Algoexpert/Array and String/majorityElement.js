// Majority Element 

// Write a function that takes in a non-empty, unordered array of positive integers and 
// returns the array's majority element without sorting the array and without using
// more than constant space. 

// An array's majority element is an element of the array that appears in over
// half of its indices. Note that the most common element of an array 
// (the element that appears the most times in the array) isn't necessarily
// the array's majority element; for example, the arrays [3, 2, 2, 1] and 
// [3, 4, 2, 2, 1] both have 2 as their most common element, yet neither of
// these arrays have a majority element, because neither 2 nor any other element
// appears in over half of the respective arrays' indices. 

// You can assume that the input array will always have a majority element. 

//time: O(n)
//space: O(n)
//not an acceptable answer because it's not in O(1) space
// function majorityElement(array) {
//     let obj = {}
//     let most = 0
//     for(let i = 0; i < array.length; i++){
//       let n = array[i]
//       if(!(obj[n])){
//         obj[n] = 1
//       } else {
//         obj[n]++
//       }
//     }
//      most = Math.max(...Object.values(obj))
//     for(let n in obj){
//       if(obj[n] === most && most > array.length/2) return Number(n)
//     }
//     return -1
//   }
  
//n = number of elements in array
//time: O()
//space: O(1)
function majorityElement(array) {
    //declare count as 0
    let count = 0
    //declare answer
    let answer
  
    //loop over n of array
    for(let n of array){
      //if count is 0, set answer to n
      if(count === 0) answer = n
      //if n is the answer, increment count
      if(n === answer){
        count++
        //otherwise decrement count
      } else {
        count--
      }
    }
    //return answer
    return answer
  }

  //n = number of elements in array
//time: O(n)
//space: O(1)
// function majorityElement(array) {
//     let answer = 0
  
//     for(let currentBit = 0; currentBit < 32; currentBit++){
//         const currentBitValue = 1 << currentBit
//         let onesCount = 0
  
//       for(const num of array){
//         if((num & currentBitValue) !== 0) onesCount++
//       }
//       if(onesCount > array.length / 2) answer += currentBitValue
//     }
//     return answer
//   }
  
  // Do not edit the line below.
  exports.majorityElement = majorityElement;