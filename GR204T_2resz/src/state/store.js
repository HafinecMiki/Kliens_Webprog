import { createStore, combineReducers } from 'redux';
import { BabuReducer } from './BabuReducer';
import { Player1Reducer } from './Player1Reducer';
import { JatekReducer } from './JatekReducer';

export const rootReducer = combineReducers({ 
  babu: BabuReducer,
  player1: Player1Reducer,
  jatek: JatekReducer,
});

export function configureStore() {
  return createStore(rootReducer,{}
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
