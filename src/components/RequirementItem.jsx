import React from 'react'
import '../css/RequirementsItem.css';
import editButton  from '../img/edit.svg';

export default function RequirementItem({requirement}) {

    let stateColors = new Map([
        ["Sin procesar", '#de1f1f'], // RED
        ["Procesado", '#4f30ff'], // BLUE
        ["Validado", '#ab1fde'], // PURPLE
        ["Negociado", '#de4f1f'], // ORANGE
        ["Terminado", '#268000'], // GREEN
    ]);

    return (
        <tr>
            <td className="id">{requirement.id}</td>
            <td className="description">{requirement.description}</td>
            <td className="state"><p style={{backgroundColor: stateColors.get(requirement.state)}}>{requirement.state}</p></td>
            <td className="category">{requirement.category}</td>
            {/* <td className="type">{requirement.type}</td>
            <td className="priority">{requirement.priority}</td>
            <td className="version">{requirement.version}</td>
            <td className="created">{requirement.created}</td>
            <td className="modified">{requirement.modified}</td> */}
        </tr>
    )
}