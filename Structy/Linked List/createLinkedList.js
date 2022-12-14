// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

test_00:
createLinkedList(["h", "e", "y"]);
// h -> e -> y
test_01:
createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8
test_02:
createLinkedList(["a"]);
// a
test_03:
createLinkedList([]);
// null

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  //iterative solution O(n) runtime O(n) space
  const createLinkedList = (values) => {
    const dummyHead = new Node(null)
    let tail = dummyHead
    for(val of values){
      tail.next = new Node(val)
      tail = tail.next
    }
    return dummyHead.next
  };
  
  //recursive solution 1 O(n^2) runtime
  // const createLinkedList = (values) => {
  //   if(values.length === 0) return null
  //   const newHead = new Node(values[0])
  //   newHead.next = createLinkedList(values.slice(1))
  //   return newHead
  // }
  
  //recursive solution 2 O(n) runtime O(n) space
  // const createLinkedList = (values, i = 0) => {
  //   if(i === values.length) return null
  //   const newHead = new Node(values[i])
  //   newHead.next = createLinkedList(values, i + 1)
  //   return newHead
  // }
  
  module.exports = {
    createLinkedList,
  };
  