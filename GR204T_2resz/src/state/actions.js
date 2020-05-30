export const Modify_Date = 'Modify_Date';
export const ATHELYEZ = 'ATHELYEZ';
export const LEPESPLAYER1 = 'LEPESPLAYER1';
export const LEPESPLAYER2 = 'LEPESPLAYER2';
export const BABU_LEPES = 'BABU_LEPES';

export function modifyDate(id) {
  return {
    type: Modify_Date,
    payload: {
      id,
    },
  };
}

export function athelyezDate(id) {
  return {
    type: ATHELYEZ,
    payload: {
      id,
    },
  };
}

export function lepesDate1(id) {
  return {
    type: LEPESPLAYER1,
    payload: {
      id,
    },
  };
}
export function lepesDate2(id) {
  return {
    type: LEPESPLAYER2,
    payload: {
      id,
    },
  };
}

export function BabuLeptetese(id) {
  return {
    type: BABU_LEPES,
    payload: {
      id,
    },
  };
}