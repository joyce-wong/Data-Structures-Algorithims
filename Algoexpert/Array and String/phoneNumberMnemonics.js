// Phone Number Mnemonics

// If you open the keypad of your mobile phone, it'll likely look like this:

// Almost every digit is associated with some letters in the alphabet; this allows
// certain phone numbers to spell out actual words. For example, the phone number 
// 8464747328 can be written as timisgreat; similarly, the phone number 2686463
// can be written as antoine or as ant6463.

// It's important to note that a phone number doesn't represent a single 
// sequence of letters, but rather multiple combinations of letters. 
// For instance, the digit 2 can represent three different letters(a, b, and c).

// A mnemonic is defined as a pattern of letters, ideas, or associations that 
// assist in remembering something. Companies oftentimes use a mnemonic for their 
// phone number to make it easier to remember. 

// Given a stringified phone number of any non-zero length, write a function 
// that returns all mnemonics for this phone number, in any order.

// For this problem, a valid mnemonic may only contain letters and the digits 0
// and 1. In other words, if a digit is able to be represented by a letter, 
// then it must be. Digits 0 and 1 are the only two digits that don't have 
// letter representations on the keypad. 

// Note that you should rely on the keypad illustrated above for digit-letter 
// associations. 

//n = length of phone number
//time: O(4^n * n)
//space: O(4^n * n)
function phoneNumberMnemonics(phoneNumber) {
    const currentMnemonic = new Array(phoneNumber.length).fill('0')
    const mnemonicsFound = []
  
    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound)
    return mnemonicsFound
  }
  
  function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound){
    if(idx === phoneNumber.length){
      const mnemonic = currentMnemonic.join('')
      mnemonicsFound.push(mnemonic)
    } else {
      const digit = phoneNumber[idx]
      const letters = DIGIT_LETTERS[digit]
      for(const letter of letters){
        currentMnemonic[idx] = letter
        phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound)
      }
    }
  }
  
  const DIGIT_LETTERS = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  
  // Do not edit the line below.
  exports.phoneNumberMnemonics = phoneNumberMnemonics;
  