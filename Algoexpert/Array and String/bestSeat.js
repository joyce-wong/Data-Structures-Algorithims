// Best Seat

// You walk into a theatre you're about to see a show in. The usher within the theatre
// walks you to your row and mentions you're allowed to sit anywhere within the
// given row. Naturally you'd like to sit in the seat that gives you the most space.
// You also would prefer this space to be evenly distributed on either side of you 
// (e.g. if there are three empty seats in a row, you would prefer to sit in the
// middle of those three seats).

// Given the theatre row represented as an integer array, return the seat index
// where you should sit. Ones represent occupied seats and zeroes represent 
// empty seats. 

// You may assume that someone is always sitting in the first and last seat of 
// the row. Whereever there are two equally good seats, you should sit in the 
// seat with the lower index. If there is no seat to sit in, return -1. The given
// array will always have a length of at least one and contain only ones and
// zeroes. 

//n = number of seats
//time: O(n)
//space: O(1)
function bestSeat(seats) {
    //declare best as -1 since you return -1 if there are no empty seats
    let best = -1
    //declare mostSeats as 0, it will be the length of the longest
    //contiguous streak of 0s in the array
    let mostSeats = 0
    //declare left pointer at 0 index
    let left = 0
    //while left pointer is within bounds of seats
    while(left < seats.length){
      //declare right pointer to the index 1 right of left
      let right = left + 1
      //while right pointer is within bounds and seats at that index
      //are empty
      while(right < seats.length && seats[right] === 0){
        //increment right pointer
        right++
      }
      //calculate length of emptySeats by subtracting left index from right 
      //index and then subtracting 1 since indices start at 0
      let emptySeats = right - left - 1
      //if emptySeats is more than mostSeats
      if (emptySeats > mostSeats){
        //best will be (left index plus right index ) divided by 2 and then 
        //rounded down
        best = Math.floor((left + right) / 2)
        //set mostSeats to equal emptySeats
        mostSeats = emptySeats
      }
      //set left index to be right index value
      left = right
    }
    //return best index (in the middle of the longest continguous streak
    //of 0s within seats array)
    return best
  }
  
  // Do not edit the line below.
  exports.bestSeat = bestSeat;
  