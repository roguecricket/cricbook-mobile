export default function overs(state = [], action) {
  switch (action.type) {
    case "NEXT_OVER":
      return [...state, {
        innings: action.innings,
        over: action.over,
        bowler: action.bowler,
        runs: 0,
        figures: []
      }]
    case "NEXT_BALL":
      return state.map((over) => over.over == action.over ? { ...over,
        figures: [...over.figures, action.run],
        runs: parseInt(over.runs) + action.total
      } : over)
    default:
      return state
  }
}
