export default function playing(state= {innings: 1, runs: 0, wickets: 0, overs: 0, balls: 0, current_over: 0} , action){
  switch(action.type){
    case 'UPDATE_SCORE':
       return {...state,
               runs: state.runs + parseInt(action.runs),
               balls: state.balls + parseInt(action.balls)}
    case 'UPDATE_OVER':
       return {...state,
               overs: action.over}

    case 'ADD_WICKET':
       return {...state, wickets: state.wickets + 1}

    default:
      return state
  }
}
