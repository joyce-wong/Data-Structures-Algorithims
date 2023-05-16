// Selection Sort 

// Write a function that takes in an array of integers and returns a sorted 
// version of that array. Use the Selection Sort algorithm to sort the array. 

// If you're unfamilar with Selection Sort, we recommend watching the 
// Conceptual Overview section of this question's video explanation
// before starting to code. 

//n = number of elements in array
//time: O(n^2)
//space: O(1)
function selectionSort(array) {
    //initialize currentIdx variable as 0
    let currentIdx = 0
    //while currentIdx is less than last index
    //at which point array would be sorted
    while(currentIdx < array.length - 1){
      //initialize smallestIdx as currentIdx
      let smallestIdx = currentIdx
      //for loop through array initializing i as the index to the right of
      //currentIdx
      for(let i = currentIdx + 1; i < array.length; i++){
        //if the element at smallestIdx is more than the element at i,
        //set the smallestIdx to i
        if(array[smallestIdx] > array[i]) smallestIdx = i
      }
      //then swap the elements at the currentIdx and smallestIdx
          swap(currentIdx, smallestIdx, array)
      //increment the currentIdx
          currentIdx++
    }
    //exit both for loop and while loop and return array
    return array
  }
  
  //helper function that swaps the elements at index i and index j
  function swap(i, j, array){
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  
  // Do not edit the line below.
  exports.selectionSort = selectionSort;
  