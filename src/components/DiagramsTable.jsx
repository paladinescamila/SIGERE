import React from 'react';
import diagramsData from '../data/diagrams';
import addIcon from '../img/add.svg';


export default function DiagramsTable({projectId, createDiagramOption, viewDiagram}) {

    function DiagramItem({diagram}) {
        return (
            <tr onClick={changeToViewDiagrams}>
                <td>{diagram.id}</td>
                <td>{diagram.type}</td>
                <td>{diagram.description}</td>
            </tr>
        )
    };
    
    const changeToCreateDiagram = () => {
        createDiagramOption();
    };
    const changeToViewDiagrams = () => {
        viewDiagram();
    };
    
    return (
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Diagrama</th>
                <th>Descripción</th>
            </tr>
                {
                    diagramsData[projectId].map((d) => <DiagramItem diagram={d}/>)
                }
            <tr className="add-button-table" onClick={changeToCreateDiagram}>
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


