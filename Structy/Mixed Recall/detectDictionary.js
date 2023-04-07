// detect dictionary
// Write a function, detectDictionary, that takes in a dictionary of words and an alphabet string. The function should return a boolean indicating whether or not all words of the dictionary are lexically-ordered according to the alphabet.

// You can assume that all characters are lowercase a-z.

// You can assume that the alphabet contains all 26 letters.

test_00:
const dictionary = ["zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> true
test_01:
const dictionary = ["zoo", "tack", "tick", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
test_02:
const dictionary = ["zoos", "zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
test_03:
const dictionary = ["miles", "milestone", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
test_04:
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
test_05:
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> false

//n = number of words in dictionary
//k = length of the longest word
// time: O(nk)
// space: O(1)
const detectDictionary = (dictionary, alphabet) => {
    // loop through dictionary array
    for(i = 0; i < dictionary.length - 1; i++){
      if(lexicalOrder(dictionary[i], dictionary[i + 1], alphabet) === false){
        return false
      }
    }
    //for each word, check if the word is supposed to come after the
    //word before it
    //if so, keep iterating
    //if not return false
    //late return true
    return true
  };
  
  //use lexicalOrder helper function
  const lexicalOrder = (word1, word2, alphabet) => {
    const maxLength = Math.max(word1.length, word2.length)
    for(let i = 0; i < maxLength; i++){
      const char1 = word1[i]
      const char2 = word2[i]
      const value1 = alphabet.indexOf(char1)
      const value2 = alphabet.indexOf(char2)
      
      if(value1 < value2){
        return true
      }
      
      if(value1 > value2){
        return false
      }
    }
    return true
  }
  
  module.exports = {
    detectDictionary,
  };
  