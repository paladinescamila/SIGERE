import '../css/signup.css';
import React from 'react'

export function Signup() {

    let flag = 0;

    const ingresar = () => {
        flag += 1;
        return flag;
    }

    return (
        <>
            <div class="signup-container">
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
                <input type="submit" class="btn" value="Registrar" />
                <p class="social-text">O regístrate con tus redes sociales</p>
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
                <p>O prefieres <a onClick={ingresar}>iniciar sesión</a></p>
            </form>
            </div>
        </>
    )
}
