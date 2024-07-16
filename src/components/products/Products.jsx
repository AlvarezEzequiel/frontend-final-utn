import React from 'react';
import { Link } from 'react-router-dom';
 // Ajusta la ruta según sea necesario

const Products = ({ product }) => {
  return (
    <div className="product-card" key={product.id}>
      <h2 className="product-title">{product.titulo}</h2>
      <img className="product-image" src={product.urlImagen} alt={product.titulo} />
      <p className="product-description">{product.descripcion}</p>
      <span className="product-price">${product.precio}</span>
      <Link className="product-link" to={`/detail/${product.id}`}>Ver detalle</Link>
      <button className="add-to-cart-button">
        Add To Cart
      </button>
    </div>
  );
};

export default Products;
