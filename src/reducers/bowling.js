export default function bowling(state=[], action){
  switch(action.type){
    case 'ADD_BOWLER':
       return [...state, {
         name: action.name,
         maidens: 0,
         runs: 0,
         balls: 0,
         wickets: 0,
         innings: action.innings
       }]
     case 'UPDATE_BOWLER':
       return state.map((bowl) => bowl.name == action.name ? {
         ...bowl,
         runs: parseInt(bowl.runs) + parseInt(action.runs),
         balls:  bowl.balls + (action.is_ball ? 1 : 0)
       } : bowl)
    case 'UPDATE_WICKETS':
       return state.map((bowl) => bowl.name == action.name ? {
         ...bowl,
         wickets: bowl.wickets + 1
       }: bowl)
    default:
       return state;
  }
}
