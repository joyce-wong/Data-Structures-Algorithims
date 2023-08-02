// Stable Internships

// A company has hired N interns to each join one of N different teams. 
// Each intern has ranked their preferences for which teams they wish to join, 
// and each team has ranked their preferences for which interns they prefer. 

// Given these preferences, assign 1 intern to each team. These assignments 
// should be "stable," meaning that there is no unmatched pair of an intern
// and a team such that both that intern and that team would prefer they
// be matched with each other. 

// In the case there are multiple valid stable matchings, the solution that is 
// most optimal for the interns should be chosen(i.e. every intern should be matched
// with the best possible team for them).

// Your function should take in 2 2-dimensional lists, one for interns and one
// for teams. Each inner list represents a single intern or team's preferences,
// ranked from most preferable to least preferable. These lists will always be 
// of length N, with integers as elements. Each of these integers corresponds to 
// the index of the team/intern being ranked. Your function should return a 
// 2-dimensional list of matchings in no particular order. Each matching should be
// in the format[internIndex, teamIndex].

//n = number of interns and teams
//time = O(n^2)
//space = O(n^2)
function stableInternships(interns, teams) {
    //create an object to store chosenInterns
    const chosenInterns = {}
    //use freeInterns to map an index to each intern
    const freeInterns = interns.map((_, i) => i)
    //declare currentInternChoices as a new Array with the length
    //of interns, filled with 0s
    const currentInternChoices = new Array(interns.length).fill(0)
    //declare teamMaps a an empty array
    const teamMaps = []
    //loop through teams array
    for(const team of teams){
      //declare rank to store how teams have ranked interns
      const rank = {}
      //for each team, set the internNum as the key in the rank object
      //and set it's value to the index
      team.forEach((internNum, i) => {
        rank[internNum] = i
      })
      //push the rank into teamMaps array
      teamMaps.push(rank)
    }
  //while loop through freeInterns
    while(freeInterns.length > 0){
      //keep track of current interNum
      const internNum = freeInterns.pop()
  
      //each intern is tracked by internNum key
      const intern = interns[internNum]
      //teamPreference is tracked by intern at currentInternChoices[interNum]
      const teamPreference = intern[currentInternChoices[internNum]]
      //add 1 to currentInternChoices[internNum] each cycle
      currentInternChoices[internNum] += 1
  
      //if the teamPreference is not in chosenInterns
      if(!(teamPreference in chosenInterns)){
        //add teamPreference to chosenInterns and set it to internNum
        chosenInterns[teamPreference] = internNum
        //continue
        continue
      }
  
      //previousIntern is the chosenIntern at teamPreference
      const previousIntern = chosenInterns[teamPreference]
      //set previousInternRank to teamMaps at teamPreference at previousIntern
      const previousInternRank = teamMaps[teamPreference][previousIntern]
      //set currentInternRank to teamMaps at teamPreference at internNum
      const currentInternRank = teamMaps[teamPreference][internNum]
  //if currentInternRank is less than previousInternRank
      if(currentInternRank < previousInternRank){
        //push previousIntern into freeInterns
        freeInterns.push(previousIntern)
        //set chosenInterns at teamPreference to internNum
        chosenInterns[teamPreference] = internNum
        //otherwise push internNum into freeInterns
      } else {
        freeInterns.push(internNum)
      }
    }
  //set matches to an array of key, value pairs in chosenInterns mapped
    //over with internNum as 0th element and the number value of teamNum
    //as the 1st element
    const matches = Object.entries(chosenInterns).map(([teamNum, internNum]) => [
      internNum, 
      parseInt(teamNum),
  ])
    //return matches
    return matches
  }
  
  // Do not edit the line below.
  exports.stableInternships = stableInternships;
  
