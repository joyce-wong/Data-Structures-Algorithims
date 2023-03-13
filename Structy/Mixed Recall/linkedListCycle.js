// linked list cycle
// Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.

test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

//         _______
//       /        \
// a -> b -> c -> d 

linkedListCycle(a);  // true
test_01:
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = q; // cycle

//    ________________
//  /                 \
// q -> r -> s -> t -> u 

linkedListCycle(q);  // true
test_02
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d 

linkedListCycle(a);  // false
test_03:
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = t; // cycle

//                   __
//                 /   \
// q -> r -> s -> t -> u 

linkedListCycle(q);  // true
test_04:
const p = new Node('p');

// p

linkedListCycle(p); // false
test_05:
linkedListCycle(null); // false

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
//using a Set to keep track of visited nodes
// time O(n)
//space O(n)
// const linkedListCycle = (head) => {
//   let values = new Set()
//   let current = head
//   if(current === null) return false
//   while(current !== null){
//     if(values.has(current.val)) return true
//       values.add(current.val)
//     current = current.next
//   }
//   return false
// };

//using fast and slow pointer
//time O(n)
//space O(1)
// const linkedListCycle = (head) => {
//   let slow = head
//   let fast = head
  
//   while(!(fast === null || fast.next === null)){
//     slow = slow.next
//     fast = fast.next.next
//     if(fast === null || fast.next === null) return false
//     if(slow.val === fast.val){
//     return true
//   } 
//   }
//   return false
// }

//with head and tail pointer optimized
// time O(n)
//space O(n)
const linkedListCycle = (head) => {
    let slow = head
    let fast = head
    let firstTime = true
    
    while(fast !== null && fast.next !== null){
      if(slow.val === fast.val && !firstTime) return true
      slow = slow.next
      fast = fast.next.next
      firstTime = false
    }
    return false
  }
  
  
  module.exports = {
    linkedListCycle,
  };
  