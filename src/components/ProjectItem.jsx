import React from 'react';
import '../css/ProjectItem.css';
import adminIcon from '../img/admin.svg';

export default function ProjectItem({project}) {

    return (
        <li className="project-item-card">
            <p className="project-card-name">{project.name}</p>
            <p className="project-card-description">{project.description}</p>
            <div className="progress-bar-and-admin">
                <div className="progress-bar">
                    <div className="project-progress-bar">
                        <div style={{width: project.progress + "%"}}className="project-progress"></div>
                    </div>
                    <p className="progress-number">{project.progress}%</p>
                </div>
                <div className="admin-card">
                    <img src={adminIcon} alt="Project admin"></img>
                    <p>{project.admin}</p>
                </div>
            </div>
        </li>
    )
}
