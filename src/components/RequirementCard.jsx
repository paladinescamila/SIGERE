import React from 'react';
import "../css/RequirementCard.css";
import requirementsData from '../data/requirements';
import categoriesData from '../data/categories';
import standardDate from '../functions/dateConverter';

export default function RequirementCard({requirement, requirementsOption}) {

    const requirementsMap = Object.entries(requirementsData)
    const projectId = requirementsMap.find((p) => p[1].find((r) => r.id === requirement.id).id === requirement.id)[0];
    const changeToRequirements = () => {
        requirementsOption();
    };
    return (
        <div className="requirementCard win-card">
            <div className="requirementCardFields">
                <div className="req-id card-title">
                    <p>Acerca del requisito</p>
                </div>
                <div className="req-description">
                    <textarea className="textarea">{requirement.description}</textarea>
                </div>
                <div className="req-state">
                    <p>Estado:</p>
                    <select>
                        <option selected={requirement.state === "Sin procesar"}>Sin procesar</option>
                        <option selected={requirement.state === "Procesado"}>Procesado</option>
                        <option selected={requirement.state === "Validado"}>Validado</option>
                        <option selected={requirement.state === "Negociado"}>Negociado</option>
                        <option selected={requirement.state === "Terminado"}>Terminado</option>
                    </select>
                </div>
                <div className="req-category">
                    <p>Categoría:</p>
                    <select>
                        {
                            categoriesData[projectId].map((c) => 
                                <option selected={requirement.category === c.text}>{c.text}</option>)
                        }
                    </select>
                </div>
                <div className="req-type">
                    <p>Tipo:</p>
                    <select>
                        <option selected={requirement.type === "Funcional"}>Funcional</option>
                        <option selected={requirement.type === "No funcional"}>No funcional</option>
                        <option selected={requirement.type === "Restricción"}>Restricción</option>
                    </select>
                </div>
                <div className="req-priority">
                    <p>Prioridad:</p>
                    <input className="input" type="number" value={requirement.priority}></input>
                </div>
                <div className="req-version">
                    <p>Versión:</p>
                    <p>{requirement.version[0]}.{requirement.version[1]}</p>
                </div>
                <div className="req-created">
                    <p>Fecha de creación:</p>
                    <p>{standardDate(requirement.created)}</p>
                </div>
                <div className="req-modified">
                    <p>Última modificación:</p>
                    <p>{standardDate(requirement.modified)}</p>
                </div>
            </div>
            <div className="card-3-buttons">
                <button className="req-cancel empty-button">Cancelar</button>
                <button className="req-delete delete-button">Eliminar</button>
                <button className="req-save solid-button" onClick={changeToRequirements}>Guardar</button>
            </div>
        </div>
    )
}
