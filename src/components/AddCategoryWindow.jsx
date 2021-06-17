import React from 'react';
import '../css/AddCategoryWindow.css';

export default function AddCategoryWindow() {
    return (
        <div className="category-card win-card">
            <p className="category-card-title card-title">Agregar categoría</p>
            <div className="category-card-name">
                <p>Nombre:</p>
                <input className="input" type="text"></input>
            </div>
            <div className="category-card-color">
                <p>Color:</p>
                <input type="color"></input>
            </div>
            <div className="card-2-buttons">
                <button className="empty-button">Cancelar</button>
                <button className="solid-button">Guardar</button>
            </div>
        </div>
    )
}
