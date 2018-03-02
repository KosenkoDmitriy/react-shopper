import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ShoppingCartPage.css';

function ShoppingCartPage({ products, onAdd, onDelete }) {
  // console.log("sc products:", products);
  return (
    <ul className="ShoppingCartPageProducts">
      {products.map(
        product =>
          <li key={product.id} className="ShoppingCartPageProduct">
            <Product product={product}>
              <div className="ShoppingCartButtons">
                <button className="ShoppingCartBtnDelete" onClick={() => onDelete(product)}>-</button>
                <span className="ShoppingCartCount">{product.count}</span>
                <button className="ShoppingCartBtnAdd" onClick={() => onAdd(product)}>+</button>
              </div>
            </Product>
          </li>
      )}
    </ul>
  );
}
ShoppingCartPage.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default ShoppingCartPage;
