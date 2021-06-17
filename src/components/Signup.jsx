import React from 'react';
import '../css/signup.css';
import SigereLogo from '../img/logo.svg';

export default function Signup({loginOption}) {

    const changeToLogin = () => {
        loginOption();
    }

    return (
        <form className="signup-form">
            <div className="signup-form-logo">
                <img src={SigereLogo} alt="Sigere logo"></img>
            </div>
            <input className="signup-form-user" type="email" placeholder="Correo electrónico"></input>
            <input className="signup-form-pass" type="password" placeholder="Contraseña"></input>
            <button className="signup-form-button">Crear una cuenta</button>
            <div className="signup-form-to-signup">
                <p>¿Ya tienes una cuenta?</p>
                <p className="signup-form-signup" onClick={changeToLogin}>Inicia sesión</p>
            </div>
        </form>
    )
}
