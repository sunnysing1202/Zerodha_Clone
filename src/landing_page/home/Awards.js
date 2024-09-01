import React from 'react';
import "./Awards.css"

function Awards() {
    return ( 
        <div className="container mt-5 mt-md-5">
            <div className="row">
                <div className="col-lg-6 col-m-12 p-3 p-md-5">
                    <img src="media/images/largestBroker.svg" className="largest-broker"/>
                </div>
                <div className="col-lg-6 col-m-12 p-3 p-md-5 mt-3 mt-md-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-3 mb-md-5">2+ million Zerodha clents contribute to over 15% of all reatil oredr volums in India dily by trading and investing in.</p>
                    <div className="row">
                        <div className="col-lg-6 col-m-12">
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-6 col-m-12">
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="Press Logo" className="press-logo"/>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;