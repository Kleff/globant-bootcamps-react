import React, { Component } from 'react';
import Car from './components/Car';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cars Store</h1>
        <Car />
      </div>
    );
  }
}

export default App;
