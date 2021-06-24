import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './timeUntil';

const Featured = () => {
    return (
        <div className="featured_container">
            <Carrousel />
            <a href="#description" className="site_title">
                <div className="wrapper">
                    IT Job Fair Toronto
                </div>
            </a>
            <TimeUntil />
        </div>
    )
}

export default Featured;