// Class Photos

// It's photo day at the local school, and you're the photographer assigned to
// take class photos. The class that you'll be photographing has an even number
// of students, and all these students are wearing red or blue shirts. In fact,
// exactly half of the class is wearing red shirts, and the other half is 
// wearing blue shirts. You're responsible for arranging the students in two
// rows before taking the photo. Each row should contain the same number of
// the students and should adhere to the following guidelines:

// 1. All students wearing red shirts must be in the same row.
// 2. All students wearing blue shirts must be in the same row.
// 3. Each student in the back row must be strictly taller than the student
// directly in front of them in the front row. 

// You're given two input arrays: one containing the heights of all the students
// with red shirts and another one containing the heights of all the students
// with blue shirts. These arrays will always have the same length, and each 
// height will be a positive integer. Write a function that returns whether 
// or not a class photo that follows the stated guidelines can be taken. 

// Note: you can assume that each class has at least 2 students. 

//n = number of students
//time: O(nlog(n))
//space: O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
    //sort the input arrays in descending order in place
    redShirtHeights = redShirtHeights.sort((a, b) => b - a)
    blueShirtHeights = blueShirtHeights.sort((a, b) => b - a)
    //ternary sets the backRow to the array with maximum value
    let backRow = Math.max(...redShirtHeights) > Math.max(...blueShirtHeights) ?  redShirtHeights : blueShirtHeights
    //ternary sets the frontRow to the other array
    let frontRow = backRow === redShirtHeights ? blueShirtHeights : redShirtHeights
    //loop through the backRow
    for(let i = 0; i < backRow.length; i++){
      let frontRowStudent = frontRow[i]
      let backRowStudent = backRow[i]
      //check to see if the backRowStudent is ever shorter than or equal height to
      //frontRowStudent, if so, return false
      if(backRowStudent <= frontRowStudent){
        return false
      }
    }
    //if you get to the end and all backRowStudents are taller than their
    //paired frontRowStudent, return true
    return true
  }
  
  // Do not edit the line below.
  exports.classPhotos = classPhotos;
  