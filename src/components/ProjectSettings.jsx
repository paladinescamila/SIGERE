import React from 'react';
import '../css/ProjectSettings.css';
import collaboratorsData from '../data/collaborators';
import standardDate from '../functions/dateConverter';

export default function ProjectSettings({project}) {
    return (
        <div className="project-settings">
            <p className="card-title project-settings-title">Configuraciones</p>
            <div className="project-main-data">
                <div className="project-settings-field">
                    <p>Nombre</p>
                    <input className="input" type="text" value={project.name}></input>
                </div>
                <div className="project-settings-field">
                    <p>Descripción</p>
                    <textarea className="textarea" type="text">{project.description}</textarea>
                </div>
                <div className="project-settings-field">
                    <p>Versión</p>
                    <p>{project.version[0]}.{project.version[1]} ({standardDate(project.lastUpdate)})</p>
                </div>
                <div className="project-settings-field">
                    <p>Progreso</p>
                    <div>
                        <div className="progress">
                        <div className="project-progress-bar">
                            <div style={{width: project.progress + "%"}}className="project-progress"></div>
                        </div>
                        <p className="progress-number">{project.progress}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-settings-field project-members">
                <p>Miembros</p>
                <ul>
                    {
                        collaboratorsData[project.id].map((u) => <li>{u.email} ({u.type})</li>)
                    }
                </ul>
            </div>
            <button className="solid-button">Guardar</button>
        </div>
    )
}
