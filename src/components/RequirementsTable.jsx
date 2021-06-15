import '../css/RequirementsTable.css';
import requirementsData from "../data/requirementsData.js";
import RequirementItem from './RequirementItem.jsx';
import React from 'react';

export default function RequirementsTable() {

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
                requirementsData.map((r) => <RequirementItem requirement={r} />)
            }
        </table>
    )
}
