import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 p-md-5 mt-3" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="#">Track tickets</a>
      </div>

      <div className="row p-md-5 m-md-3 mt-3">
        <div className="col-lg-6 col-sm-12 p-md-5 mt-2 mb-2">
          <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." className="mt-3 mb-3"/><br />
          <a href="#" className="mx-1">Track account opening </a>
          <a href="#" className="mx-1">Track segment activation </a>
          <a href="#" className="mx-1">Intraday margins </a>
          <a href="#" className="mx-1">Kite user manual</a>
        </div>
        <div className="col-lg-6 col-sm-12 p-md-5">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li><a href="#">Current Buybacks - August 2024</a></li>
            <li><a href="#">Offer for sale (OFS) - August 2024</a></li>
          </ol>
          
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
