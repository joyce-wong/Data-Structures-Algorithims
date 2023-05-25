// Semordnilap

// Write a function that takes in a list of unique strings and returns a 
// list of semordnilap pairs. 

// A semordnilap pair is defined as a set of different strings where the 
// reverse of one word is the same as the forward version of the other. 
// For example the words "diaper" and "repaid" are a semordnilap pair,
// as are the words "palindromes" and "semordnilap".

// The order of the returned pairs and the order of the strings within 
// each pair does not matter. 

//n = number of words
//m = length of longest word
//time: O(n * m)
//space: O(n * m)
function semordnilap(words) {
    //convert words input array into a set
    let wordSet = new Set(words)
    //declare variable to track semordnilap pairs result
    let result = []
    //loop through words array
    for(let word of words){
      //declare backwards variable to track the word backwards
      let backwards = word.split("").reverse().join('')
      //if the wordSet has backwards and backwards is not the same exact word
     if(wordSet.has(backwards) && backwards !== word){
       //push the pair into result as an array
       result.push([word, backwards])
       //delete word from wordSet
      wordSet.delete(word)
       //delete backwards from wordSet
      wordSet.delete(backwards)
     }
    }
    //return result multi-dimensional array that contains semordnilap pairs
    return result;
  }
  
  // Do not edit the line below.
  exports.semordnilap = semordnilap;