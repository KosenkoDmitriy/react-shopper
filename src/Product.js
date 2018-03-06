import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ product, children }) => (
  <div className="Product">
    <div className="ProductLeft">
      <div className="ProductImage" />
      <div className="ProductTitle">
        {product.title}
      </div>
      <div className="ProductText">
        {product.text}
      </div>
    </div>
    <div className="ProductRight">
      <div className="ProductCost">
        ${product.cost}
      </div>
      {children}
    </div>
  </div>
);
Product.propTypes = {
  product: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Product;
