import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { athelyezDate, athelyezDate2 } from '../../state/actions';

export function Tabla2() {
    const dispatch = useDispatch();
    const athelyez2 = (id) => dispatch(athelyezDate2(id));
    const Player2 = useSelector((state) => state.player2.item);
    return (
        <table id="tabla">
            <tbody>
            <tr>
                    <td style={{ backgroundColor: Player2[0].szin, width: "100", height:"100px" }} onClick={() => athelyez2(0)}>
                        <h2>{Player2[0].value} </h2>
                        {Player2[0].kep !== "" ? <img src={Player2[0].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[1].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(1)}>
                        <h2>{Player2[1].value} </h2>
                        {Player2[1].kep !== "" ? <img src={Player2[1].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[2].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(2)}>
                        <h2>{Player2[2].value} </h2>
                        {Player2[2].kep !== "" ? <img src={Player2[2].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[3].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(3)}>
                        <h2>{Player2[3].value} </h2>
                        {Player2[3].kep !== "" ? <img src={Player2[3].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[4].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(4)}>
                        <h2>{Player2[4].value} </h2>
                        {Player2[4].kep !== "" ? <img src={Player2[4].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[5].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(5)}>
                        <h2>{Player2[5].value} </h2>
                        {Player2[5].kep !== "" ? <img src={Player2[5].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: Player2[6].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(6)}>
                        <h2>{Player2[6].value} </h2>
                        {Player2[6].kep !== "" ? <img src={Player2[6].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[7].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(7)}>
                        <h2>{Player2[7].value} </h2>
                        {Player2[7].kep !== "" ? <img src={Player2[7].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[8].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(8)}>
                        <h2>{Player2[8].value} </h2>
                        {Player2[8].kep !== "" ? <img src={Player2[8].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[9].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(9)}>
                        <h2>{Player2[9].value} </h2>
                        {Player2[9].kep !== "" ? <img src={Player2[9].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[10].szin, width: "100px", height:"100px" }} onClick={() => athelyez2(10)}>
                        <h2>{Player2[10].value} </h2>
                        {Player2[10].kep !== "" ? <img src={Player2[10].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player2[11].szin , width: "100px", height:"100px"}} onClick={() => athelyez2(11)}>
                        <h2>{Player2[11].value} </h2>
                        {Player2[11].kep !== "" ? <img src={Player2[11].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                </tr>
                <tr>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                </tr>
                <tr>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                </tr>
                <tr>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                </tr>
                <tr>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                    <td style={{ width: "50", height:"50px" }}>.</td>
                </tr>
                
            </tbody>
        </table>
    );
}