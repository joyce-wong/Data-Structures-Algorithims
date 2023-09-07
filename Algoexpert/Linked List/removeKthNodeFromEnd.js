// Remove Kth Node From End 

// Write a function that takes in the head of a Singly Linked List 
// and an integer k and removes the kth node from the end of the list. 

// The removal should be done in place, meaning that the original data
// structure should be mutated(no new structure should be created).

// Furthermore, the input head of the linked list should remain the 
// head of the linked list after the removal is done, even if the 
// head is the node that's supposed to be removed. In other words, 
// if the head is the node that's supposed to be removed, your function 
// should simply mutate its value and next pointer. 

// Note that your function doesn't need to return anything. 

// You can assume that the input Linked List will always have at least 
// two nodes and, more specifically, at least k nodes. 

// Each LinkedList node has an integer value as well as a next node pointing to 
// the next node in the list or to None/null if it's the tail of the list. 

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //time: O(n)
  //space: O(1)
  function removeKthNodeFromEnd(head, k) {
    //set counter at head of linked list
    let counter = 1
    let first = head
    let second = head
    //count up to k
    while(counter <= k){
      //move the second pointer each loop
      second = second.next
      counter++
    }
    //edge case if you have to remove the head of the linked list
    if(second === null){
      head.value = head.next.value
      head.next = head.next.next
      return
    }
    //try to get to the end of the linked list using second
    //move both pointers evenly
    while(second.next !== null){
      second = second.next
      first = first.next
  }
    //remove the node at the first pointer
      first.next = first.next.next
    }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  