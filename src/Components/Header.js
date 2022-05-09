import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header navbar-light">
      <a className="navbar-brand" href="#">
        <img src="/images/LogoHeader.png" className="logo" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link
              class="nav-link" to="hero" spy={true} smooth={true} activeStyle={{ color: "red" }}>
              Start
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="benifits" spy={true} smooth={true}>
              Benefits
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="mission" spy={true} smooth={true}>
              Über Uns
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="download" spy={true} smooth={true}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
