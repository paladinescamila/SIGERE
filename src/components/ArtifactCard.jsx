import React from 'react';
import "../css/ArtifactCard.css";

export default function ArtifactCard({artifact}) {
    return (
        <div className="artifact-card">
            <p className="artifact-card-id">{artifact.id}</p>
            <input className="artifact-card-name" type="text" value={artifact.name}></input>
            <div className="artifact-card-date">
                <p>Fecha de subida:</p>
                <p>{artifact.date}</p>
            </div>
            <div className="artifact-card-category">
                <p>Cateogoría</p>
                <p>{artifact.category}</p>
            </div>
            <div className="artifact-card-buttons">
                <button className="artifact-card-cancel">Cancelar</button>
                <button className="artifact-card-delete">Eliminar</button>
                <button className="artifact-card-save">Guardar</button>
                <a href={artifact.file} download className="artifact-card-file">Descargar</a>
            </div>
        </div>
    )
}
