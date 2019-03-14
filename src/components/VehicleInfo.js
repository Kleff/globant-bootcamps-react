import React from 'react';

import '../styles/VehicleInfo.css';


const VehicleInfo = (props) => {
    const { img, make, model, version, price, country, warranty } = props.info;
    return (
        <div className="vehicleInfo">
            <img src={img} alt="Onix" width="300" />
            <div>
                <h3><span>{make}</span> {model} <span>{version}</span></h3>
                <p className="price">{price}</p>
                <p> Origen: <span>{country}</span> | Garantía: <span>{warranty}</span></p>
            </div>
        </div>
    );
};

export default VehicleInfo;

