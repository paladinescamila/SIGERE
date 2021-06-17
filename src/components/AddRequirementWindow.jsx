import React from 'react';
import '../css/AddRequirementWindow.css';

export default function AddRequirementWindow() {
    return (
        <div className="add-req-win win-card">
            <div className="add-req-fields">
                <div className="add-req-title card-title">
                    <p>Agregar requerimiento</p>
                </div>
                <div className="add-req-description">
                    <textarea className="textarea" placeholder="Escriba una descripción..."></textarea>
                </div>
                <div className="add-req-category">
                    <p>Categoría:</p>
                    <select>
                        <option>Categoría</option>
                    </select>
                </div>
                <div className="add-req-type">
                    <p>Tipo:</p>
                    <select>
                        <option>Funcional</option>
                        <option>No funcional</option>
                        <option>Restricción</option>
                    </select>
                </div>
                <div className="add-req-priority">
                    <p>Prioridad:</p>
                    <input className="input" type="number" placeholder="Inserte un número..." ></input>
                </div>
            </div>
            <div className="card-2-buttons">
                <button className="add-req-cancel empty-button">Cancelar</button>
                <button className="add-req-save solid-button">Agregar</button>
            </div>
        </div>
    )
}
