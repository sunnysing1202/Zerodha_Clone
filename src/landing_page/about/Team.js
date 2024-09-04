import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-md-5  mt-md-5 ">
        <h1 className=" text-center mt-5">People</h1>
      </div>
      <div
        className="row p-md-5  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-lg-6 col-sm-12 p-md-5 mt-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-6">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-lg-6 col-sm-12 p-md-5">
          <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>

            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage </a>/<a href="#" style={{textDecoration:"none"}}> TradingQnA </a>/<a href="#" style={{textDecoration:"none"}}> Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
