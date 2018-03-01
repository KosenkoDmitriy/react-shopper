import React from 'react';

const Nav = ({ activeTab, onTabChange }) => {
  console.log("activeTab: ", activeTab, " onTabChange: ", onTabChange);
  return (
  <nav className="AppNav">
    <ul>
      <li className={`AppNavItem ${activeTab === 0 && 'selected'}`}><a onClick={ () => onTabChange(0)}>Products</a></li>
      <li className={`AppNavItem ${activeTab === 1 && 'selected'}`}><a onClick={ () => onTabChange(1)}>Shopping Cart</a></li>
    </ul>
  </nav>
  );
};

export default Nav;
