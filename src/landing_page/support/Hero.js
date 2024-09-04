import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track tickets</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." /><br />
          <a href="">Track account opening </a>
          <a href="">Track segment activation </a>
          <a href="">Intraday margins </a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li><a href="">Current Buybacks - August 2024</a></li>
            <li><a href="">Offer for sale (OFS) - August 2024</a></li>
          </ol>
          
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
