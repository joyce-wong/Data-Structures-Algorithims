// nesting score
// Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

// [] is worth 1 point
// XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
// [S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
// You may assume that the input only contains well-formed square brackets.

test_00:
nestingScore("[]"); // -> 1
test_01:
nestingScore("[][][]"); // -> 3
test_02:
nestingScore("[[]]"); // -> 2
test_03:
nestingScore("[[][]]"); // -> 4
test_04:
nestingScore("[[][][]]"); // -> 6
test_05:
nestingScore("[[][]][]"); // -> 5
test_06:
nestingScore("[][[][]][[]]"); // -> 7
test_07:
nestingScore("[[[[[[[][]]]]]]][]"); // -> 129

//n = str length
//time O(n)
//space O(n)
const nestingScore = (str) => {
    let score = 0
    if(str.length === 0) return 0
    const stack = [0]
    for(let char of str){
      if(char === '['){
        stack.push(0)
      }
      if(char === ']'){
        let stackNum = stack.pop()
        if(stackNum === 0){
          stack[stack.length - 1]++
        }
        if(stackNum > 0){
          stackNum *= 2
          stack[stack.length - 1] += stackNum
        }
      }
    }
    return stack[0]
  };
  
  const double = (subScore) => {
    return subScore * 2
  }
  
  module.exports = {
    nestingScore,
  };
  