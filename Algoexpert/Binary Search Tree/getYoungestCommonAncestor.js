// Youngest Common Ancestor 

// You're given three inputs, all of which are instances of an AncestralTree
// class that have an ancestor property pointing to their youngest ancestor.
// The first input is the top ancestor in an ancestral (i.e., the only instance
// that has no ancestor--its ancestor property points to None/ null),
// and the other two inputs are descendants in the ancestral tree. 

// Write a function that returns the youngest common ancestor to the two 
// descendants. 

// Note that a descendant is considered its own ancestor. So in the simple 
// ancestral tree below, the youngest common ancestor to nodes A and B 
// is node A. 

// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  //d = depth of tree
  //time: O(d)
  //space: O(1)
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    //declare depthOne as call on helper function getDescendantDepth on descendantOne and topAncestor
    const depthOne = getDescendantDepth(descendantOne, topAncestor)
    //declare depthTwo as a call on helper function getDescendantDepth on descendantTwo and topAncestor
    const depthTwo = getDescendantDepth(descendantTwo, topAncestor)
    //if depthOne is more than depthTwo
    if(depthOne > depthTwo){
      //return call on helper function backtrackAncestralTree on descendantOne as the lowerDescendant 
      return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
    } else {
      //else return call on helper function backtrackAncestralTree on descendantTwo as the lowerDescendant
      return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)
    }
  }
  
  //helper function to getDescendantDepth
  function getDescendantDepth(descendant, topAncestor){
    //let depth = 0
    let depth = 0
    //while descendant is not equal to topAncestor
    while(descendant !== topAncestor){
      //increment depth by 1
      depth++
      //set descendant to descendant.ancestor
      descendant = descendant.ancestor
    }
    //return depth
    return depth
  }
  
  //helper function that backtracks up the ancestral tree diff number of levels
  //and then returns lowerDescendant 
  function backtrackAncestralTree(lowerDescendant, higherDescendant, diff){
    //while diff is more than 0 
    while(diff > 0){
      //set lowerDescendant to lowerDescendant.ancestor
      lowerDescendant = lowerDescendant.ancestor
      //decrement diff
      diff -= 1
    }
    //while lowerDescendant is not equal to higherDescendant
    while(lowerDescendant !== higherDescendant){
      //set lowerDescendant to lowerDescendant.ancestor
      lowerDescendant = lowerDescendant.ancestor
      //set higherDescendant to higherDescendant.ancestor
      higherDescendant = higherDescendant.ancestor
    }
    //return lowerDescendant
    return lowerDescendant
  }
  
  // Do not edit the lines below.
  exports.AncestralTree = AncestralTree;
  exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
  