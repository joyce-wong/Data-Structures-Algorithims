// befitting brackets
// Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

// You may assume the string contains only characters: ( ) [ ] { }

test_00:
befittingBrackets('(){}[](())'); // -> true
test_01:
befittingBrackets('({[]})'); // -> true
test_02:
befittingBrackets('[][}'); // -> false
test_03:
befittingBrackets('{[]}({}'); // -> false
test_04:
befittingBrackets('[]{}(}[]'); // -> false
test_05:
befittingBrackets('[]{}()[]'); // -> true
test_06:
befittingBrackets(']{}'); // -> false
test_07:
befittingBrackets(''); // -> true
test_08:
befittingBrackets('{[(}])'); // -> false

//n length of string
// time O(n)
//space O(n)
const befittingBrackets = (str) => {
    if(str.length === 0) return true
    const stack = []
    const brackets = {
      '(' : ')',
      '[' : ']',
      '{' : '}'
    }
    for(let char of str){
      if(char in brackets){
        stack.push(brackets[char])
      } else {
        if(stack.length > 0 && stack[stack.length - 1] === char){
         stack.pop()
        } else {
          return false
        }
      }
    }
    if (stack.length === 0){
      return true
    } else {
      return false
    }
  };
  
  module.exports = {
    befittingBrackets,
  };
  