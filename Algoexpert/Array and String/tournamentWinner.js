
// Tournament Winner

// There's an algorithms tournament taking place in which teams of programmers compete
// against each other to solve algorithmic problems as fast as possible.
// Teams compete in a round robin, where each team faces off against all other teams.
// Only two teams compete agains each other at a time, and for each competition,
// one team is designated the home team, while the other team is the away team.
// In each competition there's always one winner and one loser; there are no ties.
// A team receives 3 points if it wins and 0 points if it loses. The winner of 
// the tournament is the team that receives the most amount of points.

// Given an array of pairs representing the teams that have competed against
// each other and an array containing the results of each competition, write
// a function that returns the winner of the tournament. The input arrays are 
// named competitions and results, respectively. The competitions array has 
// elements in the form of [homeTeam, awayTeam], where each team is a string
// of at most 30 characters representing the name of the team. The results array
// contains information aout the winner of each corresponding competition
// in the competitions array. Specifically, the results[i] denotes the winner
// of competitions[i] where a 1 in the results array means that the home team in
// the corresponding competition won and a 0 means that the away team won.

// It's guaranteed that exactly one team will win the tournament and that each team
// will compete against all other teams exactly once. It's also guaranteed that the
// tournament will always have at least two teams. 

// function tournamentWinner(competitions, results) {
//     //declare variable for winner string
//     let winner = ''
//     //declare variable for scoreboard hashmap
//     let scoreboard = {}
//     //for loop through results to access the index
//     for(let i = 0; i < results.length; i++){
//       let result = results[i]
//       let competition = competitions[i]
//       let homeTeam = competition[0]
//       let awayTeam = competition[1]
//     //for each result, award the points for competitions to winning team using 
//     //scoreboard object
//       if(result === 1){
//         if(!(homeTeam in scoreboard)){
//           scoreboard[homeTeam] = 3
//         } else {
//           scoreboard[homeTeam] += 3
//         }
//       } else {
//         if(!(awayTeam in scoreboard)){
//           scoreboard[awayTeam] = 3
//         } else {
//           scoreboard[awayTeam] += 3
//         }
//       }
//     }
//     //declare variable for highest score as the highest value in scoreboard
//     const highestScore = Math.max(...Object.values(scoreboard))
//     //loop through scoreboard object using team as key
//       for(let team in scoreboard){
//         //if the score belonging to the team is the highest score
//         if(scoreboard[team] === highestScore){
//           //that team is the winner
//           winner = team
//           //early break to save time
//           break
//         }
//       }
//     //return the name of the winning team
//     return winner
//   }

//n = length of results array
//k = number of teams
//time: O(n)
//space: O(k)
// function tournamentWinner(competitions, results) {
//     //declare bestTeam variable as empty string
//     let bestTeam = ''
//     //declare scoreboard hashmap with empty team name and 0 as score
//     let scoreboard = {'': 0}
//     //for loop through results array
//     for(let i = 0; i < results.length; i++){
//       const result = results[i]
//       const competition = competitions[i]
//       //declare variables for homeTeam and awayTeam
//       const homeTeam = competition[0]
//       const awayTeam = competition[1]
//       //if the result is 1, award points to the home team
//       if(result === 1){
//         if(!(homeTeam in scoreboard)){
//           scoreboard[homeTeam] = 3
//           //check to see if you should replace the best team with home team
//           if(scoreboard[homeTeam] > scoreboard[bestTeam]) bestTeam = homeTeam
//         } else {
//           scoreboard[homeTeam] += 3
//           if(scoreboard[homeTeam] > scoreboard[bestTeam]) bestTeam = homeTeam
//         }
//         //otherwise award points to the away team
//       } else {
//         if(!(awayTeam in scoreboard)){
//           scoreboard[awayTeam] = 3
//           //check to see if you should replace best team with away team
//           if(scoreboard[awayTeam] > scoreboard[bestTeam]) bestTeam = awayTeam
//         } else {
//           scoreboard[awayTeam] += 3
//           if(scoreboard[awayTeam] > scoreboard[bestTeam]) bestTeam = awayTeam
//         }
//       }
//     }
//     //return name of best team
//     return bestTeam;
//   }
  
//k = number of teams
//time: O(n)
//space: O(k)
//declare variable homeTeamWon as 1 for readability
const homeTeamWon = 1
function tournamentWinner(competitions, results) {
  //declare bestTeam as empty string
  let bestTeam = ''
  //declare scoreboard with empty string and 0 as value to start
  let scoreboard = {'': 0}
  //for loop through results
  for(let i = 0; i < results.length; i++){
    let result = results[i]
    let competition = competitions[i]
    //destructure competition into homeTeam and awayTeam
     const [homeTeam, awayTeam] = competition
    //ternary to get name of winningTeam
    let winningTeam = result === homeTeamWon ? homeTeam : awayTeam
    //award points helper function adds points to scoreboard
    awardPoints(winningTeam, 3, scoreboard)
    //if the winningTeam has a higher score than bestTeam, replace bestTeam with winningTeam
    if(scoreboard[winningTeam] > scoreboard[bestTeam]){
      bestTeam = winningTeam
    }
  }
  //return name of bestTeam
  return bestTeam;
}

function awardPoints(team, points, scoreboard){
  if(!(team in scoreboard)) scoreboard[team] = 0

  scoreboard[team] += points
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
  