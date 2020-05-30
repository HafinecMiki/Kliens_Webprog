import React from 'react';
import { Link } from 'react-router-dom';

import { JatekTabla } from './JatekTabla';
import { JatekVege } from '../../domain/adatok';
import { useSelector } from 'react-redux';

export function Jatek() {
    const vege = useSelector((state) => state.jatek.item)
    return(
        <div className = "JatekTabla">
            <JatekTabla></JatekTabla>
            {
                JatekVege[0].vege === "true" ? ( 
                alert("Vége a játéknak!"),
                <Link exact="" to="/">
                    <h1>Vissza a menübe</h1>
                </Link> ): ""
            }
            
        </div>
        
    );
}