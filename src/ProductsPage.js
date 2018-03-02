import React from 'react';
import PropTypes from 'prop-types';
import './ProductsPage.css';
import Product from './Product.js';

function ProductsPage({ products, onAddToShoppingCart }) {
  return (
    <ul className="ProductsPageItems">
      {products.map(product =>
        <li key={product.id} className="ProductsPageItem">
          <Product product={product} onAddToShoppingCart={() => onAddToShoppingCart(product)} />
        </li>
      )}
    </ul>
  );
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToShoppingCart: PropTypes.func.isRequired
};

export default ProductsPage;
