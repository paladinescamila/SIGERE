import React from 'react';
import '../css/DiagramCard.css';
import contextDiagram from '../img/contextDiagram.png';

export default function DiagramCard({diagram, artifactDiagramsOption}) {
    const photo = '../data/diagrama_de_componentes.png';
    const changeToDiagramOption = () => {
        artifactDiagramsOption();
    };
    
    return (
        <div className="dark-background">
            <div className="win-card diagram-card">
                <p className="card-title">Acerca del diagrama</p>
                <img alt="Imagen del diagrama" src={contextDiagram}></img>
                <textarea className="textarea">{diagram.description}</textarea>
                <div className="diagram-type">
                    <p>Tipo:</p>
                    <select>
                        <option selected={diagram.type === "De contexto"}>De contexto</option>
                        <option selected={diagram.type === "De casos de uso"}>De casos de uso</option>
                        <option selected={diagram.type === "De actividades"}>De actividades</option>
                    </select>
                </div>
                <div className="card-3-buttons diagram-card-buttons">
                    <button className="empty-button">Cancelar</button>
                    <button className="delete-button">Eliminar</button>
                    <button className="solid-button" onClick={changeToDiagramOption}>Guardar</button>
                </div>
            </div>
        </div>
    )
}

