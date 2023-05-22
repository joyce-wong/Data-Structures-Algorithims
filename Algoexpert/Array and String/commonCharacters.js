// Common Characters

// Write a function that takes in a non-empty list of non-empty strings 
// and returns a list of characters that are common to all strings in the list, 
// ignoring multiplicity. 

// Note that the strings are non guaranteed to only contain alphanumeric 
// characters. The list you return can be in any order.

//n = number of strings
//m = length of longest string
//c = number of unique characters across all strings
//time: O(n * m)
//space: O(c)
// function commonCharacters(strings) {
//     //declare output array
//      let output = []
//      //declare object to store character counts
//      let obj = {}
//      //iterate through strings array
//      for(let string of strings){
//        //convert each string into a Set
//        const tracker = new Set(string)
//        //iterate through each Set
//         for(let char of tracker){
//           //track how many times the character occurs in the overall strings array
//           if(!(obj[char])){
//             obj[char] = 1
//           } else {
//             obj[char] += 1
//           }
//         }
//      }
//      //iterate through keys in obj
//      for(let key in obj){
//        //if the character count of the character is the
//        //number of strings in the array, push the key into output array
//        if(obj[key] === strings.length) output.push(key)
//      }
//      //return output array
//      return output
//    }
   
//    function commonCharacters(strings) {
//     //declare shortestString variable as empty string
//       let shortestString = ''
//       //declare minLength as Infinity
//       let minLength = Infinity
//       //loop through array of strings
//       for(let string of strings){
//         //if the length of the string is less than minLength
//         if(string.length < minLength) {
//           //update minLength and shortestString
//           minLength = string.length
//           shortestString = string
//         }
//       }
//       //convert the shortestString into shortestStringSet
//       let shortestStringSet = new Set(shortestString)
//       //loop through strings array again
//       for(let string of strings){
//         //convert each string into a set
//         let stringSet = new Set(string)
//         //loop through shortestStringSet
//         for(let char of shortestStringSet){
//           //if the stringSet of the other string doesn't have char
//           //delete char from shortestStringSet
//         if(!stringSet.has(char)){
//           shortestStringSet.delete(char)
//         }
//         }
//       }
//       //return an array from shortestStringSet
//       return Array.from(shortestStringSet);
//     }

    //n = number of strings
//m = length of the longest string
//time: O(n*m)
//space: O(m)
//two helper functions
function commonCharacters(strings) {
    //use getSmallestString helper function to get smallest string
    const smallestString = getSmallestString(strings)
    //turn the smallestString into a Set
    const potentialCommonCharacters = new Set(smallestString)
  
    //loop through strings array
    for(const string of strings){
      //use removeNonexistentcharacters function to remove the characters
      //that don't exist from the set of smallestString
      removeNonexistentCharacters(string, potentialCommonCharacters)
    }
    //return array containing remaining potentialCommonCharacters
    return Array.from(potentialCommonCharacters)
  }
  
  //helper function that finds the smallest string
  function getSmallestString(strings){
    //initialize smallest string as the one at 0 index
    let smallestString = strings[0]
    //compare the length of each string to smallestString and update as you find
    //shorter strings
    for(const string of strings){
      if(string.length < smallestString.length){
        smallestString = string
      }
    }
    //return string with shortest length
    return smallestString
  }
  
  //helper function that removes non-existent-characters from a set
  function removeNonexistentCharacters(string, potentialCommonCharacters){
    //turn string into a Set
    const uniqueStringCharacters = new Set(string)
  
    //loop through characters in an Array from potentialCommonCharacters set
    for(const character of Array.from(potentialCommonCharacters)){
      //if the set from the string doesn't have the character, 
      if(!uniqueStringCharacters.has(character)){
        //delete the character from potentialCommonCharacters set
        potentialCommonCharacters.delete(character)
      }
    }
  }