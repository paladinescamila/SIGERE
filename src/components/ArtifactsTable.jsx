import React from 'react';
import '../css/ArtifactsTable.css';
import ArtifactItem from './ArtifactItem.jsx';
import artifactsData from '../data/artifacts.js';
import addIcon from '../img/add.svg';

export default function ArtifactsTable({projectId}) {
    return (
        <table className="art-table">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha de subida</th>
            </tr>
            {
                artifactsData[projectId].map((a) => <ArtifactItem artifact={a}/>)
            }
            <tr className="add-art-button">
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
