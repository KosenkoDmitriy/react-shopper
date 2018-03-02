import React from 'react';
import PropTypes from 'prop-types';
import './ProductsPage.css';

function ProductsPage({ products }) {
  return (
    <ul className="ProductsPageItems">
      {products.map(product =>
        <li key={product.id} className="ProductsPageItem">
          {product.title}
        </li>
      )}
    </ul>
  );
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsPage;
