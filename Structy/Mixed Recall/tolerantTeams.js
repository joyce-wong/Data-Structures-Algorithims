// tolerant teams
// Write a function, tolerantTeams, that takes in an array of rivalries as an argument. A rivalry is a pair of people who should not be placed on the same team. The function should return a boolean indicating whether or not it is possible to separate people into two teams, without rivals being on the same team. The two teams formed do not have to be the same size.

test_00:
tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader']
]); // -> true
test_01:
tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader'],
  ['raj', 'philip'],
  ['seb', 'raj']
]); // -> false
test_02:
tolerantTeams([
  ['cindy', 'anj'],
  ['alex', 'matt'],
  ['alex', 'cindy'],
  ['anj', 'matt'],
  ['brando', 'matt']
]); // -> true
test_03:
tolerantTeams([
  ['alex', 'anj'],
  ['alex', 'matt'],
  ['alex', 'cindy'],
  ['anj', 'matt'],
  ['brando', 'matt']
]); // -> false
test_04:
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
test_05:
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
test_06:
tolerantTeams([
  ['alan', 'jj'],
  ['jj', 'richard'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> true
test_07:
tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['betty', 'christine'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]); // -> false

const tolerantTeams = (rivalries) => {
    const coloring = {}
    const graph = buildGraph(rivalries)
    for(let node in graph){
      if(!(node in coloring) && !biPartite(graph, node, coloring, false)){
        return false
      }
    }
    return true
  };
  
  const biPartite = (graph, node, coloring, currentColor) => {
    if((node in coloring)) return coloring[node] === currentColor
    coloring[node] = currentColor
      for(let neighbor of graph[node]){
        if(!biPartite(graph, neighbor, coloring, !currentColor)) return false
      }
    return true
  }
  
  const buildGraph = (rivalries) => {
    const graph = {}
    for(let edge of rivalries){
      const [a, b] = edge
      if(!(a in graph)) graph[a] = []
      if(!(b in graph)) graph[b] = []
      graph[a].push(b)
      graph[b].push(a)
    }
    return graph
  }
  
  module.exports = {
    tolerantTeams,
  };
  