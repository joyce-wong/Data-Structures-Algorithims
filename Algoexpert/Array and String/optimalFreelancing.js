// Optimal Freelancing

// You recently started freelance software development and have been offered
// a variety of job opportunities. Each job has a deadline, meaning there is no 
// value in completing the work after the deadline. Additionally, each job has 
// an associated payment representing the profit for completing that job. 
// Given this information, write a function that returns the maximum profit that 
// can be obtained in a 7-day period. 

// Each job will take 1 full day to complete, and the deadline will be given as 
// the number of days left to complete the job. For example if a job has a 
// deadline of 1, then it can only be completed if it is the first job 
// worked on. If a job has a deadline of 2, then it could be started 
// on the first or second day. 

// Note: There is no requirement to complete all of the jobs. Only one job 
// can be worked on at a time, meaning that in some scenarios it will be
// impossible to complete them all. 

//n = number of jobs
//space: O(1)
//time: O(n * log(n))
function optimalFreelancing(jobs) {
    //declare constant to represent LENGTH_OF_WEEK
    const LENGTH_OF_WEEK = 7
    //declare variable to track profit over the week
    let profit = 0
    //sort the jobs array in descending order by payment
    jobs.sort((jobA, jobB) => jobB.payment - jobA.payment)
    //declare a new array with 7 elements that are false
    //timeline = [false, false, false, false, false, false, false]
    const timeline = new Array(LENGTH_OF_WEEK).fill(false)
    //loop over the jobs array
    for(let job of jobs){
      //store the lesser of job.deadline or 7 as maxTime
      const maxTime = Math.min(job.deadline, LENGTH_OF_WEEK)
      //for loop through maxTime - 1 since position of time
      //starts at 0th index, and decrement by 1 each cycle
      for(let time = maxTime - 1; time >= 0; time--){
        //if the element is false meaning no job is booked
        if(timeline[time] === false){
          //mark it true to take the job
          timeline[time] = true
          //job.payment to the profit total
          profit += job.payment
          break
        }
      }
    }
    //return profit total
    return profit
  }
  
  // Do not edit the line below.
  exports.optimalFreelancing = optimalFreelancing;
  