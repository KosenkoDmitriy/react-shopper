import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ShoppingCartPage.css';

function ShoppingCartPage({ products }) {
  return (
    <ul className="ShoppingCartPageProducts">
      {products.map(
        product =>
          <li key={product.id} className="ShoppingCartPageProduct">
            <Product product={product} />
          </li>
      )}
    </ul>
  );
}
ShoppingCartPage.propTypes = {
  products: PropTypes.array.isRequired
};

export default ShoppingCartPage;
