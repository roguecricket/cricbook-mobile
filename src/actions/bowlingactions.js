export function addBowler(name){
  return {
    type: "ADD_BOWLER",
    name
  }
}

export function updateBowler(name, is_ball, runs){
  return {
    type: "UPDATE_BOWLER",
    name: name,
    is_ball: is_ball,
    runs: runs
  }
}

export function updateWickets(bowlername){
  return {
    type: "UPDATE_WICKETS",
    name: bowlername
  }
}
