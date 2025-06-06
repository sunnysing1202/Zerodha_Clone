import React from 'react';

function Hero() {
    return ( 
        <div className="container border-bottom mb-md-5">
            <div className="row text-center mt-3 mt-md-5 p-md-3 mb-md-5">
                <h1>Technology</h1>
                <h3 className="text-muted fs-4 mt-3">Sleek, modern, and intuitive trading platforms</h3>
                <p className="mt-3">Check out our <a href="#"  style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;