import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
            <div className='social-links'>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
