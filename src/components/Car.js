import React, { Component } from 'react';
import CarInfo from './CarInfo';
import CarActions from './CarActions';
import onix from './../img/onix.jpg';

import './Car.css';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    };
  }

  addToCart = () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  };

  removeToCart = () => {
    if (this.state.count > 0) {
      this.setState((state) => ({
        count: state.count - 1
      }));
    }
  }

  

  render() {
    return (
      <div className="carItem">
        <CarInfo info={this.state.info} />
        <CarActions addToCart={this.addToCart} removeToCart={this.removeToCart} count={this.state.count} />
      </div>
    )
  }
}

export default Car;
