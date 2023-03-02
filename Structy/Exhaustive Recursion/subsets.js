// subsets
// Write a function, subsets, that takes in an array as an argument. The function should return a 2D array where each subarray represents one of the possible subsets of the array.

// The elements within the subsets and the subsets themselves may be returned in any order.

// You may assume that the input array contains unique elements.

test_00:
subsets(['a', 'b']); // ->
// [ 
//   [], 
//   [ 'b' ], 
//   [ 'a' ], 
//   [ 'a', 'b' ] 
// ]
test_01:
subsets(['a', 'b', 'c']); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]
test_02:
subsets(['x']); // ->
// [ 
//   [], 
//   [ 'x' ] 
// ]
test_03:
subsets([]); // ->
// [ 
//   []
// ]
test_04:
subsets(['q', 'r', 's', 't']); // ->
// [
//   [],
//   [ 't' ],
//   [ 's' ],
//   [ 's', 't' ],
//   [ 'r' ],
//   [ 'r', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 's', 't' ],
//   [ 'q' ],
//   [ 'q', 't' ],
//   [ 'q', 's' ],
//   [ 'q', 's', 't' ],
//   [ 'q', 'r' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 's', 't' ]
// ]

//n = length of elements in array
// time O(2^n)
//space O(2^n)
const subsets = (elements) => {
    if (elements.length === 0) return [[]]
    const first = elements[0]
    let subsetWithFirst = []
    let subsetWithoutFirst = subsets(elements.slice(1))
    for(let sub of subsetWithoutFirst){
      subsetWithFirst.push([first, ...sub])
    }
    return [...subsetWithFirst, ...subsetWithoutFirst]
  };
  
  module.exports = {
    subsets,
  };
  