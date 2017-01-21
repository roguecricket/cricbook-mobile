export default function currentover(state={}, action){
  switch(action.type){
    case 'BOWLER_SELECTED':
      return {...state,
              bowler: action.bowler,
              over: action.over}
    default:
      return state;
  }
}
