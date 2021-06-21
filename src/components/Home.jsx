import React from 'react'
import Calendar from './Calendar'
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
import * as RiIcons from "react-icons/ri"

import '../css/CategoriesList.css';
import addIcon from '../img/add.svg';

import "../css/Home.css"
function Home({createCategoryOption, categoryOption}) {

    const changeToCreateCategory = () =>{
        createCategoryOption();
    }

    const changeToCategory =() => {
        categoryOption();
    }
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
        <>
        <div className="container">
            <div className="home_principal">
                <div className="home_principal_options">
                    <GrIcons.GrProjects size={50}/>
                    <h4>Mis Proyectos</h4>
                </div>
                <div className="home_principal_options">
                    <RiIcons.RiUserShared2Fill size={50}/>
                    <h4>Compartidos Conmigo</h4>
                </div>
                <div className="home_principal_options">
                    <AiIcons.AiFillMessage size={50}/>
                    <h4>Mensajes</h4>
                </div>
            </div>
            <div className="home_second">
                <div className="categories-list">
                    <div className="categories-list-title">
                        <p>Categorías</p>
                        <img src={addIcon} alt="Add" onClick={changeToCreateCategory}></img>
                    </div>
                    <ul>
                        {
                            categories.map((cat) => <li style={{backgroundColor: cat.color}} onClick={changeToCategory}>{cat.text}</li>)
                        }
                    </ul>
                </div>
                <Calendar/>
            </div>
        </div>
        </>
    )
}

export default Home
