import React from 'react'
import searchButton from '../img/search.svg';
import ProjectsList from './ProjectsList';
import "../css/Projects.css"

function Projects() {
    return (
        <div className="project">
            <div className="searcher-header">
                <h2>Mis Proyectos</h2>
                <div>
                    <button className="login-form-button">Crear-Proyecto</button>
                </div>
                <div className="searcher-search">
                    <input className="search" type="text" placeholder="Buscar Proyecto..."></input>
                    <img src={searchButton} alt="Search"></img>
                </div>
            </div>
            <div>
                <ProjectsList/>
            </div>

        </div>
    )
}

export default Projects
