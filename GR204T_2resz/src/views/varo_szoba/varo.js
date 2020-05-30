import React from 'react';
import { Link } from 'react-router-dom';

function random() {
    const min = 1;
    const max = 1000;
    const rand = Math.floor(min + Math.random() * (max - min));
    return rand;
}
export function Varo() {
    return(
        
        <nav>
            <Link exact="" to="/">
                <img src="/Assets/back.png" id="back" align= "left" alt="back"/>
            </Link>
            <h1>{random()}</h1>
        </nav>
    );
}