// Task Assignment

// You're given an integer k representing a number of workers and an array 
// of positive integers representing durations of tasks that must be 
// completed by the workers. Specifically, each worker must complete 
// two unique tasks and can only work on one task at a time. The number 
// of tasks will always be equal to 2k such that each worker always has 
// exactly two tasks to complete. All tasks are independent of one another 
// and can be completed in any order. Workers will complete their assigned
// tasks in parallel, and the time taken to complete all tasks will 
// be equal to the time taken to complete the longest pair of tasks.

// Write a function that returns the optimal assignment of tasks to each
// worker such that the tasks are completed as fast as possible. Your 
// function should return a list of pairs, where each pair stores the 
// indices of the tasks that should be completed by one worker. The pairs
// should be in the following format: [task1, task2], where the order of 
// task1 and task2 doesn't matter. Your function can return the pairs in 
// any order. If multiple optimal assignments exist, any correct answer
// will be accepted. 

// Note: you'll always be given at least one worker(i.e., k will always be greater than 0).

//n = number of tasks
//time: O(nlog(n)) time
//space: O(n)
function taskAssignment(k, tasks) {
    //declare pairedTasks array to track which tasks are paired
    const pairedTasks = []
    //declare taskDurationToIndices as call on helper function
    //getTaskDurationToIndices
    const taskDurationToIndices = getTaskDurationToIndices(tasks)
  
    //sorted the tasks and store in variable sortedTasks
    const sortedTasks = [...tasks].sort((a, b) => a - b)
    //loop through k workers
    for(let idx = 0; idx < k; idx++){
      //task1Duration will be sortedTasks array at idx
      const task1Duration = sortedTasks[idx]
      //indicesWithTask1Duration will be taskDurationToIndices at task1Duration
      const indicesWithTask1Duration = taskDurationToIndices[task1Duration]
      //stored that popped value from indicesWithTask1Duration into task1Index
      const task1Index = indicesWithTask1Duration.pop()
  
      //store tasks.length - 1 - idx into task2SortedIndex
      const task2SortedIndex = tasks.length - 1 - idx
      //store task2Duration as sortedTasks[task2SortedIndex]
      const task2Duration = sortedTasks[task2SortedIndex]
        //store indicesWithTask2Duration variable as taskDurationToIndices at task2Duration index
      const indicesWithTask2Duration = taskDurationToIndices[task2Duration]
      //stored the popped value from indicesWithTask2Duration in task2Index variable
      const task2Index = indicesWithTask2Duration.pop()
  
      //each loop, push [task1Index, task2Index] into pairedTasks
      pairedTasks.push([task1Index, task2Index])
    }
    //exit loop and return pairedTasks
    return pairedTasks;
  }
  
  //helper function that stores taskDuration as key in object with [idx] as value
  function getTaskDurationToIndices(tasks){
    //create taskDurationToIndices variable as empty object
    const taskDurationToIndices = {}
  
    //loop through tasks
    for(let idx = 0; idx < tasks.length; idx++){
      //declare the taskDuration as the tasks at each idx
      const taskDuration = tasks[idx]
      //if the taskDuration is in taskDurationToIndices
      if(taskDuration in taskDurationToIndices){
        //push the idx into taskDurationToIndices at taskDuration key
        taskDurationToIndices[taskDuration].push(idx)
      } else {
        //otherwise add the [idx] to taskDurationToIndices[taskDuration]
        taskDurationToIndices[taskDuration] = [idx]
      }
    }
    //return taskDurationToIndices
    return taskDurationToIndices
  }
  
  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;
  