import React from 'react';
import '../css/ArtifactsTable.css';
import ArtifactItem from './ArtifactItem.jsx';
import artifactsData from '../data/artifactsData.js';

export default function ArtifactsTable() {
    return (
        <table className="art-table">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Categoría</th>
            </tr>
            {
                artifactsData.map((a) => <ArtifactItem artifact={a}/>)
            }
            <tr className="add-art-button">
                <th colSpan={4}>Agregar artefacto</th>
            </tr>
        </table>
    )
}
