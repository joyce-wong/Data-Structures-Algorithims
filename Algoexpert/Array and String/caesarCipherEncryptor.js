// Caesar Cipher Encryptor

// Given a non-empty string of lowercase letters and a non-negative integer 
// representing a key, write a function that returns a new string obtained 
// by shifting every letter in the input string by k positions in the alphabet, 
// where k is the key. 

// Note that letters should "wrap" around the alphabet; in other words, the
// letter z shifted by one returns the letter a. 

//brute force solution
// function caesarCipherEncryptor(string, key) {
//     //declare alphabet string 3 times
//     //3 test cases have a large number key
//     const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
//     //declare output array
//     let output = []
//     //loop through string
//     for(char of string){
//       //declare index in alphabet to be the indexOf char and add key
//       let alphIndex = alphabet.indexOf(char) + key
//       //push the ciphered character into output array
//       output.push(alphabet[alphIndex])
//     }
//     //join resulting array into a string
//     return output.join('')
//   }

  //n = length of string
//time: O(n)
//space: O(n)
function caesarCipherEncryptor(string, key) {
    //declare alphabet array
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    //set key equal to remainder of key divided by 26
    const newKey = key % 26
    //declare output array
    let output = []
    //loop through each char of string
    for(let char of string){
      //push in new letter using helper function
      output.push(getNewLetter(char, newKey, alphabet))
    }
    //join output array into a string and return it
    return output.join('')
  }
  
  //helper function that gets a new letter
  function getNewLetter(char, key, alphabet){
    //define new letter index as index of the character in alphabet + key
    const newLetterIndex = alphabet.indexOf(char) + key
    //return the alphabet at the remainder of that index divided by 26
    //in case there is a large key value over 25
    return alphabet[newLetterIndex % 26]
  }
    
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;