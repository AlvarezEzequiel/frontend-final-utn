import React from 'react';
import './Register.css';
import { register } from '../../fetching/auth.fetching';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const usuario = {
            nombre: event.target.nombre.value,
            apellido: event.target.apellido.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };
        try {
            await register(usuario);
            setErrorText('');
            navigate('/login');
        } catch (error) {
            setErrorText(error.message || 'Error en el registro');
        }
    };

    return (
        <section className='register-body'>
            <title>Formulario Registro</title>
            <form onSubmit={handleSubmit} className="form-register">
                <h4>Formulario Registro</h4>
                <label htmlFor="nombre">Ingrese su Nombre</label>
                <input className="inputs" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" />
                <label htmlFor="apellido">Ingrese su Apellido</label>
                <input className="inputs" type="text" name="apellido" id="apellido" placeholder="Ingrese su Apellido" />
                <label htmlFor="email">Ingrese su Correo</label>
                <input className="inputs" type="email" name="email" id="email" placeholder="Ingrese su Correo" />
                <label htmlFor="password">Ingrese su Contraseña</label>
                <input className="inputs" type="password" name="password" id="password" placeholder="Ingrese su Contraseña" />
                {errorText && <div className="error-message">{errorText}</div>}
                <p>Estoy de acuerdo con <a href="#">Términos y Condiciones</a></p>
                <input className="botons" type="submit" value="Registrar" />
                <p><Link to={'/login'}>¿Ya tienes Cuenta? Iniciar Sesión</Link></p>
            </form>
        </section>
    );
};

export default RegisterScreen;






