import React, { Component, Fragment } from 'react';
import Vehicle from './Vehicle';
import Header from './Header';

import '../styles/VehiclesList.css';

import onix from '../img/onix.jpg';
import ka from '../img/ka.jpg';
import p208 from '../img/p208.jpg';

class VehiclesList extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
      <div className="vehiclesList">
        <Header />
        <Fragment>
          {this.state.vehicles.map(vehicle =>
            <Vehicle
              key={vehicle.id}
              vehicle={vehicle}
            />)}
        </Fragment>
      </div>
    );
  }
}

export default VehiclesList;
