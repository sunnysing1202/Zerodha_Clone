import React from 'react';
import "./Hero.css"

function Hero() {
    return ( 
        <div className="container p-3 p-md-5 mb-4mb-md-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-4 mb-md-5 hero-image" />
                <h1 className="mt-3 mt-md-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-1 p-md-2 btn btn-primary  fs-6 mb-4 mb-md-5 signup-button">Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;