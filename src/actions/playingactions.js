export function updateScore(runs, balls){
  return {
    type: 'UPDATE_SCORE',
    runs: runs,
    balls
  }
}


export function updateOver(over){
  return {
    type: "UPDATE_OVER",
    over: over
  }
}

export function addWicket(){
  return {
    type: 'ADD_WICKET'
  }
}
