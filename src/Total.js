import React from 'react';
import ReactDOM from 'react-dom';

function Total({ products }) {
  let totalCost = 0;
  products.map(
    product => totalCost += product.count * product.cost
  )
  return (
    <span className="">Total: ${totalCost}</span>
  );
}

export default Total;
