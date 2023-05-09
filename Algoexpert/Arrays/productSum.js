// Product Sum 

// Write a function that takes in a "special" array and returns its product sum.

// A "special" array is a non-empty array that contains either integers or other
// "special" arrays. The product sum of a "special" array is the sum of its
// elements, where "special" arrays inside it are summed themselves and then 
// multiplied by their level of depth. 

// The depth of a "special" array is how far nested it is. For instance, the
// depth of [] is 1; the depth of the inner array is [[]] is 2; the depth 
// of the innermost array in [[[]]] is 3. 

// Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]]
// is x + 2 * (y + z); the product sum of [x, [y,[z]]] is x + 2 * (y + 3z).

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
//n = total number of elements in the array including sub-elements
//d = greatest depth of "special" arrays in the array
// time: O(n)
//space: O(d)
//add multiplier parameter initialized to 1 to represent depth
//of the multidimensional arrays
function productSum(array, multiplier = 1) {
    //declare variable to track sum
    let sum = 0
    //loop through elements of the array
      for(let el of array){
        //check to see if each element is or contains a sub-array
        if(Array.isArray(el)){
          //if so, add the sum to the recursive case
        sum += productSum(el, multiplier + 1)
          //otherwise add the element to the sum
        } else {     
         sum += el
        }
      }
    //return the sum * depth of the array
    return sum * multiplier
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;