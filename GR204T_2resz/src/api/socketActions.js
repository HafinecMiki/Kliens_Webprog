export const LETREHOZ = 'LETREHOZ';
export const PROBA = 'PROBA';
export const PROBA2 = 'PROBA2';

export function szobaletrehoz(id) {
  return{
    type: LETREHOZ,
    payload: {
      id,
    },
  };
}

export function proba(id) {
  return{
    type: PROBA,
    payload: {
      id,
    },
  };
}
export function proba2(id) {
  return{
    type: PROBA2,
    payload: {
      id,
    },
  };
}