export function nextOver(over, bowler){
  return {
    type: "NEXT_OVER",
    bowler,
    over
  }
}

export function nextBall(run, over, total){
  return {
    type: "NEXT_BALL",
    run: run,
    over: over,
    total: total
  }
}
