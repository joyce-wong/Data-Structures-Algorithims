// overlap subsequence
// Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

test_00:
overlapSubsequence("dogs", "daogt"); // -> 3
test_01:
overlapSubsequence("xcyats", "criaotsi"); // -> 4
test_02:
overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
test_03:
overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
test_04:
overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
); // -> 15

//dynamic programming with memoization
// n = length of str1
// m = length of str2
// time O(nm)
//space O(nm)
const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {} ) => {
    const key = i + ',' + j
    if(key in memo) return memo[key]
    if(str1.length === i || str2.length === j) return 0
    if(str1[i] === str2[j]){
     memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo)
    } else {
      memo[key] = Math.max(overlapSubsequence(str1, str2, i + 1, j, memo), overlapSubsequence(str1, str2, i, j + 1, memo))
    }
    return memo[key]
  };
  
  module.exports = {
    overlapSubsequence,
  };
  