import React, { useDebugValue } from 'react';
import { Link } from 'react-router-dom';

import { JatekTabla } from './JatekTabla';
import { JatekVege } from '../../domain/adatok';
import { useSelector, useDispatch } from 'react-redux';
import { Kesz2, Kesz1 } from '../../state/actions';

export function Jatek( {socket} ) {
    const Jatek = useSelector((state) => state.jatek.item);
    const dispatch = useDispatch();
    function valami(){
        socket.on('state-changed', function(obj) {
            console.log("fasza2", obj)
            if(obj.state === "fasza2")
                dispatch(Kesz2())
        })
        socket.on('state-changed', function(obj) {
            console.log("fasza", obj)
            if(obj.state === "fasza")
                dispatch(Kesz1())
        })
    }
        return(
        <div className = "JatekTabla">
            { Jatek[36].id === true && Jatek[36].value === true ? valami() : " "}

            { Jatek[36].id === true && Jatek[36].value === true ?
            <JatekTabla></JatekTabla>
            : "Várunk a másik játékosra!"
            }
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