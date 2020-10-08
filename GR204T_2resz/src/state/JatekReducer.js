import { JatekAdatok, szamlalo, HarcVesztes, JatekVege, BabuAdatok, Player1Adatok, Player2Adatok } from '../domain/adatok';
import { LEPESPLAYER2, LEPESPLAYER1, BABU_LEPES, BABU_ATAD, BABU_ATAD2, KESZ1, KESZ2 } from './actions';

const initialState = { item: JatekAdatok, babu: BabuAdatok, play1: Player1Adatok, play2: Player2Adatok };

export function JatekReducer(state = initialState, action) {
  switch (action.type) {
    case LEPESPLAYER2: {
      if (JatekVege[0].vege === "false") {
        var vane = "";
        state.item.forEach(element => {
          if (element.szin === "blue") {
            vane = "red";
          }
          if (element.szin === "red") {
            vane = "true";
          }
        })
        if ((szamlalo[0].id === "1" && state.item[action.payload.id].kep === "" && vane === "") || (vane === "true" && szamlalo[0].id === "1" && state.item[action.payload.id].kep === "")) {
          if (state.item[action.payload.id].id === 0 || state.item[action.payload.id].id === 1 || state.item[action.payload.id].id === 2 || state.item[action.payload.id].id === 3 || state.item[action.payload.id].id === 4 || state.item[action.payload.id].id === 5 || state.item[action.payload.id].id === 6 || state.item[action.payload.id].id === 7 || state.item[action.payload.id].id === 8 || state.item[action.payload.id].id === 9 || state.item[action.payload.id].id === 10 || state.item[action.payload.id].id === 11) {
            state.item.forEach(element => {
              element.szin = "";
            });
            state.item[action.payload.id].szin = "red";
            if (state.item[action.payload.id].ero === 2) {
              let jobra2 = "false";
              let balra2 = "false";
              let fel2 = "false";
              let le2 = "false";
              let kettesjobb2 = 0;
              let kettesbal2 = 0;
              let kettesle2 = 0;
              let kettesfel2 = 0;
              for (let i = 1; i < 7; i++) {

                if ((action.payload.id + i) % 6 === 0 || action.payload.id + i > 35) {
                  jobra2 = "true";
                }
                else {
                  console.log(action.payload.id + i)
                  if (state.item[action.payload.id + i].keret === "4px solid red") {
                    jobra2 = "true";
                  }
                  if (state.item[action.payload.id + i].keret === "4px solid blue" && jobra2 === "false") {
                    jobra2 = "true";
                    kettesjobb2 = kettesjobb2 + 1;
                    if (kettesjobb2 === 1) {
                      state.item[action.payload.id + i].szin = "IndianRed";
                    }
                  }
                }
                if (jobra2 === "false") {
                  state.item[action.payload.id + i].szin = "IndianRed";
                }

                if ((action.payload.id - i) % 6 === 5 || action.payload.id - i < 0) {
                  balra2 = "true";
                }
                else {
                  if (state.item[action.payload.id - i].keret === "4px solid red") {
                    balra2 = "true";
                  }
                  if (state.item[action.payload.id - i].keret === "4px solid blue" && balra2 === "false") {
                    balra2 = "true";
                    kettesbal2 = kettesbal2 + 1;
                    if (kettesbal2 === 1) {
                      state.item[action.payload.id - i].szin = "IndianRed";
                    }
                  }
                }
                if (balra2 === "false") {
                  state.item[action.payload.id - i].szin = "IndianRed";
                }
              }
              for (let i = 6; i <= 36; i += 6) {

                if ((action.payload.id + i) > 35) {
                  fel2 = "true";
                }
                else {
                  if (state.item[action.payload.id + i].keret === "4px solid red") {
                    fel2 = "true";
                  }
                  if (state.item[action.payload.id + i].keret === "4px solid blue" && fel2 === "false") {
                    fel2 = "true";
                    kettesfel2 = kettesfel2 + 1;
                    if (kettesfel2 === 1) {
                      state.item[action.payload.id + i].szin = "IndianRed";
                    }
                  }
                }
                if (fel2 === "false") {
                  state.item[action.payload.id + i].szin = "IndianRed";
                }
                if ((action.payload.id - i) < 0) {
                  le2 = "true";
                }
                else {
                  if (state.item[action.payload.id - i].keret === "4px solid red") {
                    le2 = "true";
                  }
                  if (state.item[action.payload.id - i].keret === "4px solid blue" && le2 === "false") {
                    le2 = "true";
                    kettesle2 = kettesle2 + 1;
                    if (kettesle2 === 1) {
                      state.item[action.payload.id - i].szin = "IndianRed";
                    }
                  }
                }

                if (le2 === "false") {
                  state.item[action.payload.id - i].szin = "IndianRed";
                }
              }
            }
            else {
              if (action.payload.id !== 5 && action.payload.id !== 11 && action.payload.id !== 17 && action.payload.id !== 23 && action.payload.id !== 29 && action.payload.id !== 35) {
                if (state.item[action.payload.id + 1].keret !== "4px solid red") {
                  state.item[action.payload.id + 1].szin = "IndianRed";
                }
              }
              if (action.payload.id !== 0 && action.payload.id !== 6 && action.payload.id !== 18 && action.payload.id !== 24 && action.payload.id !== 30) {
                if (state.item[action.payload.id - 1].keret !== "4px solid red") {
                  state.item[action.payload.id - 1].szin = "IndianRed";
                }
              }
              if (action.payload.id !== 0 && action.payload.id !== 1 && action.payload.id !== 2 && action.payload.id !== 3 && action.payload.id !== 4 && action.payload.id !== 5) {
                if (state.item[action.payload.id - 6].keret !== "4px solid red") {
                  state.item[action.payload.id - 6].szin = "IndianRed";
                }
              }
              if (action.payload.id !== 30 && action.payload.id !== 31 && action.payload.id !== 32 && action.payload.id !== 33 && action.payload.id !== 34 && action.payload.id !== 35) {
                if (state.item[action.payload.id + 6].keret !== "4px solid red") {
                  state.item[action.payload.id + 6].szin = "IndianRed";
                }
              }
            }

          }
        }
        if (HarcVesztes[0].harc === "true" || HarcVesztes[0].harc === "dontetlen") {
          state.item.forEach(element => {
            element.szin = "";
          })
          HarcVesztes[0].harc = "false";
        }


      }
      return { item: [...state.item] }
    }
    case LEPESPLAYER1: {
      if (JatekVege[0].vege === "false") {
        var vane = "";
        state.item.forEach(element => {
          if (element.szin === "red") {
            vane = "blue";
          }
          if (element.szin === "blue") {
            vane = "true";
          }
        })
        if (szamlalo[0].id === "0" && state.item[action.payload.id].kep === "" && vane === "" || vane === "true") {
          if (state.item[action.payload.id].id === 24 || state.item[action.payload.id].id === 25 || state.item[action.payload.id].id === 26 || state.item[action.payload.id].id === 27 || state.item[action.payload.id].id === 28 || state.item[action.payload.id].id === 29 || state.item[action.payload.id].id === 30 || state.item[action.payload.id].id === 31 || state.item[action.payload.id].id === 32 || state.item[action.payload.id].id === 33 || state.item[action.payload.id].id === 34 || state.item[action.payload.id].id === 35) {
            state.item.forEach(element => {
              element.szin = "";
            });
            state.item[action.payload.id].szin = "blue";
            if (state.item[action.payload.id].ero === 2) {
              let jobra = "false";
              let balra = "false";
              let fel = "false";
              let le = "false";
              let kettesjobb = 0;
              let kettesbal = 0;
              let kettesle = 0;
              let kettesfel = 0;
              for (let i = 1; i < 7; i++) {
                //console.log("fobbra ",action.payload.id + i)
                //console.log("balra", action.payload.id - i)
                if ((action.payload.id + i) % 6 === 0 || action.payload.id + i > 35) {
                  jobra = "true";
                }
                else {
                  if (state.item[action.payload.id + i].keret === "4px solid blue") {
                    jobra = "true";
                  }
                  if (state.item[action.payload.id + i].keret === "4px solid red" && jobra === "false") {
                    jobra = "true";
                    kettesjobb = kettesjobb + 1;
                    if (kettesjobb === 1) {
                      state.item[action.payload.id + i].szin = "lightblue";
                    }
                  }
                }
                if (jobra === "false") {
                  state.item[action.payload.id + i].szin = "lightblue";
                }

                if ((action.payload.id - i) % 6 === 5 || action.payload.id - i < 0) {
                  balra = "true";
                }
                else {
                  if (state.item[action.payload.id - i].keret === "4px solid blue") {
                    balra = "true";
                  }
                  if (state.item[action.payload.id - i].keret === "4px solid red" && balra === "false") {
                    balra = "true";
                    kettesbal = kettesbal + 1;
                    if (kettesbal === 1) {
                      state.item[action.payload.id - i].szin = "lightblue";
                    }
                  }
                }
                if (balra === "false") {
                  console.log("Balra teszt ", action.payload.id - i)
                  state.item[action.payload.id - i].szin = "lightblue";
                }
              }
              for (let j = 6; j <= 36; j += 6) {
                //console.log("fel ",action.payload.id + j)
                //console.log("le ",action.payload.id - j)
                if ((action.payload.id + j) > 35) {
                  fel = "true";
                }
                else {
                  if (state.item[action.payload.id + j].keret === "4px solid blue") {
                    fel = "true";
                  }
                  if (state.item[action.payload.id + j].keret === "4px solid red" && fel === "false") {
                    fel = "true";
                    kettesfel = kettesfel + 1;
                    if (kettesfel === 1) {
                      state.item[action.payload.id + j].szin = "lightblue";
                    }
                  }
                }
                if (fel === "false") {
                  state.item[action.payload.id + j].szin = "lightblue";
                }
                if ((action.payload.id - j) < 0) {
                  le = "true";
                }
                else {
                  if (state.item[action.payload.id - j].keret === "4px solid blue") {
                    le = "true";
                  }
                  if (state.item[action.payload.id - j].keret === "4px solid red" && le === "false") {
                    le = "true";
                    kettesle = kettesle + 1;
                    if (kettesle === 1) {
                      state.item[action.payload.id - j].szin = "lightblue";
                    }
                  }
                }

                if (le === "false") {
                  state.item[action.payload.id - j].szin = "lightblue";
                }
              }
            }
            else {
              if (action.payload.id !== 5 && action.payload.id !== 11 && action.payload.id !== 17 && action.payload.id !== 23 && action.payload.id !== 29 && action.payload.id !== 35) {
                if (state.item[action.payload.id + 1].keret !== "4px solid blue") {
                  state.item[action.payload.id + 1].szin = "lightblue";
                }
              }
              if (action.payload.id !== 0 && action.payload.id !== 6 && action.payload.id !== 18 && action.payload.id !== 24 && action.payload.id !== 30) {
                if (state.item[action.payload.id - 1].keret !== "4px solid blue") {
                  state.item[action.payload.id - 1].szin = "lightblue";
                }
              }
              if (action.payload.id !== 0 && action.payload.id !== 1 && action.payload.id !== 2 && action.payload.id !== 3 && action.payload.id !== 4 && action.payload.id !== 5) {
                if (state.item[action.payload.id - 6].keret !== "4px solid blue") {
                  state.item[action.payload.id - 6].szin = "lightblue";
                }
              }
              if (action.payload.id !== 30 && action.payload.id !== 31 && action.payload.id !== 32 && action.payload.id !== 33 && action.payload.id !== 34 && action.payload.id !== 35) {
                if (state.item[action.payload.id + 6].keret !== "4px solid blue") {
                  state.item[action.payload.id + 6].szin = "lightblue";
                }
              }
            }


          }
        }
        if (HarcVesztes[0].harc === "true" || HarcVesztes[0].harc === "dontetlen") {
          state.item.forEach(element => {
            element.szin = "";
          })
          HarcVesztes[0].harc = "false";
        }
      }
      return { item: [...state.item] }
    }
    case BABU_LEPES: {
      var vane;
      state.item.forEach(element => {
        if (element.szin === "blue") {
          vane = "blue";
        }
        if (element.szin === "red") {
          vane = "red";
        }
      })
      if (szamlalo[0].id === "0" && vane === "blue") {
        var idja;
        if (state.item[action.payload.id].szin === "lightblue" && state.item[action.payload.id].keret !== "4px solid red") {

          state.item.forEach(element => {
            if (element.szin === "blue") {
              idja = element.id;
              state.item[action.payload.id].id = element.id;
              state.item[action.payload.id].value = element.value;
              state.item[action.payload.id].kep = element.kep;
              state.item[action.payload.id].keret = element.keret;
              state.item[action.payload.id].ero = element.ero;
              element.id = idja;
              element.value = "";
              element.kep = "";
              element.keret = "";
              element.ero = 0;
            }

          });
          state.item.forEach(element => {
            element.szin = "";
          })
          szamlalo[0].id = "1";
        }
        else if (state.item[action.payload.id].szin === "lightblue" && state.item[action.payload.id].keret === "4px solid red") {
          state.item.forEach(element => {
            if (element.szin === "blue") {
              if (state.item[action.payload.id].ero === 99) {

                JatekVege[0].vege = "true";
                state.item.forEach(element => {
                  element.szin = "";
                });
              }
              else if (element.ero > state.item[action.payload.id].ero && state.item[action.payload.id].ero !== 0) {
                idja = element.id;
                state.item[action.payload.id].id = element.id;
                state.item[action.payload.id].value = element.value;
                state.item[action.payload.id].kep = element.kep;
                state.item[action.payload.id].keret = element.keret;
                state.item[action.payload.id].ero = element.ero;
                element.id = idja;
                element.value = "";
                element.kep = "";
                element.keret = "";
                element.ero = 0;

                state.item.forEach(element => {
                  element.szin = "";
                })
                szamlalo[0].id = "1";
              }
              else if (element.ero === state.item[action.payload.id].ero && state.item[action.payload.id].ero !== 0) {
                state.item[action.payload.id].value = "";
                state.item[action.payload.id].kep = "";
                state.item[action.payload.id].keret = "";
                state.item[action.payload.id].ero = 0;
                element.value = "";
                element.kep = "";
                element.keret = "";
                element.ero = 0;

                state.item.forEach(element => {
                  element.szin = "";
                })
                szamlalo[0].id = "1";
                HarcVesztes[0].harc = "dontetlen";
              }
              else if (element.ero < state.item[action.payload.id].ero && state.item[action.payload.id].ero !== 0) {
                if (element.ero === 3 && state.item[action.payload.id].ero === 66) {
                  idja = element.id;
                  state.item[action.payload.id].id = element.id;
                  state.item[action.payload.id].value = element.value;
                  state.item[action.payload.id].kep = element.kep;
                  state.item[action.payload.id].keret = element.keret;
                  state.item[action.payload.id].ero = element.ero;
                  element.id = idja;
                  element.value = "";
                  element.kep = "";
                  element.keret = "";
                  element.ero = 0;

                  state.item.forEach(element => {
                    element.szin = "";
                  })
                  szamlalo[0].id = "1";
                }
                else if (element.ero === 1 && state.item[action.payload.id].ero === 10) {
                  idja = element.id;
                  state.item[action.payload.id].id = element.id;
                  state.item[action.payload.id].value = element.value;
                  state.item[action.payload.id].kep = element.kep;
                  state.item[action.payload.id].keret = element.keret;
                  state.item[action.payload.id].ero = element.ero;
                  element.id = idja;
                  element.value = "";
                  element.kep = "";
                  element.keret = "";
                  element.ero = 0;

                  state.item.forEach(element => {
                    element.szin = "";
                  })
                  szamlalo[0].id = "1";
                }
                else {
                  element.value = "";
                  element.kep = "";
                  element.keret = "";
                  element.ero = 0;

                  state.item.forEach(element => {
                    element.szin = "";
                  })
                  szamlalo[0].id = "1";
                  HarcVesztes[0].harc = "true";
                }

              }
            }
          })

        }

      }
      else if (szamlalo[0].id === "1" && vane === "red") {
        var idja;
        if (state.item[action.payload.id].szin === "IndianRed" && state.item[action.payload.id].keret !== "4px solid blue") {

          state.item.forEach(element => {
            if (element.szin === "red") {
              idja = element.id;
              state.item[action.payload.id].id = element.id;
              state.item[action.payload.id].value = element.value;
              state.item[action.payload.id].kep = element.kep;
              state.item[action.payload.id].keret = element.keret;
              state.item[action.payload.id].ero = element.ero;
              element.id = idja;
              element.value = "";
              element.kep = "";
              element.keret = "";
              element.ero = 0;
            }

          });
          state.item.forEach(element => {
            element.szin = "";
          })
          szamlalo[0].id = "0";
        }
        else if (state.item[action.payload.id].szin === "IndianRed" && state.item[action.payload.id].keret === "4px solid blue") {
          state.item.forEach(element => {
            if (element.szin === "red") {
              if (state.item[action.payload.id].ero === 99) {

                JatekVege[0].vege = "true";
                state.item.forEach(element => {
                  element.szin = "";
                })
              }
              else if (element.ero > state.item[action.payload.id].ero && state.item[action.payload.id].ero !== 0) {
                idja = element.id;
                state.item[action.payload.id].id = element.id;
                state.item[action.payload.id].value = element.value;
                state.item[action.payload.id].kep = element.kep;
                state.item[action.payload.id].keret = element.keret;
                state.item[action.payload.id].ero = element.ero;
                element.id = idja;
                element.value = "";
                element.kep = "";
                element.keret = "";
                element.ero = 0;

                state.item.forEach(element => {
                  element.szin = "";
                })
                szamlalo[0].id = "0";
              }
              else if (element.ero === state.item[action.payload.id].ero && state.item[action.payload.id].ero !== 0) {
                state.item[action.payload.id].value = "";
                state.item[action.payload.id].kep = "";
                state.item[action.payload.id].keret = "";
                state.item[action.payload.id].ero = 0;
                element.value = "";
                element.kep = "";
                element.keret = "";
                element.ero = 0;

                state.item.forEach(element => {
                  element.szin = "";
                })
                szamlalo[0].id = "0";
                HarcVesztes[0].harc = "dontetlen";
              }
              else if (element.ero < state.item[action.payload.id].ero && state.item[action.payload.id].ero !== 0) {
                if (element.ero === 3 && state.item[action.payload.id].ero === 66) {
                  idja = element.id;
                  state.item[action.payload.id].id = element.id;
                  state.item[action.payload.id].value = element.value;
                  state.item[action.payload.id].kep = element.kep;
                  state.item[action.payload.id].keret = element.keret;
                  state.item[action.payload.id].ero = element.ero;
                  element.id = idja;
                  element.value = "";
                  element.kep = "";
                  element.keret = "";
                  element.ero = 0;

                  state.item.forEach(element => {
                    element.szin = "";
                  })
                  szamlalo[0].id = "0";
                }
                else if (element.ero === 1 && state.item[action.payload.id].ero === 10) {
                  idja = element.id;
                  state.item[action.payload.id].id = element.id;
                  state.item[action.payload.id].value = element.value;
                  state.item[action.payload.id].kep = element.kep;
                  state.item[action.payload.id].keret = element.keret;
                  state.item[action.payload.id].ero = element.ero;
                  element.id = idja;
                  element.value = "";
                  element.kep = "";
                  element.keret = "";
                  element.ero = 0;

                  state.item.forEach(element => {
                    element.szin = "";
                  })
                  szamlalo[0].id = "0";
                }
                else {
                  element.value = "";
                  element.kep = "";
                  element.keret = "";
                  element.ero = 0;

                  state.item.forEach(element => {
                    element.szin = "";
                  })
                  szamlalo[0].id = "0";
                  HarcVesztes[0].harc = "true";
                }

              }
            }
          })

        }

      }
      return { item: [...state.item] }
    }
    case BABU_ATAD2: {
      if (action.payload.id !== "fasza" && action.payload.id !== "fasza2") {
        console.log(action.payload.id);
        for (let i = 24; i < 36; i++) {
          state.item[i].id = action.payload.id[i - 24].id;
          state.item[i].value = action.payload.id[i - 24].value;
          state.item[i].szin = action.payload.id[i - 24].szin;
          state.item[i].kep = action.payload.id[i - 24].kep;
          state.item[i].keret = action.payload.id[i - 24].keret;
        }
      }

      return { item: [...state.item] }
    }
    case BABU_ATAD: {
      if (action.payload.id !== "fasza" && action.payload.id !== "fasza2") {
      console.log(action.payload.id);
      for (let i = 0; i < 12; i++) {
        state.item[i].id = action.payload.id[i].id;
        state.item[i].value = action.payload.id[i].value;
        state.item[i].szin = action.payload.id[i].szin;
        state.item[i].kep = action.payload.id[i].kep;
        state.item[i].keret = action.payload.id[i].keret;
      }
    }
      return { item: [...state.item] }
    }
    case KESZ1: {
      state.item[36].id = true;
      return { item: [...state.item] }
    }
    case KESZ2: {
      state.item[36].value = true;
      return { item: [...state.item] }
    }
    default: {
      return state;
    }
  }
}