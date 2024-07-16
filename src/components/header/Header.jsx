import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Features/ContextProvider';
import './Header.css';


const Header = () => {
    const { cartItemCount } = useContext(CartContext);

    return (
        <header className='header'>
            <div className='logo'>
                <Link to="/home">
                    <img src='https://e7.pngegg.com/pngimages/617/858/png-clipart-beer-logo-scalable-graphics-beer-label-logo.png' alt="Logo" className="logo-image" />
                </Link>
            </div>
            <nav className='nav'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                    <li>
                        <Link to="/cart" className="cart-link">
                            <img src='https://w7.pngwing.com/pngs/1008/303/png-transparent-shopping-cart-icon-product-return-shopping-cart-retail-supermarket-objects-thumbnail.png' alt="Cart" className="cart-icon" />
                            <span className="cart-count">{cartItemCount}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

