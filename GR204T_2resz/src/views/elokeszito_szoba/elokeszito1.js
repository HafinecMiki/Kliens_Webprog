import React from 'react';
import { Tabla2 } from './Tabla2';
import { useSelector, useDispatch } from 'react-redux';
import { Babuk } from './Babuk';
import { Link } from 'react-router-dom';
import {JatekAdatok, Player2Adatok, BabuAdatok } from '../../domain/adatok';
import { proba } from '../../api/socketActions';
import { BabuAtad2, Kesz1, Kesz2 } from '../../state/actions';


export function Elokeszito1({socket}) {
    const dispatch = useDispatch();
    const Babu = useSelector((state) => state.babu.item);
    const Player2 = useSelector((state) => state.player2.item);
    JatekElokeszites();
    function katto(){
        socket.emit('sync-state', BabuAdatok[12].id, (Player2Adatok) , true, ack => {
            console.log(ack)
        })
        socket.emit('sync-state', BabuAdatok[12].id, "fasza2" , false, ack => {
            console.log(ack)
            dispatch(Kesz2())
        })
        
        
        
    }socket.on('state-changed', function(obj) {
            console.log("fasza", obj)
            if(obj.state === "fasza")
                dispatch(Kesz1())
        })
        socket.on('state-changed', function(obj) {
            console.log("Jófajta", obj.state[0])
            /*for(let i = 24; i < 36; i++){
                JatekAdatok[i].id = obj.state[i-24].id;
                JatekAdatok[i].value = obj.state[i-24].value;
                JatekAdatok[i].szin = obj.state[i-24].szin;
                JatekAdatok[i].kep = obj.state[i-24].kep;
                JatekAdatok[i].keret = obj.state[i-24].keret;
            }*/
            dispatch(BabuAtad2(obj.state));
        })
    return(
        <div className="Elokeszito">
            <h1>Elokeszito</h1>
            <div id = "jobb_oldal">
                <Tabla2></Tabla2>  
            </div>
            <div id = "bal_oldal">
                <Babuk>
                </Babuk>
            </div>
            <h1>Ha készvagy kattints ide: </h1>
            {Babu[0].value === "" && Babu[1].value === "" && Babu[2].value === "" && Babu[3].value === "" && Babu[4].value === "" && Babu[5].value === "" && Babu[6].value === "" && Babu[7].value === "" && Babu[8].value === "" && Babu[9].value === "" && Babu[10].value === "" && Babu[11].value === "" ?
                
                <Link exact="" to="/jatek">
                    <img src="./Assets/kesz.png" width="100px" height="100px" alt="kesz" onClick = {() => katto()}/>
                </Link>
                : "."}
            
        </div>
    );
}


function JatekElokeszites(){
    
    for(let i = 0; i < 12; i++){
        JatekAdatok[i].id = Player2Adatok[i].id;
        JatekAdatok[i].value = Player2Adatok[i].value;
        JatekAdatok[i].szin = Player2Adatok[i].szin;
        JatekAdatok[i].kep = Player2Adatok[i].kep;
        JatekAdatok[i].keret = Player2Adatok[i].keret;
    }
    
}

