import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let totalCost = 0;
let totalCount = 0;
function Total({ products }) {
  totalCost = 0;
  totalCount = 0;
  products.map(
    product => {
      totalCost += product.count * product.cost;
      totalCount += product.count;
    }
  )
  return (
    <span className="">Total: ${totalCost}</span>
  );
}
Total.propTypes = {
  products: PropTypes.array.isRequired
};
function TotalCountAndCost() {
  return (
    <div>
    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    <span> {totalCount} {totalCount === 1 ? "item" : "items"} ${totalCost}</span>
    </div>
  );
}
export {Total, TotalCountAndCost};
