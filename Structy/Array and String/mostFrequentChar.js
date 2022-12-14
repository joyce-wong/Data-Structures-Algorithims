// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

test_00:
mostFrequentChar('bookeeper'); // -> 'e'
test_01:
mostFrequentChar('david'); // -> 'd'
test_02:
mostFrequentChar('abby'); // -> 'b'
test_03:
mostFrequentChar('mississippi'); // -> 'i'
test_04:
mostFrequentChar('potato'); // -> 'o'
test_05:
mostFrequentChar('eleventennine'); // -> 'e'
test_06:
mostFrequentChar("riverbed"); // -> 'r'

//O(n) time, O(n)space
const mostFrequentChar = (s) => {
    // create hashmap
    //for loop to loop through string
    //if the character doesn't exist, add it to the object
    //if it does exist, increment it
    //exit loop 
    //check in the object what letter has the highest value
    //return that letter
    let obj = {}
    let mostTimes = 0
    let mostLetter =''
    
    for(let char of s){
      //can also do for loop above iterating through i
      if(!(char in obj)){
        obj[char] = 1
      } else {
        obj[char]++
      }
    }
   
    for(let char in obj){
      if(obj[char] > mostTimes){
        mostTimes = obj[char]
        mostLetter = char
      }
    }
    return mostLetter
  };
  
  module.exports = {
    mostFrequentChar,
  };
  