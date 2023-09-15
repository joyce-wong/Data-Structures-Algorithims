// Sum of Linked Lists

// You're given two Linked Lists of potentially unequal length. Each Linked List 
// represents a non-negative integer, where each node in the Linked List 
// is a digit of that integer, and the first node in each Linked List always 
// represents the least significant digit of the integer. Write a function 
// that returns the head of a new Linked List that represents the sum of 
// the integers represented by the two input Linked Lists. 

// Each LinkedList node has an integer value as well as a next node pointing 
// to the next node in the list or to None / null if it's the tail of the 
// list. The value of each LinkedList node is always in the range of 0 - 9. 

// Note: your function must create and return a new Linked List, and you're 
// not allowed to modify either of the input Linked Lists. 

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //time: O(max(n, m))
  //space: O(max(n, m))
  //n = length of first Linked List
  //m = length of second Linked List
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // This variable will store a dummy node whose .next 
    //attribute will point to the head of a our new LL
    const newLinkedListHeadPointer = new LinkedList(0)
    //set currentNode to our newLinkedListHeadPointer
    let currentNode = newLinkedListHeadPointer
    //initialize carry as 0
    let carry = 0
  
    let nodeOne = linkedListOne
    let nodeTwo = linkedListTwo
  
    //while nodeOne is not null or nodeTwo is not null or carry is not 0
    while(nodeOne !== null || nodeTwo !== null || carry !== 0){
      //if nodeOne is not null, set valueOne to nodeOne.value, else set it to 0
      const valueOne = nodeOne !== null ? nodeOne.value : 0
      //if nodeTwo is not null, set valueTwo to nodeTwo.value, else it to 0
      const valueTwo = nodeTwo !== null ? nodeTwo.value : 0
      //set sumOfValues to be valueOne plus valueTwo plus carry
      const sumOfValues = valueOne + valueTwo + carry
  
      //set newValue to be the remainder of sumOfValues divided by 10
      const newValue = sumOfValues % 10
      //set newNode to be a new instance of new LinkedList(value)
      const newNode = new LinkedList(newValue)
      //set currentNode.next to newNode
      currentNode.next = newNode
      //set currentNode to newNode
      currentNode = newNode
  
      //set carry to be the floor of sumOfValues divided by 10
      carry = Math.floor(sumOfValues / 10)
      //set nodeOne to be nodeOne.next if nodeOne is not null, else set it to null
      nodeOne = nodeOne !== null ? nodeOne.next : null
      //set nodeTwo to be nodeTwo.next if nodeTwo is not null, else set it to null
      nodeTwo = nodeTwo !== null ? nodeTwo.next : null
    }
    //exit while loop
    //return newLinkedListHeadPointer.next
      return newLinkedListHeadPointer.next;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.sumOfLinkedLists = sumOfLinkedLists;
  