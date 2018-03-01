import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';

class App extends Component {
  state = {
    tab: 0
  };

  handleTabChange = (id) => {
    this.setState({
      tab: id
    });
  }

  renderContent() {
    switch(this.state.tab) {
      default:
      case 0: return <span>Products</span>;
      case 1: return <span>Shopping Cart</span>;
    }
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
