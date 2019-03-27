import React from 'react';
import firstCar from '../img/buyCar.png';

import '../styles/ContentHome.css'

const ContentHome = () => {
    return (
        <div className="contentHome">
            <h2>Find your dream car</h2>
            <p>Search multiple new & used car websites in one easy search</p>
            <img src={firstCar} alt="" />
        </div>
    )
}

export default ContentHome;