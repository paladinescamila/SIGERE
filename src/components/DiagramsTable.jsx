import React from 'react';
import diagramsData from '../data/diagrams';
import addIcon from '../img/add.svg';


export default function DiagramsTable({projectId, createDiagramOption}) {
    const changeToCreateDiagram = () => {
        createDiagramOption();
    };
    return (
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Diagrama</th>
            </tr>
                {
                    diagramsData[projectId].map((d) => <DiagramItem diagram={d}/>)
                }
            <tr className="add-button-table">
                <td colSpan="4">
                    <div>
                        <img src={addIcon} alt="Add" onClick={changeToCreateDiagram}></img>
                        <p>Agregar diagrama</p>
                    </div>
                </td>
            </tr>
        </table>
    )
}


function DiagramItem({diagram}) {
    return (
        <tr>
            <td>{diagram.id}</td>
            <td>{diagram.type}</td>
        </tr>
    )
}