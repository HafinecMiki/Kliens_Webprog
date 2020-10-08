import { BabuAdatok } from '../domain/adatok';
import { Modify_Date, ATHELYEZ, Modify_Date2, ATHELYEZ2 } from './actions';
import { LETREHOZ, PROBA, PROBA2 } from '../api/socketActions';
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
    case Modify_Date2: {

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
    case ATHELYEZ2: {
      return{ item: [...state.item]}
    }
    case LETREHOZ: {
      
      state.item[12].id = action.payload.id;
    return{ item: [...state.item]}
  }
    case PROBA: {
      state.item[12].value = true;
    return{ item: [...state.item]}
    }
    case PROBA2: {
      state.item[12].value = false;
    return{ item: [...state.item]}
    }
    default: {
      return state;
    }
  }
}