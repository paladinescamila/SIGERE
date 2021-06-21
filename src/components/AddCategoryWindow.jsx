import React from 'react';
import '../css/AddCategoryWindow.css';

export default function AddCategoryWindow({homeOption}) {
    const changeToHomeOption = () => {
        homeOption();
    };
    return (
        <div className="dark-background">
            <div className="add-category win-card">
                <p className="add-category-title card-title">Agregar categoría</p>
                <div className="add-category-name">
                    <p>Nombre:</p>
                    <input className="input" type="text"></input>
                </div>
                <div className="add-category-color">
                    <p>Color:</p>
                    <input type="color"></input>
                </div>
                <div className="card-2-buttons">
                    <button className="empty-button">Cancelar</button>
                    <button className="solid-button" onClick={changeToHomeOption}>Guardar</button>
                </div>
            </div>
        </div>
    )
}
