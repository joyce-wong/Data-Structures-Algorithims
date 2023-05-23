// Generate Document

// You're given a string of available characters and a string representing a 
// document that you need to generate. Write a function that determines if 
// you can generate the document using the available characters. If you can 
// generate the document, your function should return true; otherwise it should
// return false. 

// You're only able to generate the document if the frequency of unique characters
// in the characters string is greater than or equal to the frequency of unique 
// characters in the document string. For example if you're given characters =
// "abcabc" and document = "aabbccc" you cannot generate the document because
// you're missing one c. 

// The document that you need to create may contain any characters, including
// special characters, capital letters, numbers, and spaces. 

// Note: you can always generate the empty string(""). 

//n = number of characters
//m = length of document
//c = number of unique characters in the characters string
function generateDocument(characters, document) {
    //initialize hash map as empty object
    let obj = {}
    //loop through characters string
    for(let char of characters){
      //if the char is not already in obj, initialize it with count of 1
      if(!obj[char]){
        obj[char] = 1
        //if it's already in obj, increment the count
      } else {
        obj[char]++
      }
    }
  
    //loop through document string
    for(let character of document){
      //if the character count in obj is more than 0, decrement it (use character)
      if(obj[character] > 0){
        obj[character]--
        //otherwise, if the character count is negative(you don't have enough of the character)
        //or the character is not already stored in obj, return false
      } else {
        return false
      }
    }
    //if you get to the end of the loop, you have enough of each character
    //in hash map to generate document, so return true
    return true
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;

  //n = number of characters
//m = length of document
//time: O(m * (n + m))
//space: O(1)
// function generateDocument(characters, document) {
//     //loop through document
//     for(let character of document){
//       //count frequency of character in document
//       const documentFrequency = countCharacterFrequency(character, document)
//       //count frequency of character in characters
//       const charactersFrequency = countCharacterFrequency(character, characters)
//       //if document has more of the character than characters does,
//       //you don't have enough of the character to generate document
//       if(documentFrequency > charactersFrequency) return false
//     }
//     //if you finish the loop, you have enough of character
//     //to generate document so return true
//     return true
//   }
  
//   //helper function that counts the frequency of a character in a target string
//   function countCharacterFrequency(character, target){
//     //initialize frequency as 0
//     let frequency = 0
//     //loop through target string
//     for(let char of target){
//       //if char of target matches input character, increment frequency
//       if(char === character) frequency++
//     }
//     //return frequency of character in target string
//     return frequency
//   }

//n = number of characters
//m = length of document
//c = number of unique characters in the document
//time: O(c * (n + m))
//space: O(c)
// function generateDocument(characters, document) {
//     //generate a set to keep track of a character that has already been counted
//     let alreadyCounted = new Set()
  
//     //for loop through document
//     for(let character of document){
//       //if the set already has character, don't count it again to save time
//       if(alreadyCounted.has(character)) continue
  
//       //count characters in document
//       const documentFrequency = countCharacterFrequency(character, document)
//       //count characters in characters
//       const charactersFrequency = countCharacterFrequency(character, characters)
  
//       //if there are more of the character in document than in characters, return false
//       //because you don't have enough of the character to generate document
//       if(documentFrequency > charactersFrequency) return false
  
//       //add counted character to alreadyCounted set
//       alreadyCounted.add(character)
//     }
//     //if you get to the end of the loop, return true because you
//     //have enough of the character to generate document
//     return true
//   }
  
//   //helper function that counts the frequency of a character in a target string
//   function countCharacterFrequency(character, target){
//     //initialize frequency as 0
//     let frequency = 0
//     //loop through target string
//     for (let char of target){
//       //if the char is the same as the input character, increment frequency
//       if(char === character) frequency++
//     }
//     //return frequency
//     return frequency
//   }