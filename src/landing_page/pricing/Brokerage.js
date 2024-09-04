import React from 'react';

function Brokerage() {
    return ( 
        <div className="container p-3 p-md-5 mb-4 mb-md-5">
            <div className="row text-center border-top p-5 mt-5">
                <div className="col-lg-8 col-sm-12 p-4 ">
                    <a href="#" style={{textDecoration:"none"}} ><h4>Brokerage calculator</h4></a>
                    <ul style={{textAlign:"left", lineHeight:"2.4", fontSize:"14px"}} className="text-muted">
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-sm-12 p-4">
                    <a href="#" style={{textDecoration:"none"}}><h4>List of charges</h4></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;