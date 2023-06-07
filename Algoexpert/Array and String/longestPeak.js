// Longest Peak 

// Write a function that takes in an array of integers and returns the length 
// of the longest peak in the array. 

// A peak is defined as adjacent integers in the array that are strictly 
// increasing until they reach a tip(the highest value in the peak), at which
// point they become strictly decreasing. At least three integers are required to form
// a peak.

// For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't 
// and neither do the integers 1, 2, 2, 0. Similarly the integers 1, 2, 3 don't 
// form a peak because there aren't any strictly decreasing integers after the 3. 

//n = length of input array
//time: O(n)
//space: O(1)
function longestPeak(array) {
    //declare variable to track longest
    let longest = 0
    //declare i to track current index
    let i = 0
    //while loop through array
    while(i < array.length - 1){
      //declare peak, a boolean variable that detects a peak
      let peak = array[i - 1] < array[i] && array[i] > array[i + 1]
      //if not peak, increment i and continue
      if(!peak){
        i++
        continue
      }
      //if there is a peak, calculate leftIdx and 
      //decrement it as long as it's more than or equal to 0 and 
      //the elements to the left are decreasing
      let leftIdx = i - 2
      while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]){
        leftIdx--
      }
      //if there is a peak, calculate leftIdx and increment it 
      //as long as it's less than array.length and 
      //the elements to the right are increasing
      let rightIdx = i + 2
      while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
        rightIdx++
      }
      //calculate the length of the streak by subtracting leftIdx from rightIdx 
      //and then subtracting 1
      let streak = rightIdx - leftIdx - 1
      //if streak is greater than longest, set longest to streak
      longest = Math.max(longest, streak)
      //set i to rightIdx for the next iteration of the loop
      //to skip over the current peak
      i = rightIdx
    }
    //return length of longest peak
    return longest
  }
  
  // Do not edit the line below.
  exports.longestPeak = longestPeak;
  