import React, { useState, useEffect } from 'react';
import { getProductos } from '../../api/getproductos';
import ProductList from '../../components/ProductList';
import './main.css';
import { color } from 'framer-motion';

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Producto ${productId} añadido al carrito`);
    // Aquí iría la lógica para añadir el producto al carrito
  };



  return (
    <div className="main-page">
      <div className="headers">
        <h1>Bienvenido a nuestra tienda</h1>
        <a href="/login" className="button-login">Iniciar sesión</a>
      </div>
      <div className="featured-products">
        <h2 style={{ color: 'black' }}>Productos destacados</h2>
        <ProductList 
          productos={productos.slice(0, 4)} 
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className="all-products">
        <h2 style={{ color: 'black' }}>Todos los productos</h2>
        <ProductList 
          productos={productos} 
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default Main;