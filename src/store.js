import { createStore, applyMiddleware, compose } from "redux";
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist'
import reducer from './reducers';
import {AsyncStorage} from 'react-native';
const logger = createLogger();


const store = createStore(
  reducer,
  {},
  compose(autoRehydrate(), applyMiddleware(logger))
);

const persistedStore = persistStore(store, {storage: AsyncStorage})

export default store;

export {persistedStore};
