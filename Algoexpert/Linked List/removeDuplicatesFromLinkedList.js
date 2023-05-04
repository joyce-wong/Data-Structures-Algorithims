// Remove Duplicates From Linked List

// You're given the head of a Singly Linked List whose nodes are in sorted order
// with respect to their values. Write a function that returns a modified version
// of the Linked List that doesn't contain any nodes with duplicate values. The 
// Linked List should be modified in place (i.e., you shouldn't create a brand
// new list), and the modified Linked List should still have its nodes sorted
// with respect to their values.

// Each LinkedList node has an integer value as well as a next node pointing 
// to the next node in the list or to None/null if it's the tail of the list.

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //n = number of nodes in LinkedList
  //time: O(n)
  //space: O(1)
  function removeDuplicatesFromLinkedList(linkedList) {
    //declare current to be head of linkedList
    let current = linkedList
    //while loop when current is not null
    while( current !== null){
      //declare nextDistinct to be current.next
      let nextDistinct = current.next
      //inner while loop while nextDistinct is not null and the
      //nextDistinct.value equals current.value
        while(nextDistinct !== null && nextDistinct.value === current.value){
          //set the nextDistinct pointer to nextDistinct.next
          //moves over nextDistinct pointer until the end of duplicate value streak
          nextDistinct = nextDistinct.next
      }
      //after the values are distinct
      //set current.next to nextDistinct
      //this deletes the duplicate values in place
        current.next = nextDistinct
      //set current pointer to nextDistinct
        current = nextDistinct
    }
    //exit loop after all nodes have been iterated over and return head of linkedList
    return linkedList;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  