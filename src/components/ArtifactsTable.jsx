import React from 'react';
import '../css/ArtifactsTable.css';
import ArtifactItem from './ArtifactItem.jsx';
import artifactsData from '../data/artifacts.js';

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
                <td colSpan={3}>Agregar artefacto</td>
            </tr>
        </table>
    )
}
