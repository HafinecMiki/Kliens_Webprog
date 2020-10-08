import { createStore, combineReducers } from 'redux';
import { BabuReducer } from './BabuReducer';
import { Player1Reducer } from './Player1Reducer';
import { JatekReducer } from './JatekReducer';
import { Player2Reducer } from './Player2Reducer';

export const rootReducer = combineReducers({ 
  babu: BabuReducer,
  player1: Player1Reducer,
  player2: Player2Reducer,
  jatek: JatekReducer,
});

export function configureStore() {
  return createStore(rootReducer,{}/*
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);
}
