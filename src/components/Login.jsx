import '../css/login.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Signup } from './Signup';
import SigereLogo from '../img/logo.svg';

export function Login({signupOption}) {

    const changeToSignup = () => {
        signupOption();
    };

    return (
        <form className="login-form">
            <div className="login-form-logo">
                <img src={SigereLogo} alt="Sigere logo"></img>
            </div>
            <input className="login-form-user" type="text" placeholder="Usuario"></input>
            <input className="login-form-pass" type="password" placeholder="Contraseña"></input>
            <button className="login-form-button">Ingresar</button>
            <div className="login-form-to-signup">
                <p>¿Aún no tienes una cuenta?</p>
                <p className="login-form-signup" onClick={changeToSignup}>Regístrate</p>
            </div>
        </form>
    )
}
