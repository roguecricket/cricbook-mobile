export default function details(state={}, action){
  switch(action.type){
    case 'UPDATE_NAME':
       return {...state, name: action.name}
    default:
       return state
  }
}
