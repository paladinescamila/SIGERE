import '../css/login.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Signup } from './Signup';

export function Login() {
    
    let flag = 0;

    const registrarse = () => {
        flag += 1;
        return flag;
    }

    return (
        <Router>
            <div class="login-container">
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
                    <p class="social-text">O ingresa con tus redes sociales</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <p>¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link></p>
                </form>
                <Route path="/signup" component={Signup} />
            </div>
        </Router>
    )
}
