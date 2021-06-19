import React from 'react';
import '../css/login.css';
import SigereLogo from '../img/logo.svg';

export default function Login({signupOption, profile}) {

    const changeToSignup = () => {
        signupOption();
    };

    const changeToProfile = () => {
        profile()
    }

    return (
        <div className="login-container">
            <div className="login-sub-container">
                <form className="login-form">
                    <div className="login-form-logo">
                        <img src={SigereLogo} alt="Sigere logo"></img>
                    </div>
                    <input className="login-form-user" type="email" placeholder="Correo electrónico"></input>
                    <input className="login-form-pass" type="password" placeholder="Contraseña"></input>
                    <button className="login-form-button" onClick={changeToProfile}>Ingresar</button>
                    <div className="login-form-to-signup">
                        <p>¿Aún no tienes una cuenta?</p>
                        <p className="login-form-signup" onClick={changeToSignup}>Regístrate</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
