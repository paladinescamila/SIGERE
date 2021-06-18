import React from 'react';
import '../css/ProjectSettings.css';
import collaboratorsData from '../data/collaborators';
import projectsData from '../data/projects';
import standardDate from '../functions/dateConverter';

export default function ProjectSettings({projectId}) {
    return (
        <div className="project-settings">
            <p className="card-title project-settings-title">Configuraciones</p>
            <div className="project-main-data">
                <div className="project-settings-field">
                    <p>Nombre</p>
                    <input className="input" type="text" value={projectsData[projectId].name}></input>
                </div>
                <div className="project-settings-field">
                    <p>Descripción</p>
                    <textarea className="textarea" type="text">{projectsData[projectId].description}</textarea>
                </div>
                <div className="project-settings-field">
                    <p>Versión</p>
                    <p>{projectsData[projectId].version[0]}.{projectsData[projectId].version[1]} ({standardDate(projectsData[projectId].lastUpdate)})</p>
                </div>
                <div className="project-settings-field">
                    <p>Progreso</p>
                    <div>
                        <div className="progress">
                        <div className="project-progress-bar">
                            <div style={{width: projectsData[projectId].progress + "%"}}className="project-progress"></div>
                        </div>
                        <p className="progress-number">{projectsData[projectId].progress}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-settings-field project-members">
                <p>Miembros</p>
                <ul>
                    {
                        collaboratorsData[projectId].map((u) => <li>{u.email} ({u.type})</li>)
                    }
                </ul>
                <button className="solid-button add-member">Agregar miembro</button>
            </div>
            <button className="solid-button">Guardar</button>
        </div>
    )
}
