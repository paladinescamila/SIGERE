import React from 'react';
import projectsData from "../data/projectsData.js";
import ProjectItem from './ProjectItem.jsx';
import '../css/ProjectsList.css';

export default function ProjectsList() {
    return (
        <ul className="projects-list-container">
            {
                projectsData.map((p) => <ProjectItem project={p} />)
            }
        </ul>
    )
}
