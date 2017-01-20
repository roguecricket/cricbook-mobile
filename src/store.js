import { createStore, applyMiddleware, compose } from "redux";
import createLogger from 'redux-logger';
import reducer from './reducers';
const logger = createLogger();


const store = createStore(
  reducer,
  applyMiddleware(logger)
);


export default store;
