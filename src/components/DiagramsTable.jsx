import React from 'react';
import DiagramItem from './DiagramItem';
import diagramsData from '../data/diagrams';
import '../css/DiagramsTable.css';
import addIcon from '../img/add.svg';

export default function DiagramsTable({projectId}) {
    return (
        <table className="diagrams-table table">
            <tr>
                <th>ID</th>
                <th>Diagrama</th>
            </tr>
                {
                    diagramsData[projectId].map((d) => <DiagramItem diagram={d}/>)
                }
            <tr className="add-diagram-button add-button">
                <td colSpan="4">
                    <div>
                        <img src={addIcon} alt="Add"></img>
                        <p>Agregar diagrama</p>
                    </div>
                </td>
            </tr>
        </table>
    )
}
