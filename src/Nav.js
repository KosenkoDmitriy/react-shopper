import React, { Component } from 'react';
import {TotalCountAndCost} from './Total';

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

const Nav = ({ activeTab, onTabChange }) => {
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
      <li className={`AppNavItem ${activeTab === 1 && 'selected'}`}>
        <NavLink id={1} onClick={onTabChange}>
          <span className="fa-cart">
            <TotalCountAndCost />
          </span>
        </NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Nav;
