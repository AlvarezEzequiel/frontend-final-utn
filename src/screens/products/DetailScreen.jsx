import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Features/ContextProvider';
import { useParams } from 'react-router-dom';
import { getProductDetailById } from '../../fetching/products.fetching';
import './DetailScreen.css'
import UpdateProduct from '../../components/update/UpdateProducts';

const DetailScreen = () => {
  const {dispatch} = useContext(CartContext);
  const { pid } = useParams();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
 

  useEffect(() => {
    if (pid) {
      getProductDetailById(pid)
        .then((producto) => {
          setLoading(false);
          setProduct(producto);
        })
        .catch((error) => {
          setLoading(false);
          console.error('Error fetching product detail', error);
        });
    } else {
      setLoading(false);
      console.error('Invalid product id');
    }
  }, [pid]);

  return (
    <div className="detail-container">
      <h1>Detalle de Producto</h1>
      {
      loading 
      ? 
      (
        <h2>Cargando</h2>
      ) 
      : 
      (
        <div className="product-detail">
          <h2 className="product-title">{product.titulo}</h2>
          <img className="product-image" src={product.urlImagen} alt={product.titulo} />
          <p className="product-description">{product.descripcion}</p>
            <span className="product-price">${product.precio}</span>
            <button className='add-to-cart-button'
              onClick={() => dispatch({ type: "Add", product: product })}>
                Add To Cart
            </button>
            <UpdateProduct productId={product.id} />
        </div>
      )
      }
    </div>
  );
};

export default DetailScreen;

