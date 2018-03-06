import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Total({ products }) {
  let totalCost = 0;
  products.map(
    product => totalCost += product.count * product.cost
  )
  return (
    <span className="">Total: ${totalCost}</span>
  );
}
Total.propTypes = {
  products: PropTypes.array.isRequired
};

export default Total;
