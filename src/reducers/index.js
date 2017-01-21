import { combineReducers } from "redux";
import details from './details';
import playing from './playing';
import overs from './overs';
import currentover from './currentover';
import bowling from './bowling';
import batting from './batting';


const reducer = combineReducers({
  details,
  playing,
  overs,
  currentover,
  bowling,
  batting
});

export default reducer;
