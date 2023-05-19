// Run-Length Encoding

// Write a function that takes in a non-empty string and returns its run-length
// encoding.

// From Wikipedia, "run-length encoding is a form of lossless data compression
// in which runs of data are stored as a single data value and count, rather
// than as the original run." For this problem, a run of data is any sequence 
// of consecutive, identical characters. So the run "AAA" would be run-length-encoded
// as "3A".

// To make things more complicated, however, the input string can contain all 
// sorts of special characters, including numbers. And since encoded data must be
// decodable, this means that we can't naively run-length-encode long runs. 
// For example, the run "AAAAAAAAAAAA" (12 As), can't be naively be encoded as 
// "12A", since this string can be decoded as either "AAAAAAAAAAA" or "1AA". 
// Thus, long runs (runs of 10 or more characters) should be encoded in a 
// split fashion; the aforementioned run should be encoded as "9A3A".

//n = length of input string
//time: O(n)
//space: O(n)
function runLengthEncoding(string) {
    //declare array to track output
    let output = []
    //initialize count of characters to 1
    let count = 1
    //for loop starting at 1 index
    for(let i = 1; i < string.length; i++){
      //declare variable for currentChar and previousChar
      let currentChar = string[i]
      let prevChar = string[i - 1]
      //if the currentChar is not the same as the prevChar
      //or the count is 9
      if(currentChar !== prevChar || count === 9){
        //push the stringified count
        output.push(String(count))
        //push the prevChar
        output.push(prevChar)
        //reset count to 0
        count = 0
      }
      //if the currentChar is the same as prevChar or count is less than 9
      //increment count
      count++
    }
    //for the last character (exited for loop), push the stringified count
    output.push(String(count))
    //push the last character
    output.push(string[string.length - 1])
    //return output array joined into a string
    return output.join('')
  }
  
  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
  