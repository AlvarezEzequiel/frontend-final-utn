import React from 'react';
import './Login.css';
import { login } from '../../fetching/auth.fetching'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginScreen = () => {
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const usuario = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        try {
            await login(usuario);
            setErrorText('');
            navigate('/home');
        } catch (error) {
            setErrorText(error.message || 'Error de autenticación');
        }
    };

    return (
        <>
            <section className='login-body'>
                <title>Inicio de Sesion</title>
                <form onSubmit={handleSubmit} className='form-login'>
                    <h2>Iniciar Sesion</h2>
                    <label htmlFor="email">Ingrese su email</label>
                    <input type="email" placeholder='Ingrese su email' id="email" name="email" />
                    <label htmlFor="password">Ingrese su contraseña</label>
                    <input type="password" placeholder='Ingrese su contraseña' id="password" name="password" />
                    {errorText && <div className="error-message">{errorText}</div>}
                    <p>¿No tienes cuenta? <Link className='link' to={'/register'}>Regístrate</Link></p>
                    <button className='button' type='submit'>Iniciar Sesion</button>
                </form>
            </section>
        </>
    );
};

export default LoginScreen;


