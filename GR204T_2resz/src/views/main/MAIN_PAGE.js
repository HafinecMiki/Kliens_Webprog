import React from 'react';
import { NavLink} from 'react-router-dom';
import Pdf from './szabaly.pdf';
import { Player1Adatok, DefaultPlayer1Adatok, BabuAdatok, DefaultBabuAdatok, JatekAdatok, DefaultJatekAdatok, JatekVege } from '../../domain/adatok';
import io from "socket.io-client";
import { szobaletrehoz, proba, proba2 } from '../../api/socketActions';
import { useDispatch, useSelector } from 'react-redux';

export function Main( {socket} ) {
    const dispatch = useDispatch();
    const Babuk = useSelector((state) => state.babu.item);
    function katt(){ 
        
    socket.emit('create-room', (ack) => {
    console.log(ack);
    dispatch(szobaletrehoz(ack.roomId));
        
    });
    };
    const katt2 = (id) => {
    socket.emit('join-room', id, ack => {

        console.log(ack.status);
        if(ack.status ===  'error'){
            dispatch(proba2());
        }
        else if(ack.status ===  'ok'){
            dispatch(proba());
        }
        
    });
    dispatch(szobaletrehoz(id));
    
    };

    function katt3(){
        socket.emit('sync-state', Babuk[12].id, JSON.stringify(JatekVege) , false, ack => {
            console.log(ack, JSON.stringify(JatekVege))
        })
        socket.on('state-changed', function(obj) {
            dispatch(proba());
        })
    }

    DefaultPlayer1();
    DefaultBabuk();
    DefaultJatek();
    JatekVege[0].vege = "false";
    //console.log(Player1Adatok, DefaultPlayer1Adatok);
    return(
        <nav className="ui secondary menu">
            <img src="/Assets/logo.gif" alt="Logo"/>
            <a href = {Pdf} target = "blank"><h2>Játék szabályzat!</h2></a>
            <NavLink to="/varo">
                <div className="uj" id="uj" onClick={() => katt()}>
                    <h1>Új játék!</h1>
                </div> 
            </NavLink>
            <h1>Csatlakozás a szobához:</h1>
            <input type="text" id="szam" onChange = {(e) => katt2(e.target.value)}/>
            { Babuk[12].value === true ?
            <NavLink to="/elokeszito"> 
                <input type = "button" value="Csatakozas" onClick = {() => katt3()} />
            </NavLink>
            : <input type = "button" value="Csatakozas" onClick = {() => katt3()}/> }
        </nav>
    );
}
function DefaultPlayer1(){
    for(let i = 0; i < 12 ; i++){
        Player1Adatok[i].id = DefaultPlayer1Adatok[i].id;
        Player1Adatok[i].value = DefaultPlayer1Adatok[i].value;
        Player1Adatok[i].szin = DefaultPlayer1Adatok[i].szin;
        Player1Adatok[i].kep = DefaultPlayer1Adatok[i].kep;
        Player1Adatok[i].keret = DefaultPlayer1Adatok[i].keret;
        Player1Adatok[i].ero = DefaultPlayer1Adatok[i].ero;
    }
}

function DefaultBabuk(){
    for(let i = 0; i < 12 ; i++){
        BabuAdatok[i].id = DefaultBabuAdatok[i].id;
        BabuAdatok[i].value = DefaultBabuAdatok[i].value;
        BabuAdatok[i].szin = DefaultBabuAdatok[i].szin;
        BabuAdatok[i].ero = DefaultBabuAdatok[i].ero;
    }
}

function DefaultJatek(){
    for(let i = 0; i < 36 ; i++){
        JatekAdatok[i].id = DefaultJatekAdatok[i].id;
        JatekAdatok[i].value = DefaultJatekAdatok[i].value;
        JatekAdatok[i].kep = DefaultJatekAdatok[i].kep;
        JatekAdatok[i].szin = DefaultJatekAdatok[i].szin;
        JatekAdatok[i].keret = DefaultJatekAdatok[i].keret;
        JatekAdatok[i].ero = DefaultJatekAdatok[i].ero;
    }
}