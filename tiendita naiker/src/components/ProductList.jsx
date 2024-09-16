import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productos, onAddToCart }) => {
  return (
    <div className="product-grid">
      {productos.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image_url}
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;