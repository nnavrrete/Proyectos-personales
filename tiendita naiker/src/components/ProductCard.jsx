import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ name, price, image, onAddToCart }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${parseFloat(price).toFixed(2)}</p>
      </div>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Agregar al carrito
      </button>
    </motion.div>
  );
};

export default ProductCard;