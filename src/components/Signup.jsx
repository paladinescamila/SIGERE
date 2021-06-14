import '../css/signup.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function Signup({loginOption}) {

    const changeToLogin = () => {
        loginOption();
    }

    return (
        <form action="#" class="sign-up-form">
            <h2 class="title">Regístrate</h2>
            <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Usuario" />
            </div>
            <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Correo electrónico" />
            </div>
            <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
            </div>
            <input type="submit" class="btn" value="Crear" />
            <p class="login-message">¿Ya tienes una cuenta?</p>
            <div class="login-button" onClick={changeToLogin}>Inicia Sesión</div>
        </form>
    )
}
