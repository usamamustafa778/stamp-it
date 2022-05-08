import React from "react";
import "./style.css"
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="header container-fluid">
      <div className="row">
        <div className="col-md-4 logo">
          <a href="index.html">
            <img src="/images/LogoHeader.png" alt="" />
          </a>
        </div>
        <div className="col-md-8">
          <nav class="navbar navbar-expand-sm">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="hero"
                  spy={true}
                  smooth={true}
                  activeStyle={{ color: "red" }}
                >
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
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
