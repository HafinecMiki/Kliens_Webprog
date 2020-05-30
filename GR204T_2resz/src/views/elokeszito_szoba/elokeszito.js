import React from 'react';
import { Tabla } from './Tabla';
import { useSelector } from 'react-redux';
import { Babuk } from './Babuk';
import { Link } from 'react-router-dom';
import {JatekAdatok, Player1Adatok } from '../../domain/adatok';


export function Elokeszito() {
    const Babu = useSelector((state) => state.babu.item);
    JatekElokeszites();
    return(
        <div className="Elokeszito">
            <h1>Elokeszito</h1>
            <div id = "jobb_oldal">
                <Tabla></Tabla>  
            </div>
            <div id = "bal_oldal">
                <Babuk>
                </Babuk>
            </div>
            <h1>Ha készvagy kattints ide: </h1>
            {Babu[0].value === "" && Babu[1].value === "" && Babu[2].value === "" && Babu[3].value === "" && Babu[4].value === "" && Babu[5].value === "" && Babu[6].value === "" && Babu[7].value === "" && Babu[8].value === "" && Babu[9].value === "" && Babu[10].value === "" && Babu[11].value === "" ?
                <Link exact="" to="/jatek">
                    <img src="./Assets/kesz.png" width="100px" height="100px" alt="kesz" />
                </Link>
                : "."}
            
        </div>
    );
}


function JatekElokeszites(){
    
    JatekAdatok[24] = Player1Adatok[0];
    JatekAdatok[25] = Player1Adatok[1];
    JatekAdatok[26] = Player1Adatok[2];
    JatekAdatok[27] = Player1Adatok[3];
    JatekAdatok[28] = Player1Adatok[4];
    JatekAdatok[29] = Player1Adatok[5];
    JatekAdatok[30] = Player1Adatok[6];
    JatekAdatok[31] = Player1Adatok[7];
    JatekAdatok[32] = Player1Adatok[8];
    JatekAdatok[33] = Player1Adatok[9];
    JatekAdatok[34] = Player1Adatok[10];
    JatekAdatok[35] = Player1Adatok[11];
}

