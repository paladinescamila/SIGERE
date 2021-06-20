import React from 'react';
import "../css/ArtifactCard.css";
import artifactsData from '../data/artifacts';
import standardDate from '../functions/dateConverter';

export default function ArtifactCard({artifact, artifactDiagramsOption}) {
    const changeToArtifactsOption = () =>{
        artifactDiagramsOption();
    };

    return (
        <div className="dark-background">
            <div className="artifact-card win-card">
                <p className="artifact-card-id card-title">Acerca del artefacto</p>
                <input className="artifact-card-name input" type="text" value={artifact.name}></input>
                <div className="artifact-card-date">
                    <p>Fecha de subida:</p>
                    <p>{standardDate(artifact.date)}</p>
                </div>
                <div className="artifact-card-file">
                    <p>Archivo:</p>
                    <a href={"../src/data/"+artifact.file} download>Descargar</a>
                </div>
                <div className="card-3-buttons">
                    <button className="artifact-card-cancel empty-button" onClick={changeToArtifactsOption}>Cancelar</button>
                    <button className="artifact-card-delete delete-button" onClick={changeToArtifactsOption}>Eliminar</button>
                    <button className="artifact-card-save solid-button" onClick={changeToArtifactsOption}>Guardar</button>
                </div>
            </div>
        </div>
    )
}
