import React from 'react';
import '../css/DiagramCard.css';

export default function DiagramCard({diagram}) {

    const photo = '../data/diagrama_de_componentes.png';
    
    return (
        <div className="win-card diagram-card">
            <p className="card-title">Acerca del diagrama</p>
            <img alt="Imagen del diagrama" src={photo}></img>
            <input className="input" value={diagram.name}></input>
            <textarea className="textarea">{diagram.description}</textarea>
            <div className="card-3-buttons">
                <button className="empty-button">Cancelar</button>
                <button className="delete-button">Eliminar</button>
                <button className="solid-button">Guardar</button>
            </div>
        </div>
    )
}
