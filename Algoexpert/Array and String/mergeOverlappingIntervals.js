// Merge Overlapping Intervals

// Write a function that takes in a non-empty array of arbitrary intervals, 
// merges any overlapping intervals, and returns the new intervals in no
// particular order. 

// Each interval is an array of two integers with interval[0] as the start of the 
// interval and interval[1] as the end of the interval. 

// Note that back-to-back intervals aren't considered to be overlapping.
// For example, [1, 5] and [6, 7] aren't overlapping; however [1, 6] and
// [6, 7] are indeed overlapping.

// Also note that the start of any particular interval will always be less than
// or equal to the end of that interval. 

//n = length of input array
//time: O(nlog(n))
//space: O(n)
function mergeOverlappingIntervals(array) {
    //sort the input array in place by the 0th element in each subarray
    const sortedIntervals = array.sort((a, b) => a[0] - b[0])
  
    //declare output array
    const mergedIntervals = []
    //declare current interval as 0th subarray in sortedIntervals
    let currentInterval = sortedIntervals[0]
    //push the currentInterval into mergedIntervals result array
    mergedIntervals.push(currentInterval)
  
    //loop through the subarrays in sortedIntervals
    for(const nextInterval of sortedIntervals){
      //destructure each currentInterval
      const [_, currentIntervalEnd] = currentInterval
      //destructure each nextInterval
      const [nextIntervalStart, nextIntervalEnd] = nextInterval
  
      //if the currentIntervalEnd is more than or equal to nextIntervalStart
      if(currentIntervalEnd >= nextIntervalStart){
        //set the element at end index of currentInterval to the
        //greater of currentIntervalEnd or nextIntervalEnd
        currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
      } else {
        //otherwise
        //set currentInterval to nextInterval
        currentInterval = nextInterval
        //push the currentInterval into mergedIntervals
        mergedIntervals.push(currentInterval)
      }
    }
    //return mergedIntervals result array
    return mergedIntervals
  }
  
  
  // Do not edit the line below.
  exports.mergeOverlappingIntervals = mergeOverlappingIntervals;