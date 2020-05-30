import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lepesDate1, lepesDate2, BabuLeptetese } from '../../state/actions';
import { szamlalo} from '../../domain/adatok';

export function JatekTabla() {

    const dispatch = useDispatch();
    const lepes1 = (id) => dispatch(lepesDate1(id));
    const lepes2 = (id) => dispatch(lepesDate2(id));
    const atrakas = (id) => dispatch(BabuLeptetese(id));
    const Players = useSelector((state) => state.jatek.item);
    return (
        <div>
            {szamlalo[0].id === "0" ? <h1>Aktiv Játékos: Player1</h1> : <h1>Aktiv Játékos: Player2</h1>}

            <table id="tabla">

                <tbody>
                    <tr>
                        <td style={{ backgroundColor: Players[0].szin, width: "100px", height: "100px", border: Players[0].keret }} onClick={() => {atrakas(0); szamlalo[0].id === "0" ? lepes1(0) : lepes2(0) }}>
                            <h1>{Players[0].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[0].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[1].szin, width: "100px", height: "100px", border: Players[1].keret }} onClick={() => {atrakas(1);  szamlalo[0].id === "0" ? lepes1(1) : lepes2(1) }}>
                            <h1>{Players[1].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[1].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[2].szin, width: "100px", height: "100px", border: Players[2].keret }} onClick={() => {atrakas(2);  szamlalo[0].id === "0" ? lepes1(2) : lepes2(2) }}>
                            <h1>{Players[2].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[2].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[3].szin, width: "100px", height: "100px", border: Players[3].keret }} onClick={() => {atrakas(3);  szamlalo[0].id === "0" ? lepes1(3) : lepes2(3) }}>
                            <h1>{Players[3].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[3].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[4].szin, width: "100px", height: "100px", border: Players[4].keret }} onClick={() => {atrakas(4);  szamlalo[0].id === "0" ? lepes1(4) : lepes2(4) }}>
                            <h1>{Players[4].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[4].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[5].szin, width: "100px", height: "100px", border: Players[5].keret }} onClick={() => {atrakas(5);  szamlalo[0].id === "0" ? lepes1(5) : lepes2(5) }}>
                            <h1>{Players[5].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[5].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: Players[6].szin, width: "100px", height: "100px", border: Players[6].keret }} onClick={() => {atrakas(6);  szamlalo[0].id === "0" ? lepes1(6) : lepes2(6) }}>
                            <h1>{Players[6].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[6].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[7].szin, width: "100px", height: "100px", border: Players[7].keret }} onClick={() => {atrakas(7);  szamlalo[0].id === "0" ? lepes1(7) : lepes2(7) }}>
                            <h1>{Players[7].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[7].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[8].szin, width: "100px", height: "100px", border: Players[8].keret }} onClick={() => {atrakas(8);  szamlalo[0].id === "0" ? lepes1(8) : lepes2(8) }}>
                            <h1>{Players[8].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[8].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[9].szin, width: "100px", height: "100px", border: Players[9].keret }} onClick={() => {atrakas(9);  szamlalo[0].id === "0" ? lepes1(9) : lepes2(9) }}>
                            <h1>{Players[9].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[9].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[10].szin, width: "100px", height: "100px", border: Players[10].keret }} onClick={() => {atrakas(10);  szamlalo[0].id === "0" ? lepes1(10) : lepes2(10) }}>
                            <h1>{Players[10].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[10].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[11].szin, width: "100px", height: "100px", border: Players[11].keret }} onClick={() => {atrakas(11);  szamlalo[0].id === "0" ? lepes1(11) : lepes2(11) }}>
                            <h1>{Players[11].value} </h1>
                            {Players[0].kep !== "" ? <img src={Players[11].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: Players[12].szin, width: "100px", height: "100px", border: Players[12].keret }} onClick={() => {atrakas(12);  szamlalo[0].id === "0" ? lepes1(12) : lepes2(12) }}>
                            <h1>{Players[12].value} </h1>
                            {Players[12].kep !== "" ? <img src={Players[12].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[13].szin, width: "100px", height: "100px", border: Players[13].keret }} onClick={() => {atrakas(13);  szamlalo[0].id === "0" ? lepes1(13) : lepes2(13) }}>
                            <h1>{Players[13].value} </h1>
                            {Players[13].kep !== "" ? <img src={Players[13].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[14].szin, width: "100px", height: "100px", border: Players[14].keret }} onClick={() => {atrakas(14);  szamlalo[0].id === "0" ? lepes1(14) : lepes2(14) }}>
                            <h1>{Players[14].value} </h1>
                            {Players[14].kep !== "" ? <img src={Players[14].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[15].szin, width: "100px", height: "100px", border: Players[15].keret }} onClick={() => {atrakas(15);  szamlalo[0].id === "0" ? lepes1(15) : lepes2(15) }}>
                            <h1>{Players[15].value} </h1>
                            {Players[15].kep !== "" ? <img src={Players[15].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[16].szin, width: "100px", height: "100px", border: Players[16].keret }} onClick={() => {atrakas(16);  szamlalo[0].id === "0" ? lepes1(16) : lepes2(16) }}>
                            <h1>{Players[16].value} </h1>
                            {Players[16].kep !== "" ? <img src={Players[16].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[17].szin, width: "100px", height: "100px", border: Players[17].keret }} onClick={() => {atrakas(17);  szamlalo[0].id === "0" ? lepes1(17) : lepes2(17) }}>
                            <h1>{Players[17].value} </h1>
                            {Players[17].kep !== "" ? <img src={Players[17].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: Players[18].szin, width: "100px", height: "100px", border: Players[18].keret }} onClick={() => {atrakas(18);  szamlalo[0].id === "0" ? lepes1(18) : lepes2(18) }}>
                            <h1>{Players[18].value} </h1>
                            {Players[18].kep !== "" ? <img src={Players[18].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[19].szin, width: "100px", height: "100px", border: Players[19].keret }} onClick={() => {atrakas(19);  szamlalo[0].id === "0" ? lepes1(19) : lepes2(19) }}>
                            <h1>{Players[19].value} </h1>
                            {Players[19].kep !== "" ? <img src={Players[19].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[20].szin, width: "100px", height: "100px", border: Players[20].keret }} onClick={() => {atrakas(20);  szamlalo[0].id === "0" ? lepes1(20) : lepes2(20) }}>
                            <h1>{Players[20].value} </h1>
                            {Players[20].kep !== "" ? <img src={Players[20].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[21].szin, width: "100px", height: "100px", border: Players[21].keret }} onClick={() => {atrakas(21);  szamlalo[0].id === "0" ? lepes1(21) : lepes2(21) }}>
                            <h1>{Players[21].value} </h1>
                            {Players[21].kep !== "" ? <img src={Players[21].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[22].szin, width: "100px", height: "100px", border: Players[22].keret }} onClick={() => {atrakas(22);  szamlalo[0].id === "0" ? lepes1(22) : lepes2(22) }}>
                            <h1>{Players[22].value} </h1>
                            {Players[22].kep !== "" ? <img src={Players[22].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[23].szin, width: "100px", height: "100px", border: Players[23].keret }} onClick={() => {atrakas(23);  szamlalo[0].id === "0" ? lepes1(23) : lepes2(23) }}>
                            <h1>{Players[23].value} </h1>
                            {Players[23].kep !== "" ? <img src={Players[23].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: Players[24].szin, width: "100px", height: "100px", border: Players[24].keret }} onClick={() => {atrakas(24);  szamlalo[0].id === "0" ? lepes1(24) : lepes2(24) }}>
                            <h1>{Players[24].value} </h1>
                            {Players[24].kep !== "" ? <img src={Players[24].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[25].szin, width: "100px", height: "100px", border: Players[25].keret }} onClick={() => {atrakas(25);  szamlalo[0].id === "0" ? lepes1(25) : lepes2(25) }}>
                            <h1>{Players[25].value} </h1>
                            {Players[25].kep !== "" ? <img src={Players[25].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[26].szin, width: "100px", height: "100px", border: Players[26].keret }} onClick={() => {atrakas(26);  szamlalo[0].id === "0" ? lepes1(26) : lepes2(26) }}>
                            <h1>{Players[26].value} </h1>
                            {Players[26].kep !== "" ? <img src={Players[26].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[27].szin, width: "100px", height: "100px", border: Players[27].keret }} onClick={() => {atrakas(27);  szamlalo[0].id === "0" ? lepes1(27) : lepes2(27) }}>
                            <h1>{Players[27].value} </h1>
                            {Players[27].kep !== "" ? <img src={Players[27].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[28].szin, width: "100px", height: "100px", border: Players[28].keret }} onClick={() => {atrakas(28);  szamlalo[0].id === "0" ? lepes1(28) : lepes2(28) }}>
                            <h1>{Players[28].value} </h1>
                            {Players[28].kep !== "" ? <img src={Players[28].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[29].szin, width: "100px", height: "100px", border: Players[29].keret }} onClick={() => {atrakas(29);  szamlalo[0].id === "0" ? lepes1(29) : lepes2(29) }}>
                            <h1>{Players[29].value} </h1>
                            {Players[29].kep !== "" ? <img src={Players[29].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: Players[30].szin, width: "100px", height: "100px", border: Players[30].keret }} onClick={() => {atrakas(30);  szamlalo[0].id === "0" ? lepes1(30) : lepes2(30) }}>
                            <h1>{Players[30].value} </h1>
                            {Players[30].kep !== "" ? <img src={Players[30].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[31].szin, width: "100px", height: "100px", border: Players[31].keret }} onClick={() => {atrakas(31);  szamlalo[0].id === "0" ? lepes1(31) : lepes2(31) }}>
                            <h1>{Players[31].value} </h1>
                            {Players[31].kep !== "" ? <img src={Players[31].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[32].szin, width: "100px", height: "100px", border: Players[32].keret }} onClick={() => {atrakas(32);  szamlalo[0].id === "0" ? lepes1(32) : lepes2(32) }}>
                            <h1>{Players[32].value} </h1>
                            {Players[32].kep !== "" ? <img src={Players[32].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[33].szin, width: "100px", height: "100px", border: Players[33].keret }} onClick={() => {atrakas(33);  szamlalo[0].id === "0" ? lepes1(33) : lepes2(33) }}>
                            <h1>{Players[33].value} </h1>
                            {Players[33].kep !== "" ? <img src={Players[33].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[34].szin, width: "100px", height: "100px", border: Players[34].keret }} onClick={() => {atrakas(34);  szamlalo[0].id === "0" ? lepes1(34) : lepes2(34) }}>
                            <h1>{Players[34].value} </h1>
                            {Players[34].kep !== "" ? <img src={Players[34].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                        <td style={{ backgroundColor: Players[35].szin, width: "100px", height: "100px", border: Players[35].keret }} onClick={() => {atrakas(35);  szamlalo[0].id === "0" ? lepes1(35) : lepes2(35) }}>
                            <h1>{Players[35].value} </h1>
                            {Players[35].kep !== "" ? <img src={Players[35].kep} width="50px" height="50px" alt="."></img> : ""}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}



