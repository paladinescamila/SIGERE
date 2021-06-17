import React from 'react';
import '../css/ProjectItem.css';
import adminIcon from '../img/admin.svg';
import projectsData from '../data/projects';

export default function ProjectItem({projectId}) {

    return (
        <li className="project-item-card">
            <p className="project-card-name">{projectsData[projectId].name}</p>
            <p className="project-card-description">{projectsData[projectId].description}</p>
            <div className="progress-bar-and-admin">
                <div className="progress-bar">
                    <div className="project-progress-bar">
                        <div style={{width: projectsData[projectId].progress + "%"}}className="project-progress"></div>
                    </div>
                    <p className="progress-number">{projectsData[projectId].progress}%</p>
                </div>
                <div className="admin-card">
                    <img src={adminIcon} alt="Project admin"></img>
                    <p>{projectsData[projectId].admin}</p>
                </div>
            </div>
        </li>
    )
}
