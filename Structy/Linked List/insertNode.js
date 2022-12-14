// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'v', 3);
// a -> b -> c -> v -> d
test_02:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'm', 4);
// a -> b -> c -> d -> m
test_03:
const a = new Node("a");
const b = new Node("b");

a.next = b;

// a -> b

insertNode(a, 'z', 0);
// z -> a -> b 

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  //iterative solution O(n) runtime O(1) space
  const insertNode = (head, value, index) => {
    let current = head
    let counter = 0
    if(index === 0){
      let newHead = new Node(value)
      newHead.next = head
      return newHead
    }
  while(current !== null){
    if(counter === index - 1){
      const temp = current.next
      current.next = new Node(value)
      current.next.next = temp
    }
    counter++
    current = current.next
  }
    return head
  };
  
  //recursive solution O(n) runtime O(n)space
  // const insertNode = (head, value, index, counter = 0) => {
  //   if(head === null) return null
  //   if(index === 0){
  //     let newHead = new Node(value)
  //     newHead.next = head
  //     return newHead
  //   }
  //   if(counter === index - 1){
  //     const temp = head.next
  //     head.next = new Node(value)
  //     head.next.next = temp
  //     return head
  //   }
  //   insertNode(head.next, value, index, counter + 1)
  //   return head
  // }
  
  module.exports = {
    insertNode,
  };
  