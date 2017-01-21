
export function addBatsman(name, strike) {
  return {
    type: 'ADD_NEW_BATSMAN',
    name,
    strike
  }
}

export function addPlayer(name) {
  return {
    type: 'ADD_NEW_PLAYER',
    name
  }
}

export function toogleStrike(){
  return {
    type: 'TOOGLE_STRIKE'
  }
}


export function updateRuns(runs, is_ball){
  return {
    type: "UPDATE_RUNS",
    runs,
    is_ball
  }
}


export function wicket(){
  return {
    type: "WICKET"
  }
}

export function batsmanOut(name){
  return {
    type: "BATSMAN_OUT",
    name
  }
}
