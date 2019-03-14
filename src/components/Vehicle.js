import React, { Component } from 'react';
import VehicleInfo from './VehicleInfo';
import VehicleActions from './VehicleActions';

import '../styles/Vehicle.css';


class Vehicle extends Component {
  constructor(props) {
    super();
    this.state = {
      count: props.vehicle.count
    }
  }

  handleIncrement = () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState((state) => ({
        count: state.count - 1
      }));
    }
  }

  render() {
    return (
      <div className="vehicleItem">
        <VehicleInfo info={this.props.vehicle.info} />
        <VehicleActions
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          count={this.state.count} />
      </div>
    )
  }
}

export default Vehicle;
