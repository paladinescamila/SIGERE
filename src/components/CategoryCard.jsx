import React from 'react';
import '../css/CategoryCard.css';
import categories from '../data/categories';

export default function CategoryCard({category, homeOption}) {

    const changeToHomeOption = () => {
        homeOption();
    };

    return (
        <div className="dark-background">
            <div className="win-card category-card">
                <p className="card-title">Acerca de la categoría</p>
                <div className="category-card-field">
                    <p>Nombre:</p>
                    <input className="input" type="text" value={category.text}></input>
                </div>
                <div className="category-card-field">
                    <p>Color:</p>
                    <input type="color" value={category.color}></input>
                </div>
                <div className="card-3-buttons">
                    <button className="empty-button" onClick={changeToHomeOption}>Cancelar</button>
                    <button className="delete-button" onClick={changeToHomeOption}>Eliminar</button>
                    <button className="solid-button" onClick={changeToHomeOption}>Guardar</button>
                </div>
            </div>
        </div>
    )
}
