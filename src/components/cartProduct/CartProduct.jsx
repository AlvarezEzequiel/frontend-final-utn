import React, { useContext } from "react";
import { CartContext } from "../../Features/ContextProvider";
import './CartProduct.css'; // Importar el archivo CSS

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((product) => product.id === id);
    if (Index !== -1 && cart[Index].cantidad < 10) {
      return dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((product) => product.id === id);
    if (Index !== -1 && cart[Index].cantidad > 1) {
      return dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="cart-product">
      <img src={product.urlImagen} className="product-thumbnail" alt="" />
      <div className="detail">
        <h4>{product.titulo}</h4>
        <h5>${product.precio}</h5>
        <div className="buttons">
          <button className="button-decrease" onClick={() => Decrease(product.id)}>
            <b>-</b>
          </button>
          <button className="button-quantity">{product.cantidad}</button>
          <button className="button-increase" onClick={() => Increase(product.id)}>
            <b>+</b>
          </button>
        </div>
        <button className="button-remove" onClick={() => dispatch({ type: "Remove", id: product.id })}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct


