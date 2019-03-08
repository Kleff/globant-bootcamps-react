import React, { Component } from 'react';
import onix from './../img/onix.jpg';
import './Car.css';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addToCart = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="carItem">
        <img src={onix} alt="Onix" width="300" />
        <div className="carInfo">
          <h3><span>Crevrolet</span> Onix <span>LTZ</span></h3>
          <p className="precio">$697.900</p>
          <p> Origen: <span>Brasil</span> | Garantía: <span>3 años ó 100.000 km</span></p>
          <button onClick={this.addToCart}>BUY CAR</button>
          <p>You have <span>{this.state.count}</span> cars <i class="fas fa-shopping-cart"></i></p>
        </div>
      </div>
    )
  }
}

export default Car;
