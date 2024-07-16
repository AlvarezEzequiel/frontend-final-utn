import React, { useState, useEffect } from 'react';
import { getProducts } from '../../fetching/products.fetching'
import Products from '../../components/products/Products'
import Pagination from '../../components/pagination/Pagination'
import './ProductsScreen.css'

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(page, 10)

        setProducts(data.data || [])
        setTotalPages(data.totalPages || 0)
        setLoading(false);
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [page])

  const handlePageChange = (newPage) => {
    setPage(newPage)
  };

  return (
    <div className="products-container">
      <h1>Productos</h1>
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <div>
          <div className="products-grid">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => <Products key={product.id} product={product} />)
            ) : (
              <p>No hay Productos Disponibles</p>
            )}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsScreen;


