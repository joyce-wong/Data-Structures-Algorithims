// Middle Node

// You're given a Linked List with at least one node. Write a function that returns
// the middle node of the Linked List. If there are two middle nodes (i.e. an even length list),
// your function should return the second of these nodes. 

// Each LinkedList node has an integer value as well as a next node pointing to 
// the next node in the list or to None/null if it's the tail of the list. 

// This is an input class. Do not edit.
// class LinkedList {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   exports.LinkedList = LinkedList;
  
//   //n = number of nodes in linkedList
//   //time: O(n)
//   //space: O(n)
//   function middleNode(linkedList) {
//     //declare variable to keep track of index
//     let i = 0
//     //keep track of nodes using hashmap
//     let obj = {}
//     //declare current variable to keep track of linkedList nodes
//     let current = linkedList
//     //while loop to end of linked list
//     while(current !== null){
//       //keep track of nodes and index using hashmap
//       obj[i] = current
//       //point current to current.next to traverse linked list
//       current = current.next
//       //increment index
//       i++
//     }
//     //index of middle node
//     const mid = Math.floor(i/2)
//     //return the value at that index from the hash map
//     return obj[mid];
//   }

// This is an input class. Do not edit.
// class LinkedList {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   exports.LinkedList = LinkedList;
//   //n = number of nodes in linkedList
//   //time: O(n)
//   //space: O(1)
//   function middleNode(linkedList) {
//     //declare variable to track current, initalize as head
//     let current = linkedList
//     //declare variable to keep track of how many nodes there are
//     let count = 0
//     //while loop through linked list
//     while(current !== null){
//       current = current.next
//       //increment count at each node
//       count++
//     }
//     //mid index is the index of the second of the middle nodes
//     const mid = Math.floor(count/2)
//     //declare pointer for middle node intialized as head of linked list
//     let midNode = linkedList
//     //for loop through linked list that ends at index of second of middle nodes
//     for(let i = 0; i < mid; i++){
//       midNode = midNode.next
//     }
//     //return midNode which is the node at the middle index
//     return midNode;
//   }
  
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  //n = number of nodes in linked list
  //time: O(n)
  //space: O(1) 
  function middleNode(linkedList) {
    //declare variable for slow pointer and fast pointer initialized
    //at head of linkedList
    let slow = linkedList
    let fast = linkedList
  
    //while fast is not null and fast.next is not null
    while(!(fast === null || fast.next === null)){
      //slow pointer goes to slow.next
      slow = slow.next
      //fast pointer goes to fast.next.next
      //it moves twice as fast as slow pointer
      fast = fast.next.next
    }
      //when you get to the end of the linked list with fast pointer
      //return the slow pointer
    return slow;
  }
  
  // Do not edit the line below.
  exports.middleNode = middleNode;