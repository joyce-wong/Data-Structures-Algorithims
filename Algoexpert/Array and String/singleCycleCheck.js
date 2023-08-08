// Single Cycle Check

// You're given an array of integers where each integer represents a jump of 
// its value in the array. For instance, the integer 2 represents a jump of 
// two indices forward in the array; the integer -3 represents a jump of three 
// indices backward in the array. 

// If a jump spills past the array's bounds, it wraps over to the other side. 
// For instance, a jump of -1 at index 0 brings us to the last index in the array. 
// Similarly a jump of 1 at the last index in the array brings us to index 0. 

// Write a function that returns a boolean representing whether the jumps 
// in the array form a single cycle. A single cycle occurs if, starting
// at any index in the array and following the jumps, every element 
// in the array is visited exactly once before landing back on the 
// starting index. 

//n = length of input array
//time: O(n)
//space: O(1)
function hasSingleCycle(array) {
    //initialize numElementsVisited to 0 
    let numElementsVisited = 0
    let currentIdx = 0
  
    //while numElementsVisited is less than the length of the array
    while(numElementsVisited < array.length){
      //if the numElementsVisited is more than 0 and the currentIdx is 0,
      if(numElementsVisited > 0 && currentIdx === 0){
        //return false
        return false
      }
      //add 1 to the numElementsVisited each time in loop
      numElementsVisited += 1
      //set the currentIdx to getNextIdx(currentIdx, array)
      currentIdx = getNextIdx(currentIdx, array)
    }
    //return a boolean of whether the currentIdx is 0 
    return currentIdx === 0
  }
  
  //helper function that gets the next index
  function getNextIdx(currentIdx, array){
    //declare jump to be the array at currentIdx
    let jump = array[currentIdx]
    //declare the nextIdx to be the remainder of currentIdx + jump divided by array length
    let nextIdx = (currentIdx + jump) % array.length
    //return ternary of if nextIdx is more than or equal to 0, the nextIdx
    //if not, return nextIdx + array.length
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length
  }
  
  // Do not edit the line below.
  exports.hasSingleCycle = hasSingleCycle;
  