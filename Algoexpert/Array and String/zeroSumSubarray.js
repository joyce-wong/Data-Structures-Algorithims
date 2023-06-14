// Zero Sum Subarray

// You're given a list of integers nums. Write a function that returns a boolean
// representing whether there exists a zero-sum subarray of nums. 

// A zero-sum subarray is any subarray where all of the values add up to zero. 
// A subarray is any contiguous section of the array. For the purposes of this 
// problem, a subarray can be as small as one element and as long as the
// original array. 

//n = length of nums
//time: O(n)
//space: O(n)
function zeroSumSubarray(nums) {
    //if nums is empty array, return false
    if (nums.length === 0) return false
    //initalize sum as 0
    let sum = 0
    //initailize tracker as a new Set with subarray of 0 in it
    let tracker = new Set([0])
    //for loop through nums
    for(let i = 0; i < nums.length; i++){
      let num = nums[i]
      //add each num to the sum
      sum += num
      //if the tracker doesn't have sum, add sum to the tracker
      if(!tracker.has(sum)){
        tracker.add(sum)
        //otherwise, return true
  } else {
        return true
  }
    }
    //return false
    return false
  }
  
  // Do not edit the line below.
  exports.zeroSumSubarray = zeroSumSubarray;