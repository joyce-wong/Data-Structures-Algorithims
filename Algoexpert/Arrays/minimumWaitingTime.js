// Minimum Waiting Time

// You're given a non-empty array of positive integers representing the amounts 
// of time that specific queries take to execute. Only one query can be executed
// at a time, but the queries can be executed in any order.

// A query's waiting time is defined as the amount of time that it must wait before
// its execution starts. In other words, if a query is executed second, then its
// waiting time is the duration of the first query; if a query is executed third, 
// then its waiting time is the sum of the durations of the first two queries.

// Write a function that returns the minimum amount of total waiting time for
// all of the queries. For example, if you're given the queries of durations
// [1, 4, 5], then the total waiting time if the queries were executed in the 
// order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. The first query of 
// duration 5 would be executed immediately, so its waiting time would be 0,
// the second query of duration 1 would have to wait 5 seconds (the duration
//     of the first query) to be executed, and the last query would have to
//     wait the duration of the first two queries before being executed.
//     Note: you're allowed to mutate the input array.

//n = number of queries
//time: O(nlogn)
//space: O(1)
function minimumWaitingTime(queries) {
    //declare variable to track wait time
      let waitTime = 0
      //sort queries in place in ascending order to minimize wait time
      queries = queries.sort((a, b) => a - b)
      //loop through queries leaving out last element
      for(let i = 0; i < queries.length; i++){
        let queryTime = queries[i]
        //declare remainingQueries to be the length of queries array - (i + 1)
        //note it must be i + 1 because we initialized i as 0
        let remainingQueries = queries.length - (i + 1)
        //multiply the remaining queries by queryTime and add to waitTime
        //we do this because every time we run the query in ascending order,
        //we know that each of the remaining queries need to wait that amount
        //of time to run their query
        waitTime += remainingQueries * queryTime
      }
      //exit loop and return waitTime
      return waitTime
    }
    
    // Do not edit the line below.
    exports.minimumWaitingTime = minimumWaitingTime;