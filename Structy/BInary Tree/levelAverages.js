// level averages
// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

test_00:
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

levelAverages(a); // -> [ 3, 7.5, 1 ] 
test_01:
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

levelAverages(a); // -> [ 5, 32.5, 17.5, 2 ] 
test_02:
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(45);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0     45
//     /       \
//    -1       -2

levelAverages(a); // -> [ -1, -5.5, 14, -1.5 ]
test_03:
const q = new Node(13);
const r = new Node(4);
const s = new Node(2);
const t = new Node(9);
const u = new Node(2);
const v = new Node(42);

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//        13
//      /   \
//     4     2
//      \
//       9
//      /
//     2
//    /
//   42

levelAverages(q); // -> [ 13, 3, 9, 2, 42 ]
test_04:
levelAverages(null); // -> [ ]

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//iterative depth first
// const levelAverages = (root) => {
//   if(root === null) return []
//   let levels = []
//   let averages = []
//   let sum = 0
//   const stack = [{node: root, levelN: 0}]
//   while (stack.length > 0){
//     const {node, levelN} = stack.pop()
//     if(levels.length === levelN){
//       levels.push([node.val])
//     } else {
//       levels[levelN].push(node.val)
//     }
//     if(node.right !== null) stack.push({node: node.right, levelN: levelN + 1})
//     if(node.left !== null) stack.push({node: node.left, levelN: levelN + 1})
//   }
//   // averages.forEach((level) => {level.reduce((acc, number) => acc + number, 0,)})
//   // averages.forEach((level) => {level.reduce((acc, number) => acc + number)})
//   for(let level of levels){
//     sum = 0
//     for(let i = 0; i < level.length; i++){
//       sum += level[i]
//     }
//     averages.push(sum/level.length)
//   }
//   return averages
// };

//breadth first iterative
// const levelAverages = (root) => {
//   if(root === null) return []
//   let averages = []
//   let levels = []
//   let sum = 0
//   const queue = [{node: root, levelN: 0}]
//   while(queue.length > 0){
//     const {node, levelN} = queue.shift()
//     if(levels.length === levelN){
//       levels.push([node.val]) 
//     } else {
//         levels[levelN].push(node.val)
//       }
  
//     if(node.left !== null) queue.push({node: node.left, levelN: levelN +1})
//     if(node.right !== null) queue.push({node: node.right, levelN: levelN +1})
//   }
//   for(let level of levels){
//     sum = 0
//     for(let i = 0; i < level.length; i++){
//       sum += level[i]
//     }
//     averages.push(sum/level.length)
//   }
//   return averages
// }

//recursive
// const levelAverages = (root) => {
//   let levels = []
//   let averages = []
//   let sum = 0
//   fillLevels(root, levels, 0)
//   for(let level of levels){
//     sum = 0
//     for(let i = 0; i < level.length; i++){
//       sum += level[i]
//     }
//     averages.push(sum/level.length)
//                   }
  
//   return averages
// }

// const fillLevels = (root, levels, levelN) => {
//   if(root === null) return []
//   if(levels.length === levelN){
//     levels[levelN] = [root.val]
//   } else {
//     levels[levelN].push(root.val)
//   }
//   fillLevels(root.left, levels, levelN + 1)
//   fillLevels(root.right, levels, levelN + 1)
// }

//recursive with 2 helper functions
// const levelAverages = (root) => {
//   let levels = []
//   let averages = []
//   let sum = 0
//   fillLevels(root, levels, 0)
//   for(let level of levels){
//     avg(level)
//     averages.push(avg(level))
//                   }
//   return averages
// }

// const avg = (array) => {
//   let sum = 0
//   for(let el of array){
//     sum += el
//   }
//   sum = sum/array.length
//   return sum
// }

// const fillLevels = (root, levels, levelN) => {
//   if(root === null) return []
//   if(levels.length === levelN){
//     levels[levelN] = [root.val]
//   } else {
//     levels[levelN].push(root.val)
//   }
//   fillLevels(root.left, levels, levelN + 1)
//   fillLevels(root.right, levels, levelN + 1)
// }

//recursive with 2 helper functions and map
//O(n) time, O(n) space
const levelAverages = (root) => {
    let levels = []
    fillLevels(root, levels, 0)
    return levels.map(avg)
  }
  
  const avg = (array) => {
    let sum = 0
    for(let el of array){
      sum += el
    }
    sum = sum/array.length
    return sum
  }
  
  const fillLevels = (root, levels, levelN) => {
    if(root === null) return []
    if(levels.length === levelN){
      levels[levelN] = [root.val]
    } else {
      levels[levelN].push(root.val)
    }
    fillLevels(root.left, levels, levelN + 1)
    fillLevels(root.right, levels, levelN + 1)
  }
  
  module.exports = {
    levelAverages,
  };
  