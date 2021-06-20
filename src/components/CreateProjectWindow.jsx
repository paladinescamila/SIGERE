import React from 'react';
import '../css/CreateProjectWindow.css';

export default function CreateProjectWindow({projectsOption}) {

    const changeToProjects = () => {
        projectsOption();
    };
    return (
        <div className="dark-background">
            <div className="create-project-card win-card">
                <p className="card-title">Crear proyecto</p>
                <input className="project-title input" type="text" placeholder="Nombre del proyecto"></input>
                <textarea className="project-description textarea" placeholder="Breve descripción del proyecto"></textarea>
                <div className="card-2-buttons">
                    <button className="cancel-button empty-button">Cancelar</button>
                    <button className="create-button solid-button" onClick={changeToProjects}>Crear</button>
                </div>
            </div>
        </div>
    )
}
