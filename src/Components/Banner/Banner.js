import React from 'react';
import "./Banner.css";

function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
            <h2>
                {title}
            </h2>

            <div className="banner_space"></div>

            <p>
                {subtitle}
            </p>
            {children}
        </div>
    )
}

export default Banner;
