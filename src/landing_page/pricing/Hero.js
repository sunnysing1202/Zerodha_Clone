import React from 'react';

function Hero() {
    return ( 
        <div className="container p-3 p-md-5 mb-4 mb-md-5">
            <div className="row text-center border-bottom text-center">
            <h1>Pricing</h1>
            <h3 className="text-muted fs-5 mt-3">Free equity investments and flat ₹20 intraday and F&O trades</h3>
            </div>
            <div className="row text-center">
                <div className="col-lg-4 col-sm-12 p-4">
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-4">
                <img src="media/images/intradayTrades.svg" />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-4">
                <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;