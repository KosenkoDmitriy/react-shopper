import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ product, onAddToShoppingCart }) => (
  <div className="Product">
    <div className="ProductLeft">
      <div className="ProductImage" />
      <div className="ProductTitle">
        {product.title}
      </div>
      <div className="ProductText">
        {product.text}
      </div>
      <div className="ProductCost">
        {product.cost}
      </div>
      <button className="ProductAddToShoppingCart" onClick={onAddToShoppingCart}>
        Add to Shopping Cart
      </button>
    </div>
  </div>
);

export default Product;
