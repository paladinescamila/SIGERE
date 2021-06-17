import React from 'react';
import "../css/ArtifactCard.css";
import standardDate from '../functions/dateConverter';

export default function ArtifactCard({artifact}) {
    return (
        <div className="artifact-card win-card">
            <p className="artifact-card-id card-title">{artifact.id}</p>
            <input className="artifact-card-name input" type="text" value={artifact.name}></input>
            <div className="artifact-card-date">
                <p>Fecha de subida:</p>
                <p>{standardDate(artifact.date)}</p>
            </div>
            <div className="artifact-card-category">
                <p>Cateogoría:</p>
                <p>{artifact.category}</p>
            </div>
            <div className="artifact-card-file">
                <p>Archivo:</p>
                <a href={artifact.file} download>Descargar</a>
            </div>
            <div className="card-3-buttons">
                <button className="artifact-card-cancel empty-button">Cancelar</button>
                <button className="artifact-card-delete empty-button">Eliminar</button>
                <button className="artifact-card-save solid-button">Guardar</button>
            </div>
        </div>
    )
}
