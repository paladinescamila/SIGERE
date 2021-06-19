import React from 'react'
import searchButton from '../img/search.svg';
import ProjectsList from './ProjectsList';
import "../css/Projects.css"
import addIcon from '../img/add.svg';

export default function Projects({createProjectOption}) {

    const changeToCreateProject = () => {
        createProjectOption();
    };
    return (
        <div className="project">
            <div className="searcher-header">
                <h2>Mis Proyectos</h2>
                <div className="searcher-search">
                    <input className="input search" type="text" placeholder="Buscar proyecto..."></input>
                    <img src={searchButton} alt="Search"></img>
                </div>
            </div>
            <div className="project-list-page">
                <ProjectsList/>
            </div>
            <div onClick={changeToCreateProject} className="add-project">
                <img src={addIcon} alt="Add"></img>
                <p>Crear proyecto</p>
            </div>

        </div>
    )
}
