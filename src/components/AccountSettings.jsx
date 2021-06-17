import React from 'react';
import '../css/AccountSettings.css';
import standardDate from '../functions/dateConverter.js';

export default function AccountSettings({user}) {
    return (
        <div className="account-settings">
            <div className="name-settings">
                <p>Nombre</p>
                <input className="input" type="text" value={user.name}></input>
            </div>
            <div className="user-settings">
                <p>Usuario</p>
                <input className="input" type="text" value={user.username}></input>
            </div>
            <div className="email-settings">
                <p>Correo electrónico</p>
                <input className="input" type="email" value={user.email}></input>
            </div>
            <div className="old-pass-settings">
                <p>Contraseña anterior</p>
                <input className="input" type="password"></input>
            </div>
            <div className="new-pass-settings">
                <p>Nueva contraseña</p>
                <input className="input" type="password"></input>
            </div>
            <div className="new-pass-settings-2">
                <p>Repita la contraseña</p>
                <input className="input" type="password"></input>
            </div>
            <div className="empty"></div>
            <button className="solid-button settings-save">Guardar</button>
        </div>
    )
}
