import React from 'react'
import "./Hero.css";

function Hero({children, hero}) {
    return (
        <div className={hero}>
            {children}
        </div>
    )
}

Hero.defaultProps={
    hero:"defaultHero"
}

export default Hero;
