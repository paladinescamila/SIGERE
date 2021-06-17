import React from 'react';
import projectsData from "../data/projects.js";
import ProjectItem from './ProjectItem.jsx';
import '../css/ProjectsList.css';
import { RiContactsBookUploadLine } from 'react-icons/ri';

export default function ProjectsList() {
    return (
        <ul className="projects-list-container">
            {
                Object.keys(projectsData).map(function(key, value){
                    return <ProjectItem projectId={key}/>
                })
            }
        </ul>
    )
}
