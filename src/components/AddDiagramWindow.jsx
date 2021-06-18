import React from 'react';
import '../css/AddDiagramWindow.css';

export default function AddDiagramWindow() {
    return (
        <div className="win-card add-diagram-win">
            <p className="card-title">Agregar diagrama</p>
            <textarea placeholder="Escriba una descripción..." className="textarea"></textarea>
            <div className="add-diagram-fields">
                <p>Tipo de diagrama</p>
                <select>
                    <option>De contexto</option>
                    <option>De casos de uso</option>
                    <option>De actividades</option>
                </select>
            </div>
            <div className="add-diagram-fields">
                <p>Imagen</p>
                <input type="file"></input>
            </div>
            <div className="card-2-buttons">
                <button className="empty-button">Cancelar</button>
                <button className="solid-button">Guardar</button>
            </div>
        </div>
    )
}
