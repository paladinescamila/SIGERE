import React from 'react';
import '../css/AddArtifactWindow.css';

export default function AddArtifactWindow() {
    return (
        <div className="add-art-win win-card">
            <p className="add-art-id card-title">Agregar artefacto</p>
            <input className="add-art-name input" type="text" placeholder="Escriba el nombre..."></input>
            <div className="add-art-category">
                <p>Categoría:</p>
                <select>
                    <option>Categoría 1</option>
                </select>
            </div>
            <div className="add-art-file">
                <p>Archivo:</p>
                <input type="file"></input>
            </div>
            <div className="card-2-buttons">
                <button className="add-art-cancel empty-button">Cancelar</button>
                <button className="add-art-save solid-button">Guardar</button>
            </div>
        </div>
    )
}
