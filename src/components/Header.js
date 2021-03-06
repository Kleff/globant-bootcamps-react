import React from 'react';

import '../styles/Header.css';


const Header = () => {
    return (
        <div className="header">
            <h1><a href="/">CAR<span>|</span>STORE</a></h1>
            <p>If you're looking to buy or sell your car, you're in the right place.</p>
        </div>
    );
};

export default Header;