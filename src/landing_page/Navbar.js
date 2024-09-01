import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom sticky-top nav-background">
      <div class="container p-1 p-md-2">
        <Link class="navbar-brand nav-anchor m-auto"  to="/">
          <img src="media/images/logo.svg" alt="logo" className="logo-img"/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="d-flex" role="search">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
