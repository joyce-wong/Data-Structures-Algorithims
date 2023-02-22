// quickest concat
// Write a function, quickestConcat, that takes in a string and an array of words as arguments. The function should return the minimum number of words needed to build the string by concatenating words of the array.

// You may use words of the array as many times as needed.

test_00:
quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2
test_01:
quickestConcat('caution', ['ion', 'caut', 'caution']); // -> 1
test_02:
quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']); // -> 4
test_03:
quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch']); // -> 3
test_04:
quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']); // -> -1
test_05:
quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu']); // -> 2
test_06:
quickestConcat('rongbetty', ['wrong', 'bet']); // -> -1
test_07:
quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']); // -> 7

//dynamic programming with memoization
// s = length of string
// w = number of words
// time ~O(sw)
// space = O(s)
const quickestConcat = (s, words) => {
    const answer = quickestConcatHelper(s, words, memo = {})
    if(answer === Infinity) return -1
    return answer
  }
  
  const quickestConcatHelper = (s, words, memo = {}) => {
    if(s in memo) return memo[s]
    if(s.length === 0) return 0
    let minAttempts = Infinity
    for(let word of words){
      if (s.startsWith(word)){
        const suffix = s.slice(word.length)
          const attempt = 1 + quickestConcatHelper(suffix, words, memo)
          minAttempts = Math.min(attempt, minAttempts)
      }
    }
    memo[s] = minAttempts
    return memo[s]
   };
  
  module.exports = {
    quickestConcat,
  };
  