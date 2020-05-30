import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { athelyezDate } from '../../state/actions';

export function Tabla() {
    const dispatch = useDispatch();
    const athelyez = (id) => dispatch(athelyezDate(id));
    const Player1 = useSelector((state) => state.player1.item);
    return (
        <table id="tabla">
            <tbody>
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
                <tr>
                    <td style={{ backgroundColor: Player1[0].szin, width: "100", height:"100px" }} onClick={() => athelyez(0)}>
                        <h2>{Player1[0].value} </h2>
                        {Player1[0].kep !== "" ? <img src={Player1[0].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[1].szin, width: "100px", height:"100px" }} onClick={() => athelyez(1)}>
                        <h2>{Player1[1].value} </h2>
                        {Player1[1].kep !== "" ? <img src={Player1[1].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[2].szin, width: "100px", height:"100px" }} onClick={() => athelyez(2)}>
                        <h2>{Player1[2].value} </h2>
                        {Player1[2].kep !== "" ? <img src={Player1[2].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[3].szin, width: "100px", height:"100px" }} onClick={() => athelyez(3)}>
                        <h2>{Player1[3].value} </h2>
                        {Player1[3].kep !== "" ? <img src={Player1[3].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[4].szin, width: "100px", height:"100px" }} onClick={() => athelyez(4)}>
                        <h2>{Player1[4].value} </h2>
                        {Player1[4].kep !== "" ? <img src={Player1[4].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[5].szin, width: "100px", height:"100px" }} onClick={() => athelyez(5)}>
                        <h2>{Player1[5].value} </h2>
                        {Player1[5].kep !== "" ? <img src={Player1[5].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: Player1[6].szin, width: "100px", height:"100px" }} onClick={() => athelyez(6)}>
                        <h2>{Player1[6].value} </h2>
                        {Player1[6].kep !== "" ? <img src={Player1[6].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[7].szin, width: "100px", height:"100px" }} onClick={() => athelyez(7)}>
                        <h2>{Player1[7].value} </h2>
                        {Player1[7].kep !== "" ? <img src={Player1[7].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[8].szin, width: "100px", height:"100px" }} onClick={() => athelyez(8)}>
                        <h2>{Player1[8].value} </h2>
                        {Player1[8].kep !== "" ? <img src={Player1[8].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[9].szin, width: "100px", height:"100px" }} onClick={() => athelyez(9)}>
                        <h2>{Player1[9].value} </h2>
                        {Player1[9].kep !== "" ? <img src={Player1[9].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[10].szin, width: "100px", height:"100px" }} onClick={() => athelyez(10)}>
                        <h2>{Player1[10].value} </h2>
                        {Player1[10].kep !== "" ? <img src={Player1[10].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                    <td style={{ backgroundColor: Player1[11].szin , width: "100px", height:"100px"}} onClick={() => athelyez(11)}>
                        <h2>{Player1[11].value} </h2>
                        {Player1[11].kep !== "" ? <img src={Player1[11].kep} width="50px" height="50px" alt="."></img> : "."}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}