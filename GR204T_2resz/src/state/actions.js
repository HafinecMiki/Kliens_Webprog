export const Modify_Date = 'Modify_Date';
export const ATHELYEZ = 'ATHELYEZ';
export const Modify_Date2 = 'Modify_Date2';
export const ATHELYEZ2 = 'ATHELYEZ2';
export const LEPESPLAYER1 = 'LEPESPLAYER1';
export const LEPESPLAYER2 = 'LEPESPLAYER2';
export const BABU_LEPES = 'BABU_LEPES';
export const BABU_ATAD = 'BABU_ATAD';
export const BABU_ATAD2 = 'BABU_ATAD2';
export const KESZ1 = 'KESZ1';
export const KESZ2 = 'KESZ2';


export function modifyDate(id) {
  return{
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
export function modifyDate2(id) {
  return{
    type: Modify_Date2,
    payload: {
      id,
    },
  };
}

export function athelyezDate2(id) {
  return {
    type: ATHELYEZ2,
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

export function BabuAtad(id) {
  return {
    type: BABU_ATAD,
    payload: {
      id,
    },
  };
}
export function BabuAtad2(id) {
  return {
    type: BABU_ATAD2,
    payload: {
      id,
    },
  };
}
export function Kesz1() {
  return {
    type: KESZ1,
    
  };
}
export function Kesz2() {
  return {
    type: KESZ2,
  };
}