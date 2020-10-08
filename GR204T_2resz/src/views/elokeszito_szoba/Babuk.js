import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyDate, modifyDate2 } from '../../state/actions';
import { sendMessage, receiveMessages } from '../../api/socketActions';

export function Babuk() {
    const dispatch = useDispatch();
    const Babuk = useSelector((state) => state.babu.item);
    const createPlaylist = (id) => {
        //dispatch(receiveMessages());
        dispatch(modifyDate(id));
        dispatch(modifyDate2(id));
        
    };
    return (
        <table id="tabla">
            <tbody>
                <tr>
                    <td style={{ backgroundColor: Babuk[0].szin, width: "100px", height:"100px"}}>
                        <div className="zaszlo" onClick={() => createPlaylist(0)}>
                            {Babuk[0].value !== "" ? <img src={Babuk[0].value} width="50px" height="50px" alt="."></img> : "."}
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[1].szin , width: "100px", height:"100px" }}>
                        <div id="bomba1" onClick={() => createPlaylist(1)}>
                            {Babuk[1].value !== "" ? <img src={Babuk[1].value} width="50px" height="50px" alt="." /> : "."}
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[2].szin, width: "100px", height:"100px" }}>
                        <div id="bomba2" onClick={() => createPlaylist(2)}>
                            {Babuk[2].value !== "" ? <img src={Babuk[2].value} width="50px" height="50px" alt="." /> : "."}
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[3].szin, width: "100px", height:"100px" }}>
                        <div id="kem" onClick={() => createPlaylist(3)}>
                            <h2>{Babuk[3].value}</h2>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: Babuk[4].szin, width: "100px", height:"100px" }}>
                        <div id="felderito1" onClick={() => createPlaylist(4)}>
                            <h2>{Babuk[4].value}</h2>
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[5].szin, width: "100px", height:"100px" }}>
                        <div id="felderito2" onClick={() => createPlaylist(5)}>
                            <h2>{Babuk[5].value}</h2>
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[6].szin, width: "100px", height:"100px" }}>
                        <div id="aknasz1" onClick={() => createPlaylist(6)}>
                            <h2>{Babuk[6].value}</h2>
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[7].szin, width: "100px", height:"100px" }}>
                        <div id="aknasz2" onClick={() => createPlaylist(7)}>
                            <h2>{Babuk[7].value}</h2>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: Babuk[8].szin, width: "100px", height:"100px" }}>
                        <div id="4es" onClick={() => createPlaylist(8)}>
                            <h2>{Babuk[8].value}</h2>
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[9].szin, width: "100px", height:"100px" }}>
                        <div id="6os" onClick={() => createPlaylist(9)}>
                            <h2>{Babuk[9].value}</h2>
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[10].szin, width: "100px", height:"100px" }}>
                        <div id="8as" onClick={() => createPlaylist(10)}>
                            <h2>{Babuk[10].value}</h2>
                        </div>
                    </td>
                    <td style={{ backgroundColor: Babuk[11].szin, width: "100px", height:"100px" }}>
                        <div id="10es" onClick={() => createPlaylist(11)}>
                            <h2>{Babuk[11].value}</h2>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>
    );
}


