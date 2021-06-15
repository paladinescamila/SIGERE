import React from 'react';
import '../css/CreateProjectWindow.css';

export default function CreateProjectWindow() {
    return (
        <div className="create-project-card">
            <p className="card-title">Crear proyecto</p>
            <input className="project-title" type="text" placeholder="Nombre del proyecto"></input>
            <textarea className="project-description" placeholder="Breve descripción del proyecto"></textarea>
            <div className="buttons">
            <button className="cancel-button">Cancelar</button>
            <button className="create-button">Crear</button>
            </div>
        </div>
    )
}
