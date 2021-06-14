import '../css/login.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Signup } from './Signup';

export function Login({signupOption}) {

    const changeToSignup = () => {
        signupOption();
    };

    return (
        <form action="#" class="sign-in-form">
            <h2 class="title">Inicia Sesión</h2>
            <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Usuario" />
            </div>
            <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
            </div>
            <input type="submit" value="Ingresar" class="btn solid" />
            <p class="signup-message">¿Aún no tienes una cuenta?</p>
            <div class="signup-button" onClick={changeToSignup}>Regístrate</div>
        </form>
    )
}
