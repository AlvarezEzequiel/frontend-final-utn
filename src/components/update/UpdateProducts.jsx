import React, { useState } from 'react';

const UpdateProduct = ({ productId }) => {
  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Actualizar Producto</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Título</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Precio</label>
          <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </div>
        <button type="submit">Actualizar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProduct;
