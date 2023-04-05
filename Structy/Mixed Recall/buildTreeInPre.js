// build tree in pre
// Write a function, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. The function should build a binary tree that has the given in-order and pre-order traversal structure. The function should return the root of this tree.

// You can assume that the values of inorder and preorder are unique.

test_00
buildTreeInPre(
  [ 'z', 'y', 'x' ],
  [ 'y', 'z', 'x' ] 
);
//       y
//    /    \
//   z      x
test_01
buildTreeInPre(
  [ 'y', 'z', 'x' ],
  [ 'y', 'x', 'z' ] 
);
//       y
//        \
//         x
//        / 
//       z
test_02
buildTreeInPre(
  [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
  [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ] 
);
//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
test_03
buildTreeInPre(
  [ 't', 'u', 's', 'q', 'r', 'p' ],
  [ 'u', 't', 's', 'r', 'q', 'p' ] 
);
//     u
//  /    \
// t      s
//         \
//         r
//        / \
//        q  p
test_04
buildTreeInPre(
  [ 'm', 'l', 'q', 'o', 'r', 'n', 's', 'p', 't' ],
  [ 'l', 'm', 'n', 'o', 'q', 'r', 'p', 's', 't' ] 
);
//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  //n = length of input array
  // time: O(n^2)
  // space: O(n^2)
  const buildTreeInPre = (inOrder, preOrder) => {
    if(inOrder.length === 0 || preOrder.length === 0) return null
    //get the value of 0 value of preOrder
    const value = preOrder[0]
    //set that to root Node
    const root = new Node(value)
    //get the mid value through the index of value in inOrder
    const mid = inOrder.indexOf(root.val)
    //get leftInOrder and rightInOrder through slicing
    const leftInOrder = inOrder.slice(0, mid)
    const rightInOrder = inOrder.slice(mid + 1)
    //get leftPreOrder and rightPreOrder through slicing
    //need to add 1 to leftInOrder.length to account for already having built
    //the root using the 0th element of preOrder
    const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1)
    const rightPreOrder = preOrder.slice(leftInOrder.length + 1)
    //set root.left to recursive function on leftInOrder and leftPreOrder
    root.left = buildTreeInPre(leftInOrder, leftPreOrder)
    //set root.right to recursive function on rightInOrder and rightPreOrder
    root.right = buildTreeInPre(rightInOrder, rightPreOrder)
    //return root
    return root
  };
  
  //with indices instead of slice
  //n = length of array
  // time: O(n)
  // space: O(n)
  // const buildTreeInPre = (inOrder, preOrder, inOrderStart = 0, inOrderEnd = inOrder.length - 1, preOrderStart = 0, preOrderEnd = preOrder.length - 1) => {
  //   if(inOrderEnd < inOrderStart) return null
  //   const value = preOrder[preOrderStart]
  //   const root = new Node(value)
  //   const mid = inOrder.indexOf(value)
  //   const leftSize = mid - inOrderStart
  //   root.left = buildTreeInPre(
  //     inOrder,
  //     preOrder,
  //     inOrderStart,
  //     mid - 1,
  //     preOrderStart + 1,
  //     preOrderStart + leftSize
  //   )
  //   root.right = buildTreeInPre(
  //     inOrder,
  //     preOrder,
  //     mid + 1,
  //     inOrderEnd,
  //     preOrderStart + leftSize + 1,
  //     preOrderEnd
  //   )
  //   return root
  // }
  
  module.exports = {
    buildTreeInPre,
  };
  