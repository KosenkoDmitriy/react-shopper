import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import ProductsPage from './ProductsPage';
import { products } from './data';
import ShoppingCartPage from './ShoppingCartPage';


class App extends Component {
  state = {
    tab: 0,
    cart: []
  };

  handleTabChange = (id) => {
    this.setState({
      tab: id
    });
  }

  renderContent() {
    switch(this.state.tab) {
      default:
      case 0:
        return <ProductsPage products={products} onAddToShoppingCart={this.handleAddToShoppingCart} />;
      case 1:
        return this.renderShoppingCart();
    }
  }

  handleAddToShoppingCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product.id]
    });
  }

  handleDeleteFromCart = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  }

  renderShoppingCart() {
    // counting all items, inside shopping cart
    let productCounts = this.state.cart.reduce((productCounts, productId) => {
      productCounts[productId] = productCounts[productId] || 0;
      productCounts[productId]++;
      return productCounts;
    }, {});
    // array of items
    let cartItems = Object.keys(productCounts).map(productId => {
      var product = products.find(product => product.id === parseInt(productId, 10));
      return { ...product, count: productCounts[productId]}
    });

    return (
      <ShoppingCartPage products={cartItems} onAdd={this.handleAddToShoppingCart} onDelete={this.handleDeleteFromCart} />
    );
  }

  render() {
    // let arrayChannels = ``.split(', ');
    // for(let i = 0; i < arrayChannels.length; i++ ) {
    //   console.log(i + 1 + ')', arrayChannels[i]);
    // }
    return (
      <div className="App">
        <Nav activeTab={this.state.tab} onTabChange={this.handleTabChange} />
        <main className="AppContent">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
