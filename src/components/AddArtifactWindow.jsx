import React from 'react';
import '../css/AddArtifactWindow.css';

export default function AddArtifactWindow() {
    return (
        <div className="add-art-win">
            <p className="add-art-id">Agregar artefacto</p>
            <input className="add-art-name" type="text" placeholder="Escriba el nombre..."></input>
            <div className="add-art-category">
                <p>Cateogoría:</p>
                <select>
                    <option>Categoría 1</option>
                </select>
            </div>
            <div className="add-art-file">
                <p>Archivo:</p>
                <input type="file"></input>
            </div>
            <div className="add-art-buttons">
                <button className="add-art-cancel">Cancelar</button>
                <button className="add-art-save">Guardar</button>
            </div>
        </div>
    )
}
