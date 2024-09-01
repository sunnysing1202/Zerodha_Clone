import React from 'react';
import "./Educatio.css";

function Education() {
    return ( 
        <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-5 mb-md-0">
          <img src="media/images/education.svg" className="education-img" />
        </div>

        <div className="col-lg-6 col-sm-12">
        <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href=""  style={{textDecoration:"none"}}>Virsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <p className="mt-5">
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href=""  style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
     );
}

export default Education;