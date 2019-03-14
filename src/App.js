import React, { Component } from 'react';
import Vehicle from './components/Vehicle';
import Header from './components/Header';
import './App.css';

import onix from './img/onix.jpg';
import ka from './img/ka.jpg';
import p208 from './img/p208.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [
        {
          count: 0,
          info: {
            img: onix,
            make: "Chrevrolet",
            model: "Onix",
            version: "LTZ",
            price: "$697.900",
            country: "Brasil",
            warranty: "3 años o 100.000 km"
          }
        },
        {
          count: 0,
          info: {
            img: ka,
            make: "Ford",
            model: "Ka",
            version: "LT",
            price: "$503.200",
            country: "Brasil",
            warranty: "3 años o 100.000 km"
          }
        },
        {
          count: 0,
          info: {
            img: p208,
            make: "Peugeot",
            model: "208",
            version: "LTZ",
            price: "$611.700",
            country: "Brasil",
            warranty: "3 años o 100.000 km"
          }
        }
      ]
    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {this.state.vehicles.map(vehicle =>
            <Vehicle
              key={vehicle.make + vehicle.model}
              vehicle={vehicle}
            />)}
        </div>
      </div>
    );
  }
}

export default App;
