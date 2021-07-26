import React from 'react';
import {commaFormatNumbers} from '../util.js'
import './Table.css';

function Table(props) {
    return (
    <div className="table">
        <table>
            <tr className="header">
                <th className="table__names">State/UT or District</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deceased</th>
                <th>Tested</th>
                <th>Vaccinated[At Least One Dose]</th>
                <th>Fully Vaccinated</th>
            </tr>
            {
                props.casesTable.map((state)=>(
                    <tr>
                        <td className="table__names"><strong>{(state.name)? state.name : "-"}</strong></td>
                        <td>{(state.confirm)? commaFormatNumbers(state.confirm) : "-"}</td>
                        <td>{(state.active)? commaFormatNumbers(state.active) : "-"}</td>
                        <td>{(state.recover)? commaFormatNumbers(state.recover) : "-"}</td>
                        <td>{(state.death)? commaFormatNumbers(state.death) : "-"}</td>
                        <td>{(state.tested)? commaFormatNumbers(state.tested) : "-"}</td>
                        <td>{(state.vaccine1)? commaFormatNumbers(state.vaccine1) : "-"}</td>
                        <td>{(state.vaccine2)? commaFormatNumbers(state.vaccine2) : "-"}</td>
                    </tr>
                ))
            }
            
        </table> 
    </div>
    )
}

export default Table
