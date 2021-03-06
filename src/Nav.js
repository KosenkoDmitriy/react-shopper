import React, { Component } from 'react';

class NavLink extends Component {
  handleClick = () => {
    // console.log("navlink props", this.props);
    this.props.onClick(this.props.id);
  }
  render() {
    return (
      <a onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

const Nav = ({ activeTab, onTabChange, children }) => {
  // console.log("activeTab: ", activeTab, " onTabChange: ", onTabChange);
  return (
  <nav className="AppNav">
    <ul>
      <li className={`AppNavItem ${activeTab === 0 && 'selected'}`}>
        <NavLink id={0} onClick={onTabChange}>Products</NavLink>
      </li>
      <li className={`AppNavItem ${activeTab === 1 && 'selected'}`}>
        <NavLink id={1} onClick={onTabChange}>Shopping Cart</NavLink>
      </li>
      <li className={`AppNavItem ShoppingCart`}>
        <NavLink id={2} onClick={onTabChange}>
          {children}
        </NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Nav;
