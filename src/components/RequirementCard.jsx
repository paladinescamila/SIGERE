import React from 'react';
import "../css/RequirementCard.css";
import requirements from '../data/requirementsData';

export default function RequirementCard({requirement}) {
    return (
        <div className="requirementCard">
            <div className="requirementCardFields">
                <div className="req-id">
                    <p>{requirement.id}</p>
                </div>
                <div className="req-description">
                    <textarea>{requirement.description}</textarea>
                </div>
                <div className="req-state">
                    <p>Estado</p>
                    <select>
                        <option selected={requirement.state === "Sin procesar"}>Sin procesar</option>
                        <option selected={requirement.state === "Procesado"}>Procesado</option>
                        <option selected={requirement.state === "Validado"}>Validado</option>
                        <option selected={requirement.state === "Negociado"}>Negociado</option>
                        <option selected={requirement.state === "Terminado"}>Terminado</option>
                    </select>
                </div>
                <div className="req-category">
                    <p>Categoría</p>
                    <select>
                        <option>Categoría</option>
                    </select>
                </div>
                <div className="req-type">
                    <p>Tipo</p>
                    <select>
                        <option>Funcional</option>
                        <option>No funcional</option>
                        <option>Restricción</option>
                    </select>
                </div>
                <div className="req-priority">
                    <p>Prioridad</p>
                    <input type="number" value={requirement.priority}></input>
                </div>
                <div className="req-version">
                    <p>Versión</p>
                    <p>{requirement.version}</p>
                </div>
                <div className="req-created">
                    <p>Fecha de creación</p>
                    <p>{requirement.created}</p>
                </div>
                <div className="req-modified">
                    <p>Última modificación</p>
                    <p>{requirement.modified}</p>
                </div>
            </div>
            <div className="req-buttons">
                <button className="req-cancel">Cancelar</button>
                <button className="req-delete">Eliminar</button>
                <button className="req-save">Guardar</button>
            </div>
        </div>
    )
}
