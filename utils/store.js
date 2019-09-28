import {createStore, combineReducers} from 'redux';
import {numberReducer} from './reducer';

export const store = createStore(
  combineReducers({
    number: numberReducer,
  }),
);
