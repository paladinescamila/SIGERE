import React from 'react';
import standardDate from '../functions/dateConverter';
import '../css/ProjectVersionItem.css';

export default function ProjectVersionItem({version}) {
    return (
        <tr className="project-ver-item">
            <td>{version.version[0]}.{version.version[1]}</td>
            <td>{standardDate(version.date)}</td>
            <td className="description">{version.description}</td>
            <td>{version.responsible}</td>
        </tr>
    )
}
