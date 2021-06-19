import React from 'react';
import requirementVersionsData from '../data/requirementVersions';


export default function RequirementsVersionsTable({projectId, requirementId}) {
    return (
        <table className="table">
            <tr>
                <th>Versión</th>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Responsable</th>
            </tr>
            {
                requirementVersionsData[projectId][requirementId].map((v) => <RequirementsVersionsItem version={v}/>)
            }
        </table>
    )
}


function RequirementsVersionsItem({version}){
    return (
        <tr>
            <td>{version.version[0]}.{version.version[1]}</td>
            <td>{version.date}</td>
            <td>{version.description}</td>
            <td>{version.responsible}</td>
        </tr>
    )
}