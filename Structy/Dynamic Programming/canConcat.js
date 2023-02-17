// can concat
// Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

// You may reuse words of the array as many times as needed.

test_00:
canConcat("oneisnone", ["one", "none", "is"]); // -> true
test_01:
canConcat("oneisnone", ["on", "e", "is"]); // -> false
test_02:
canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
test_03:
canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
test_04:
canConcat("santahat", ["santah", "hat"]); // -> false
test_05:
canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
test_06:
canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false
test_07:
canConcat("fooisgood", ["foo", "is", "g", "ood", "f"]); // -> true

//dynamic programming with memoization
// s = length of string
// w = # of words
//time ~O(sw)
//space O(s)
const canConcat = (s, words, memo = {}) => {
  if(s in memo) return memo[s]
  if(s.length === 0) return true
  for(let word of words){
    if(s.startsWith(word)) {
      const suffix = s.slice(word.length)
      if(canConcat(suffix, words, memo)){
          memo[s] = true
          return true
      }
    }
  }
  memo[s] = false
  return false
};

module.exports = {
  canConcat,
};
