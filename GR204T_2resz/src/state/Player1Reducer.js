import { Player1Adatok} from '../domain/adatok';
import { BabuAdatok } from '../domain/adatok';
import { Modify_Date, ATHELYEZ } from './actions';

const initialState= { item: Player1Adatok };

export function Player1Reducer(state = initialState, action) {
  switch (action.type) {
    case Modify_Date: {
        if(state.item[0].szin === "" && state.item[0].value === "" && state.item[0].kep === ""){
            state.item[0].szin = "green";
        }
        if(state.item[1].szin === "" && state.item[1].value === "" && state.item[1].kep === ""){
            state.item[1].szin = "green";
        }
        if(state.item[2].szin === "" && state.item[2].value === "" && state.item[2].kep === ""){
            state.item[2].szin = "green";
        }
        if(state.item[3].szin === "" && state.item[3].value === "" && state.item[3].kep === ""){
            state.item[3].szin = "green";
        }
        if(state.item[4].szin === "" && state.item[4].value === "" && state.item[4].kep === ""){
            state.item[4].szin = "green";
        }
        if(state.item[5].szin === "" && state.item[5].value === "" && state.item[5].kep === ""){
            state.item[5].szin = "green";
        }
        if(state.item[6].szin === "" && state.item[6].value === "" && state.item[6].kep === ""){
            state.item[6].szin = "green";
        }
        if(state.item[7].szin === "" && state.item[7].value === "" && state.item[7].kep === ""){
            state.item[7].szin = "green";
        }
        if(state.item[8].szin === "" && state.item[8].value === "" && state.item[8].kep === ""){
            state.item[8].szin = "green";
        }
        if(state.item[9].szin === "" && state.item[9].value === "" && state.item[9].kep === ""){
            state.item[9].szin = "green";
        }
        if(state.item[10].szin === "" && state.item[10].value === "" && state.item[10].kep === ""){
            state.item[10].szin = "green";
        }
        if(state.item[11].szin === "" && state.item[11].value === "" && state.item[11].kep === ""){
            state.item[11].szin = "green";
        }
        
        console.log(state)
        return{ item: [...state.item]}
    }
    case ATHELYEZ: {
        if(state.item[action.payload.id].szin === "green" && state.item[action.payload.id].value === ""){
            if(BabuAdatok[0].szin === "green"){
                state.item[action.payload.id].kep = BabuAdatok[0].value;
                state.item[action.payload.id].ero = BabuAdatok[0].ero;
                BabuAdatok[0].value = "";
                BabuAdatok[0].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[1].szin === "green"){
                state.item[action.payload.id].kep = BabuAdatok[1].value;
                state.item[action.payload.id].ero = BabuAdatok[1].ero;
                BabuAdatok[1].value = "";
                BabuAdatok[1].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[2].szin === "green"){
                state.item[action.payload.id].kep = BabuAdatok[2].value;
                state.item[action.payload.id].ero = BabuAdatok[2].ero;
                BabuAdatok[2].value = "";
                BabuAdatok[2].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[3].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[3].value;
                state.item[action.payload.id].ero = BabuAdatok[3].ero;
                BabuAdatok[3].value = "";
                BabuAdatok[3].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[4].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[4].value;
                state.item[action.payload.id].ero = BabuAdatok[4].ero;
                BabuAdatok[4].value = "";
                BabuAdatok[4].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[5].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[5].value;
                state.item[action.payload.id].ero = BabuAdatok[5].ero;
                BabuAdatok[5].value = "";
                BabuAdatok[5].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[6].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[6].value;
                state.item[action.payload.id].ero = BabuAdatok[6].ero;
                BabuAdatok[6].value = "";
                BabuAdatok[6].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[7].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[7].value;
                state.item[action.payload.id].ero = BabuAdatok[7].ero;
                BabuAdatok[7].value = "";
                BabuAdatok[7].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[8].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[8].value;
                state.item[action.payload.id].ero = BabuAdatok[8].ero;
                BabuAdatok[8].value = "";
                BabuAdatok[8].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[9].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[9].value;
                state.item[action.payload.id].ero = BabuAdatok[9].ero;
                BabuAdatok[9].value = "";
                BabuAdatok[9].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[10].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[10].value;
                state.item[action.payload.id].ero = BabuAdatok[10].ero;
                BabuAdatok[10].value = "";
                BabuAdatok[10].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            else if(BabuAdatok[11].szin === "green"){
                state.item[action.payload.id].value = BabuAdatok[11].value;
                state.item[action.payload.id].ero = BabuAdatok[11].ero;
                BabuAdatok[11].value = "";
                BabuAdatok[11].szin = "";
                state.item[0].szin = "";
                state.item[1].szin = "";
                state.item[2].szin = "";
                state.item[3].szin = "";
                state.item[4].szin = "";
                state.item[5].szin = "";
                state.item[6].szin = "";
                state.item[7].szin = "";
                state.item[8].szin = "";
                state.item[9].szin = "";
                state.item[10].szin = "";
                state.item[11].szin = "";
            }
            
        }
        return{ item: [...state.item]}
    }
    default: {
      return state;
    }
  }
}