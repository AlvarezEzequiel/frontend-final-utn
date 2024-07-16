import React, { useContext } from 'react';
import { CartContext } from '../../Features/ContextProvider';
import CartProduct from '../../components/cartProduct/CartProduct'
import { totalItem, totalPrice } from '../../Features/CartReducer'
import './Cart.css'

const Cart = () => {
    const { cart } = useContext(CartContext);
    console.log('cart:', cart)
    return (
        <div className="container">
        { 
        cart.length === 0 
        ?
        (
         <h2>No hay productos en el carrito</h2>
        ) 
        : 
        (
            <div className="row">
            <div className="col-8">
                {cart.map(p => (
                    <CartProduct product={p} key={p.id} />
                ))}
            </div>
            <div className="col-4 summary">
                <div className="summary-content">
                    <h5>Total Items: {totalItem(cart)}</h5>
                    <h5>Total Price: ${totalPrice(cart)}</h5>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
            )}
    </div>
    );
};

export default Cart;
