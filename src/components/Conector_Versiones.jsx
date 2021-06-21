import React from 'react'
import ProjectsVersionsTable from './ProjectsVersionsTable'

function Conector_Versiones() {
    return (
        <div className="page">
            <div><h2>Versiones</h2></div>
            <ProjectsVersionsTable projectId={'Project-001'}/>
        </div>
    )
}

export default Conector_Versiones;
