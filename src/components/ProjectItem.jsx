import React from 'react';
import '../css/ProjectItem.css';

export default function ProjectItem({project}) {

    return (
        <li className="project-item-card">
            <p className="project-card-name">{project.name}</p>
            <p className="project-card-description">{project.description}</p>
            <div className="progress-bar-and-admin">
                <div>
                    <div className="project-progress-bar">
                        <div style={{width: project.progress + "%"}}className="project-progress"></div>
                    </div>
                    <p className="progress-number">{project.progress} %</p>
                </div>
                <p>{project.admin}</p>
            </div>
        </li>
    )
}
