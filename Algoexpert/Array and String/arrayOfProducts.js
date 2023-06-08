// Array of Products

// Write a function that takes in a non-empty array of integers and returns
// an array of the same length, where each element in the output array is 
// equal to the product of every other number in the input array. 

// In other words, the value at output[i] is equal to the product of every
// number in the input array other than input[i].

// Note that you're expected to solve this problem without using division. 

//n = length of input array
//time: O(n ^ 2)
//space: O(n)
// function arrayOfProducts(array) {
//     //declare result array
//     let result = []
//     //for loop through array forwards
//     for(let i = 0; i < array.length; i++){
//       //track left part of array before i
//       let left = array.slice(0, i)
//       //track right part of array after i
//       let right = array.slice(i + 1)
//       //declare left and right products to be 1
//       let leftProduct = 1
//       let rightProduct = 1
//       //loop through left part of array and multiply each n to get leftProduct
//       for(let n of left){
//         leftProduct *= n
//       }
//       //loop through right part of array and multiply each n to get rightProduct
//       for(let n of right){
//         rightProduct *= n
//       }
//       //multiply both products together
//       let totalProduct = leftProduct * rightProduct
//       //push both products into result
//       result.push(totalProduct)
//     }
//     //return result
//     return result
//   }

//n = length of array
//time: O(n)
//space: O(n)
// function arrayOfProducts(array) {
//     //set each of these variables to a new Array with array.length length 
//     //filled with 1s
//     let products = array.slice().fill(1)
//     let leftProducts = array.slice().fill(1)
//     let rightProducts = array.slice().fill(1)
  
//     //declare leftRunningProduct to be 1
//     let leftRunningProduct = 1
//     //loop through array forwards
//     for(let i = 0; i < array.length; i++){
//       //set the element in leftProducts to be the leftRunningProduct
//       leftProducts[i] = leftRunningProduct
//       //multiply leftRunningProduct with the element from array
//       leftRunningProduct *= array[i]
//     }
  
//     //set rightRunningProduct to 1
//     let rightRunningProduct = 1
//     //loop through array backwards
//     for(let i = array.length - 1; i >= 0; i--){
//       //set the rightProducts element to rightRunningProduct
//       rightProducts[i] = rightRunningProduct
//       //multiply rightRunningProduct with the element at the array
//       rightRunningProduct *= array[i]
//     }
//   //loop through array forwards
//     for(let i = 0; i < array.length; i++){
//       //set the element in products to be the product
//       //of the two elements in leftProducts and rightProducts
//       products[i] = leftProducts[i] * rightProducts[i]
//     }
//     //return products array
//     return products
//   }
  
//n = length of input array
//time: O(n)
//space: O(n)
function arrayOfProducts(array) {
    //set products to a new Array with length of array.length and fill it with 1s
    let products = array.slice().fill(1)
  //set leftRunningProduct to 1
    let leftRunningProduct = 1
    //loop forwards through the array
    for(let i = 0; i < array.length; i++){
      //set the element of products to be leftRunningProduct
      products[i] = leftRunningProduct
      //multiply leftRunningProduct by element in array
      leftRunningProduct *= array[i]
    }
  //set rightRunningProduct to 1
    let rightRunningProduct = 1
    //loop backwards through array
    for(let i = array.length - 1; i >= 0; i--){
      //set element of products to be multiplied by rightRunningProduct
      products[i] *= rightRunningProduct
      //multiply rightRunningProduct by element in array
      rightRunningProduct *= array[i]
    }
    //return products
    return products
  }
  
  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;
  