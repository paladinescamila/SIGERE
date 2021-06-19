import React from 'react';
import requirementsData from "../data/requirements.js";
import addIcon from '../img/add.svg';


export default function RequirementsTable({projectId, createRequirementOption}) {

    const changeToCreateRequirement = () =>{
        createRequirementOption();
    }

    return (
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Categoría</th>
            </tr>
            {
                requirementsData[projectId].map((r) => <RequirementItem requirement={r} />)
            }
            <tr className="add-button-table">
                <td colSpan="4">
                    <div>
                        <img src={addIcon} onClick={changeToCreateRequirement} alt="Add"></img>
                        Agregar requisito
                    </div>
                </td>
            </tr>
        </table>
    )
}


function RequirementItem({requirement}) {

    let stateColors = new Map([
        ["Sin procesar", '#de1f1f'], // RED
        ["Procesado", '#4f30ff'], // BLUE
        ["Validado", '#ab1fde'], // PURPLE
        ["Negociado", '#de4f1f'], // ORANGE
        ["Terminado", '#268000'], // GREEN
    ]);

    return (
        <tr>
            <td>{requirement.id}</td>
            <td className="table-p">{requirement.description}</td>
            <td><p className="category" style={{backgroundColor: stateColors.get(requirement.state)}}>{requirement.state}</p></td>
            <td>{requirement.category}</td>
        </tr>
    )
}