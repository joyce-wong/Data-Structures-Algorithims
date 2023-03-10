// middle value
// Write a function, middleValue, that takes in the head of a linked list as an argument. The function should return the value of the middle node in the linked list. If the linked list has an even number of nodes, then return the value of the second middle node.

// You may assume that the input list is non-empty.

test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// a -> b -> c -> d -> e
middleValue(a); // c
test_01:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
middleValue(a); // d
test_02:
const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

x.next = y;
y.next = z;

// x -> y -> z
middleValue(x); // y
test_03:
const x = new Node('x');
const y = new Node('y');

x.next = y;

// x -> y 
middleValue(x); // y
test_04:
const q = new Node('q');

// q
middleValue(q); // q

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//my solution
// n = number of nodes
// time O(n)
//space O(n)
// const middleValue = (head) => {
//   let current = head
//   let arr = []
//   while(current !== null){
//     arr.push(current.val)
//     current = current.next
//   }
//   if(arr.length % 2 === 0){
//     return arr[arr.length / 2]
//   } else {
//     return arr[Math.floor(arr.length / 2)]
//   }
// };

//refactor my solution
// const middleValue = (head) => {
//   let current = head
//   let arr = []
//   while(current !== null){
//     arr.push(current.val)
//     current = current.next
//   }
//   let midIndex = Math.floor(arr.length/2)
//   return arr[midIndex]
// }

//optimized solution using 2 pointers
// n = number of nodes
// time O(n)
// space O(1)
const middleValue = (head) => {
    let slow = head
    let fast = head
    while(!(fast === null || fast.next === null)){
      slow = slow.next
      fast = fast.next.next
    }
    return slow.val
  }
  
  module.exports = {
    middleValue,
  };
  