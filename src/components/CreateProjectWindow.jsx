import React from 'react';
import '../css/CreateProjectWindow.css';

export default function CreateProjectWindow() {
    return (
        <div className="create-project-card win-card">
            <p className="card-title">Crear proyecto</p>
            <input className="project-title input" type="text" placeholder="Nombre del proyecto"></input>
            <textarea className="project-description textarea" placeholder="Breve descripción del proyecto"></textarea>
            <div className="card-2-buttons">
                <button className="cancel-button empty-button">Cancelar</button>
                <button className="create-button solid-button">Crear</button>
            </div>
        </div>
    )
}
