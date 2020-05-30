import { BabuAdatok } from '../domain/adatok';
import { Modify_Date, ATHELYEZ } from './actions';
const initialState= { item: BabuAdatok };

export function BabuReducer(state = initialState, action) {
  switch (action.type) {
    case Modify_Date: {

      if(state.item[0].szin === "" && state.item[1].szin === "" && state.item[2].szin === "" && state.item[3].szin === "" && state.item[4].szin === "" && state.item[5].szin === "" && state.item[6].szin === "" && state.item[7].szin === "" && state.item[8].szin === "" && state.item[9].szin === "" && state.item[10].szin === "" && state.item[11].szin === ""){
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[0].szin === "green"){
        state.item[0].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[1].szin === "green"){
        state.item[1].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[2].szin === "green"){
        state.item[2].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[3].szin === "green"){
        state.item[3].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[4].szin === "green"){
        state.item[4].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[5].szin === "green"){
        state.item[5].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[6].szin === "green"){
        state.item[6].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[7].szin === "green"){
        state.item[7].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[8].szin === "green"){
        state.item[8].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[9].szin === "green"){
        state.item[9].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[10].szin === "green"){
        state.item[10].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      else if(state.item[11].szin === "green"){
        state.item[11].szin = "";
        state.item[action.payload.id].szin = "green";
      }
      return{ item: [...state.item]}
    }
    case ATHELYEZ: {
      return{ item: [...state.item]}
    }
    default: {
      return state;
    }
  }
}