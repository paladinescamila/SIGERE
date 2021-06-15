import React from 'react';
import '../css/AccountSettings.css';

export default function AccountSettings() {
    return (
        <div className="account-settings">
            <div className="name-settings">
                <p>Nombre</p>
                <input type="text"></input>
            </div>
            <div className="user-settings">
                <p>Usuario</p>
                <input type="text"></input>
            </div>
            <div className="email-settings">
                <p>Correo electrónico</p>
                <input type="email"></input>
            </div>
            <div className="old-pass-settings">
                <p>Contraseña anterior</p>
                <input type="password"></input>
            </div>
            <div className="new-pass-settings">
                <p>Nueva contraseña</p>
                <input type="password"></input>
            </div>
            <div className="new-pass-settings-2">
                <p>Repita la contraseña</p>
                <input type="password"></input>
            </div>
        </div>
    )
}
