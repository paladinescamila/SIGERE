import React from 'react';
import '../css/CategoriesList.css';
import addIcon from '../img/add.svg';

export default function CategoriesList() {

    const categories = [
        {
            text: "Requisitos",
            color: "#de1f1f"
        },
        {
            text: "Proyectos",
            color: "#4f30ff"
        },
        {
            text: "Versionamiento",
            color: "#ab1fde"
        },
        {
            text: "Usuarios",
            color: "#de4f1f"
        },
        {
            text: "Bases de datos",
            color: "#268000"
        },
    ]

    return (
        <div className="categories-list">
            <div className="categories-list-title">
                <p>Categorías</p>
                <img src={addIcon} alt="Add"></img>
            </div>
            <ul>
                {
                    categories.map((cat) => <li style={{backgroundColor: cat.color}}>{cat.text}</li>)
                }
            </ul>
        </div>
    )
}
