import { BabuAdatok } from '../domain/adatok';
import { LETREHOZ } from './socketActions';
const initialState= { item: BabuAdatok };

export function socket(state = initialState, action) {
  switch (action.type) {
    case LETREHOZ: {
        console.log("action.payload.id")
        state.item[12] = action.payload.id;
      return{ item: [...state.item]}
    }
    default: {
      return state;
    }
  }
}