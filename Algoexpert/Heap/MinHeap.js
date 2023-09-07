// Implement a MinHeap class that supports:

// Building a Min Heap from an input array of integers. 
// Inserting integers in the heap. 
// Removing the heap's minimum/root value. 
// Peeking a the heap's minimum/root value.
// Sifting integers up and down the heap, which is to be used when inserting 
// and removing values. 

// Note that the heap should be represented in the form of an array. 

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  
    //time: O(n)
    //space: O(1)
    buildHeap(array) {
      const firstParentIdx = Math.floor((array.length - 2)/2)
      for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--){
        this.siftDown(currentIdx, array.length - 1, array)
      }
      return array
    }
  
    //time: O(log(n))
    //space: O(1)
    siftDown(currentIdx, endIdx, heap) {
      let childOneIdx = currentIdx * 2 + 1
      while(childOneIdx <= endIdx){
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
        let idxToSwap
        if(childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]){
          idxToSwap = childTwoIdx
        } else {
          idxToSwap = childOneIdx
        }
        if(heap[idxToSwap] < heap[currentIdx]){
          this.swap(currentIdx, idxToSwap, heap)
          currentIdx = idxToSwap
          childOneIdx = currentIdx * 2 + 1
        } else {
          return
        }
      }
    }
  
  //time: O(log(n))
      //space: O(1)
    siftUp(currentIdx, heap) {
      let parentIdx = Math.floor((currentIdx - 1) / 2)
      while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]){
        this.swap(currentIdx, parentIdx, heap)
        currentIdx = parentIdx
        parentIdx = Math.floor((currentIdx - 1) / 2)
      }
    }
  
  //time: O(1)
  //space: O(1)
    peek() {
      return this.heap[0]
    }
  
  
  //time: O(log(n))
  //space: O(1)
    remove() {
      this.swap(0, this.heap.length - 1, this.heap)
      const valueToRemove = this.heap.pop()
      this.siftDown(0, this.heap.length - 1, this.heap)
      return valueToRemove
    }
  
      //time: O(log(n))
      //space: O(1)
    insert(value) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1, this.heap)
    }
  
    swap(i, j, heap){
      const temp = heap[j]
      heap[j] = heap[i]
      heap[i] = temp
    }
  }
  
  // Do not edit the line below.
  exports.MinHeap = MinHeap;
  