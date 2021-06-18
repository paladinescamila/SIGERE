import '../css/RequirementsTable.css';
import requirementsData from "../data/requirements.js";
import RequirementItem from './RequirementItem.jsx';
import React from 'react';
import addIcon from '../img/add.svg';

export default function RequirementsTable({projectId}) {

    return (
        <table className="req-table">
            <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Categoría</th>
                {/* <th>Tipo</th>
                <th>Prioridad</th>
                <th>Versión</th>
                <th>Fecha de Creación</th>
                <th>Última Modificación</th> */}
            </tr>
            {
                requirementsData[projectId].map((r) => <RequirementItem requirement={r} />)
            }
            <tr className="add-req-button">
                <td colSpan="4">
                    <div>
                        <img src={addIcon} alt="Add"></img>
                        Agregar requisito
                    </div>
                </td>
            </tr>
        </table>
    )
}
