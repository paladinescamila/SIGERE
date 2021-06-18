import React from 'react';
import '../css/ProjectsVersionsTable.css';
import projectsVersions from '../data/projectVersions';
import ProjectVersionItem from './ProjectVersionItem';

export default function ProjectsVersionsTable({projectId}) {
    return (
        <table className="proj-ver-table">
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
