// Powerset

// Write a function that takes in an array of unique integers and returns 
// its powerset. The powerset P(X) of a set X is the set of all subsets of X. 
// For example, the powerset of [1,2] is [[], [1], [2], [1,2]].

// Note that the sets in the powerset do not need to be in any particular order. 

//recursive solution
//O(n*2^n) time | O(n*2^n)space
// function powerset(array, idx = null) {
//     if(idx === null){
//       idx = array.length - 1
//     }
//     if(idx < 0){
//       return [[]]
//     }
//     const el = array[idx]
//     const subsets = powerset(array, idx - 1)
//     const length = subsets.length
//     for(let i = 0; i < length; i++){
//       const currentSubset = subsets[i]
//       subsets.push(currentSubset.concat(el))
//     }
//     return subsets
//   }
  
//   // Do not edit the line below.
//   exports.powerset = powerset;

//iterative solution
//time: O(n*2^n) | space: O(n*2^n)
function powerset(array) {
    const subsets = [[]]
    for(const el of array){
      const length = subsets.length
      for(let i = 0; i < length; i++){
        const currentSubset = subsets[i]
        subsets.push(currentSubset.concat(el))
      }
    }
    return subsets
  }
  
  // Do not edit the line below.
  exports.powerset = powerset;