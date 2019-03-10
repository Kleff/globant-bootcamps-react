import React from 'react';

import './CarInfo.css';


const CarInfo = (props) => {
    const { img, make, model, version, price, country, warranty } = props.info;
    return (
        <div className="carInfo">
            <img src={img} alt="Onix" width="300" />
            <div>
                <h3><span>{make}</span> {model} <span>{version}</span></h3>
                <p className="precio">{price}</p>
                <p> Origen: <span>{country}</span> | Garantía: <span>{warranty}</span></p>
            </div>
        </div>
    );
};

export default CarInfo;