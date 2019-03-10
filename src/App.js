import React, { Component } from 'react';
import Car from './components/Car';
import Header from './components/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Car />
      </div>
    );
  }
}

export default App;
