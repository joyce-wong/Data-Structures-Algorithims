// Move Element To End 

// You're given an array of integers and an integer. Write a function that moves
// all instances of that integer in the array to the end of the array and returns
// the array. 

// The function should perform this in place (i.e., it should mutate the input array)
// and doesn't need to maintain the order of the other integers. 

// function moveElementToEnd(array, toMove) {
//     //declare pointer on left at beginning of array
//       let left = 0
//       //declare pointer on right at end of array
//      let right = array.length - 1
//       //while the pointers don't cross
//      while(left < right){
//        //if the element at left is toMove and the element to right, isn't
//        if(array[left] === toMove && array[right] !== toMove){
//          //swap them
//        const temp = array[left]
//        array[left] = array[right]
//        array[right] = temp
//        }
//          //else if the element to right is toMove, decrement right pointer
//        else if(array[right] === toMove){
//          right--
//        }
//          //else if element to left is not toMove, increment left pointer
//        else if(array[left] !== toMove){
//          left++
//        }
//      }
//       //return array
//       return array
//     }
    
//n = length of input array
//time: O(n)
//space: O(1)
function moveElementToEnd(array, toMove) {
    //declare left pointer at beginning
    let left = 0
    //declare right pointer at end
    let right = array.length - 1
    //while the two pointers don't cross
    while(left < right){
      //inner while the two pointers don't cross and right element is toMove
      while(left < right && array[right] === toMove){
        //decrement the right pointer
        right--
      }
      //if element to left is toMove, swap the left and right elements
      if(array[left] === toMove){
       swap(left, right, array)
      }
      //increment the left pointer with every cycle
        left++
    }
    //return array
    return array
  }
  
  function swap(i, j, array){
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;