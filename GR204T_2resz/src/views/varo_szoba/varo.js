import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BabuAdatok } from '../../domain/adatok';
import { Elokeszito1 } from '../elokeszito_szoba/elokeszito1';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { proba } from '../../api/socketActions';


export function Varo({ socket }) {
    const Babuk = useSelector((state) => state.babu.item);
    const dispatch = useDispatch();
    //console.log(Babuk[12].id)
    socket.on('state-changed', function (obj) {
        //dispatch(proba());
        //console.log(obj.state);
        dispatch(proba())
    })
    return (
        <div>
        {
            (Babuk[12].value === false) ? <nav>
                <Link exact="" to="/">
                    <img src="/Assets/back.png" id="back" align="left" alt="back" />
                </Link>
                <h1>{Babuk[12].id}</h1>
            </nav>
                : <Route path="/varo" >
                    <Elokeszito1 socket = {socket}></Elokeszito1>
                </Route>

                
        }
        </div>
    );
}