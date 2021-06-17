import React from 'react';
import '../css/ProjectSettings.css';

export default function ProjectSettings() {
    return (
        <div className="project-settings">
            <p className="card-title">Configuraciones</p>
            <div>
                <p>Nombre:</p>
                <input type="text"></input>
            </div>
            <div>
                <p>Descripción:</p>
                <textarea type="text"></textarea>
            </div>
            <div>
                <p>Versión:</p>
                <p></p>
            </div>
            <div>
                <p>Progreso:</p>
                <div></div>
            </div>
            <div>
                <p>Miembros:</p>
                <ul></ul>
            </div>
        </div>
    )
}
