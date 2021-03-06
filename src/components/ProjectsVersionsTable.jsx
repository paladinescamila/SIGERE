import React from 'react';
import projectsVersions from '../data/projectVersions';
import standardDate from '../functions/dateConverter';


export default function ProjectsVersionsTable({projectId}) {
    return (
        <table className="table">
            <tr>
                <th>Versión</th>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Responsable</th>
            </tr>
            {
                projectsVersions[projectId].map((v) => <ProjectVersionItem version={v}/>)
            }
        </table>
    )
}


function ProjectVersionItem({version}) {
    return (
        <tr>
            <td>{version.version[0]}.{version.version[1]}</td>
            <td>{standardDate(version.date)}</td>
            <td className="table-p">{version.description}</td>
            <td>{version.responsible}</td>
        </tr>
    )
}
