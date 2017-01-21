export function selectBowler(bowler, over){
  return {
    type: 'BOWLER_SELECTED',
    bowler,
    over
  }
}
