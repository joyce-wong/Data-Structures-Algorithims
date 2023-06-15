// Missing Numbers 

// You're given an unordered list of unique integers nums in the range [1, n]
// where n represents the length of nums + 2. This means that two numbers 
// in this range are missing from the list. 

// Write a function that takes in this list and returns a new list with
// the two missing numbers, sorted numerically. 

// function missingNumbers(nums) {
//   let result = new Set()
//   for(let i = 1; i <= nums.length + 2; i++){
//     result.add(i)
//   }
//   for(let num of nums){
//     if(result.has(num)){
//       result.delete(num)
//     }
//   }
//   return Array.from(result);
// }

//n = length of input array
//time: O(n)
//space: O(n)
function missingNumbers(nums){
    //declare includedNums as a new set with nums in it
    const includedNums = new Set(nums)
  
    //declare solution as empty array
    const solution = []
    //loop through the range between 1 and nums.length + 3
    for(let num = 1; num < nums.length + 3; num++){
      //if the includedNums set doesn't have num
      if(!includedNums.has(num)){
        //push num into solution
        solution.push(num)
      }
    }
    //return solution
    return solution
  }
  
  //n = length of input array
//time: O(n)
//space: O(1)
// function missingNumbers(nums) {
//     let total = sum(arrayFromAToB(1, nums.length + 3))
  
//     for(const num of nums){
//       total -= num
//     }
  
//     const averageMissingValue = Math.floor(total / 2)
//     let foundFirstHalf = 0
//     let foundSecondHalf = 0
//     for(const num of nums){
//       if(num <= averageMissingValue){
//         foundFirstHalf += num
//       } else {
//         foundSecondHalf += num
//       }
//     }
//     const expectedFirstHalf = sum(arrayFromAToB(1, averageMissingValue + 1))
//     const expectedSecondHalf = sum(arrayFromAToB(averageMissingValue + 1, nums.length + 3))
//     return [expectedFirstHalf - foundFirstHalf, expectedSecondHalf - foundSecondHalf]
//   }
  
//   const arrayFromAToB = (a, b) => {
//     const array = []
//     for(let num = a; num < b; num++){
//       array.push(num)
//     }
//     return array
//   }
  
//   const sum = array => array.reduce((a, b) => a + b)

  //n = length of input array
//time: O(n)
//space: O(1)
// function missingNumbers(nums) {
//     let solutionXOR = 0
//     for(let i = 0; i < nums.length + 3; i++){
//       solutionXOR ^= i
//       if(i < nums.length){
//         solutionXOR ^= nums[i]
//       }
//     }
    
//     const solution = [0, 0]
//     const setBit = solutionXOR & -solutionXOR
//     for(let i = 0; i < nums.length + 3; i++){
//       if((i & setBit) === 0){
//         solution[0] ^= i
//       } else {
//         solution[1] ^= i
//       }
  
//       if(i < nums.length){
//         if((nums[i] & setBit) === 0){
//           solution[0] ^= nums[i]
//         } else {
//           solution[1] ^= nums[i]
//         }
//       }
//     }
    
//     solution.sort((a, b) => a - b)
//     return solution
//   }
  
  // Do not edit the line below.
  exports.missingNumbers = missingNumbers;