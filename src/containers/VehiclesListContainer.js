import React, { Component } from 'react';
import Vehicle from '../components/Vehicle';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../styles/VehiclesListContainer.css';


class VehiclesList extends Component {

  render() {
    return (
      <div className="vehiclesList">
        <Header />
        <div className="contentList">
          {this.props.vehicles.map(vehicle =>
            <Vehicle
              key={vehicle.id}
              vehicle={vehicle}
            />)}
        </div>
      </div>
    );
  }
}

VehiclesList.propTypes = {
  vehicles: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  }
}



export default connect(mapStateToProps, null )(VehiclesList);
