// semesters required
// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.

test_00:
const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
semestersRequired(numCourses, prereqs); // -> 3
test_01:
const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
semestersRequired(numCourses, prereqs); // -> 5
test_02:
const numCourses = 5;
const prereqs = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];
semestersRequired(numCourses, prereqs); // -> 2
test_03:
const numCourses = 12;
const prereqs = [];
semestersRequired(numCourses, prereqs); // -> 1
test_04:
const numCourses = 3;
const prereqs = [
  [0, 2],
  [0, 1],
  [1, 2],
];
semestersRequired(numCourses, prereqs); // -> 3
test_05:
const numCourses = 6;
const prereqs = [
  [3, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 5],
];
semestersRequired(numCourses, prereqs); // -> 2

// p = number of prereqs
// c = number of courses
//time O(p)
//space O(c)
//depth first recursive with 2 helper functions
const semestersRequired = (numCourses, prereqs) => {
    const graph = fillGraph(numCourses, prereqs)
    const time = {}
    for(let node in graph){
      if(graph[node].length === 0) time[node] = 1
    }
    
    for(let node in graph){
      traverseTime(graph, node, time)
    }
    return Math.max(...Object.values(time))
  };
  
  const traverseTime = (graph, node, time) => {
    if(node in time) return time[node]
    let max = 0
    for(let neighbor of graph[node]){
      const neighborDistance = traverseTime(graph, neighbor, time)
      if (neighborDistance > max) max = neighborDistance
    }
    time[node] = max + 1
    return time[node]
  }
  
  const fillGraph = (numCourses, prereqs) => {
    const graph = {}
    
    for(let i = 0; i < numCourses; i++){
      graph[i] = []
    }
    for(let prereq of prereqs){
      const [a, b] = prereq
      graph[a].push(b)
    }
    
    return graph
  }
  
  module.exports = {
    semestersRequired,
  };
  