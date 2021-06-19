import React from 'react';
import artifactsData from '../data/artifacts.js';
import addIcon from '../img/add.svg';
import standardDate from '../functions/dateConverter.js';


export default function ArtifactsTable({projectId}) {
    return (
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha de subida</th>
            </tr>
            {
                artifactsData[projectId].map((a) => <ArtifactItem artifact={a}/>)
            }
            <tr className="add-button-table">
                <td colSpan={3}>
                    <div>
                        <img src={addIcon} alt="Add"></img>
                        <p>Agregar artefacto</p>
                    </div>
                </td>
            </tr>
        </table>
    )
}


function ArtifactItem({artifact}) {
    return (
        <tr>
            <td>{artifact.id}</td>
            <td className="table-p">{artifact.name}</td>
            <td>{standardDate(artifact.date)}</td>
        </tr>
    )
}