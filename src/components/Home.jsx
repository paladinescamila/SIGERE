import React from 'react'
import Calendar from './Calendar'
import CategoriesList from './CategoriesList'
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
import * as RiIcons from "react-icons/ri"

import "../css/Home.css"
function Home() {
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
                <CategoriesList/>
                <Calendar/>
            </div>
        </div>
        </>
    )
}

export default Home
