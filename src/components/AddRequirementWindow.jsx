import React from 'react';
import '../css/AddRequirementWindow.css';

export default function AddRequirementWindow() {
    return (
        <div className="add-req-win">
            <div className="add-req-fields">
                <div className="add-req-title">
                    <p>Agregar requerimiento</p>
                </div>
                <div className="add-req-description">
                    <textarea placeholder="Escriba una descripción..."></textarea>
                </div>
                <div className="add-req-state">
                    <p>Estado:</p>
                    <select>
                        <option>Sin procesar</option>
                        <option>Procesado</option>
                        <option>Validado</option>
                        <option>Negociado</option>
                        <option>Terminado</option>
                    </select>
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
                    <input type="number" placeholder="Inserte un número..." ></input>
                </div>
            </div>
            <div className="add-req-buttons">
                <button className="add-req-cancel">Cancelar</button>
                <button className="add-req-save">Agregar</button>
            </div>
        </div>
    )
}
