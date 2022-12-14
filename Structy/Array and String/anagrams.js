// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

test_00:
anagrams('restful', 'fluster'); // -> true
test_01:
anagrams('cats', 'tocs'); // -> false
test_02:
anagrams('monkeyswrite', 'newyorktimes'); // -> true
test_03:
anagrams('paper', 'reapa'); // -> false
test_04:
anagrams('elbow', 'below'); // -> true
test_05:
anagrams('tax', 'taxi'); // -> false
test_06:
anagrams('taxi', 'tax'); // -> false
test_07:
anagrams('night', 'thing'); // -> true
test_08:
anagrams('abbc', 'aabc'); // -> false
test_09:
anagrams('po', 'popp'); // -> false
test_10:
anagrams('pp', 'oo') // -> false

// # n = length of string 1
// # m = length of string 2
// # Time: O(n + m)
// # Space: O(n)
const anagrams = (s1, s2) => {
  //hash map
  //store characters for s1 in obj
  //loop through s2 and delete values from objects
  //last loop to check if the values are all 0 then return true
  //else return false
  //for of loop checks the values of object
  //for in loop checks the properties of object
let obj = {}
for (let char of s1){
  if(!(char in obj)){
    obj[char] = 0
  }
    obj[char]++
}
  
for (let char of s2){
 if(obj[char] === undefined){
   return false
 } else {
   obj[char]--
 }
}
  
  for(let char in obj){
    if(obj[char] !== 0){
      return false
    }
  }
  return true
};

module.exports = {
  anagrams,
};
