import React from 'react';
import VehicleInfo from './VehicleInfo';
import VehicleActions from './VehicleActions';

import '../styles/Vehicle.css';


const Vehicle = (props) => {
  return (
    <div className="vehicleItem">
      <VehicleInfo info={props.vehicle.info} />
      <VehicleActions
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
        count={props.vehicle.count} 
        id={props.vehicle.id}
        />
    </div>
  )
}

export default Vehicle;
