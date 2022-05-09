import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="navbar header navbar-expand-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img src="/images/LogoHeader.png" className="logo" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <img src="/images/icons/menu.png" alt="" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav bg-danger">
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
      </div>
    </nav>
  );
}

export default Header;
