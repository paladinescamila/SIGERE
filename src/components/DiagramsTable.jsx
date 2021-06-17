import React from 'react';
import DiagramItem from './DiagramItem';
import diagramsData from '../data/diagrams';
import '../css/DiagramsTable.css';

export default function DiagramsTable({projectId}) {
    return (
        <table className="diagrams-table">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Tipo</th>
            </tr>
                {
                    diagramsData[projectId].map((d) => <DiagramItem diagram={d}/>)
                }
            <tr className="add-diagram-button">
                <td colSpan="4">Agregar diagrama</td>
            </tr>
        </table>
    )
}
