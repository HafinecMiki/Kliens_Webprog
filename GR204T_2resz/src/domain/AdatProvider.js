import React, { createContext, useState} from 'react';
import { Player1Adatok } from './adatok';

export const AdatContext = createContext([]);

export function AdatProvider({ children }) {
  const [Adatok, setAdatok] = useState(Player1Adatok);

  const editAdatok = (editedAdat) => {
    const newAdatok = Adatok.map((Adat) => {
      if (Adat.id !== editedAdat.id) {
        return editedAdat;
      }
      return Adat;
    });
    setAdatok(newAdatok);
  };


  const value = {
    Adatok,
    editAdatok,
  };
  return (
    <AdatContext.Provider value={value}>{children}</AdatContext.Provider>
  );
}
