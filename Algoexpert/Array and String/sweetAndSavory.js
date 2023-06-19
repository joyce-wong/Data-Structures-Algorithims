// Sweet and Savory

// You're hosting an event at a food festival and want to showcase the best possible
// pairing of two dishes from the festival that complement each other's flavor
// profile. 

// Each dish has a flavor profile represented by an integer. A negative integer
// means a dish is sweet, while a positive integer means a dish is savory. The 
// absolute value of that integer represents the intensity of that flavor. 
// For example, a flavor profile of -3 is slightly sweet, one of -10 is extremely
// sweet, one of 2 is mildly savory, and one of 8 is significantly savory. 

// You're given an array of these dishes and a target combined flavor profile. 
// Write a function that returns the best possible pairing of two dishes(the pairing
//     with a total flavor profile that's closest to the target one). Note that 
//     this pairing must include one sweet and one savory dish. You're also concerned
//     about the dish being too savory, so your pairing should never be more savory
//     than the target flavor profile.

//     All dishes will have a positive or negative flavor profile; there are no dishes
//     with a 0 value. For simplicity, you can assume that there will be at most 
//     one best solution. If there isn't a valid solution, your function should
//     return [0, 0]. The returned array should be sorted, meaning the sweet 
//     dish should always come first. 

//n = number of dishes
// time: O(n * log(n))
//space: O(n)
function sweetAndSavory(dishes, target) {
    //create sweetDishes array out of sorted negative integers
   const sweetDishes = dishes.filter(dish => dish < 0).sort((a, b) => b -a)
    //create savoryDishes array out of sorted positive integers
   const savoryDishes = dishes.filter(dish => dish > 0).sort((a, b) => a - b)
  
    //declare initial value of bestPair as default [0, 0] that 
    //is returned if there is no suitable answer
   let bestPair = [0, 0]
    //declare initial value of bestDifference as Infinity
   let bestDifference = Infinity
    //declare sweetIndex and savoryIndex as 0 to start
    //at beginning of arrays
   let sweetIndex = 0
   let savoryIndex = 0
  
    //while the sweetIndex is within bounds
    //and savoryIndex is within bounds
    while(sweetIndex < sweetDishes.length && savoryIndex < savoryDishes.length){
      //the currentSum will be the total of the elements in each dish at their
      //respective indices
      const currentSum = sweetDishes[sweetIndex] + savoryDishes[savoryIndex]
  
      //this conditional checks to ensure that currentSum is less than
      //or equal to target
    if(currentSum <= target){
      //declare currentDifference as difference between target and currentSum
      const currentDifference = target - currentSum
      //if currentDifference is less than bestDifference
      if(currentDifference < bestDifference){
        //replace bestDifference with currentDifference
        bestDifference = currentDifference
        //set bestPair equal to the the pair of dishes in each array
        //at their respective indices
        bestPair = [sweetDishes[sweetIndex], savoryDishes[savoryIndex]]
      }
      //increment savoryIndex
      savoryIndex++
    } else {
      //otherwise, increment sweetIndex
      sweetIndex++
     }
    }
    //return bestPair
    return bestPair
  }
  
  // Do not edit the line below.
  exports.sweetAndSavory = sweetAndSavory;
  