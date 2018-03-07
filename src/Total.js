import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Total({ products }) {
  let total = 0;
  products.map(
    product => {
      total += product.count * product.cost;
    }
  );
  return (
    <span className="">Total: ${ total }</span>
  );
}
Total.propTypes = {
  products: PropTypes.array.isRequired
};

export {Total};
