// post order
// Write a function, postOrder, that takes in the root of a binary tree. The function should return an array containing the post-ordered values of the tree.

// Post-order traversal is when nodes are recursively visited in the order: left child, right child, self.

test_00:
const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

x.left = y;
x.right = z;

//       x
//    /    \
//   y      z

postOrder(x);
// ['y', 'z', 'x']
test_01:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
  
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g

postOrder(a);
// [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
test_02:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

postOrder(a);
// [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
test_03:
const l = new Node('l');
const m = new Node('m');
const n = new Node('n');
const o = new Node('o');
const p = new Node('p');
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');

l.left = m;
l.right = n;
n.left = o;
n.right = p;
o.left = q;
o.right = r;
p.left = s;
p.right = t;

//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t

postOrder(l);
// [ 'm', 'q', 'r', 'o', 's', 't', 'p', 'n', 'l' ] 
test_04:
postOrder(null);
// []

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//n = number of nodes
//time = O(n)
//space = O(n)
const postOrder = (root) => {
    // try depth first recursive
    //do we need a helper function?
    // base case if it's null return []
    // postOrder root.left
    //postOrder root.right
    //push root.val into values
    // return values
    const values = []
    fillValues(root, values)
    return values
  };
  
  const fillValues = (root, values) => {
    if(root === null) return []
      fillValues(root.left, values)
      fillValues(root.right, values)
      values.push(root.val)
  }
  
  module.exports = {
    postOrder,
  };
  