import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper blue-grey">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Thulla
            </Link>
            <Link
              to="/dashboard"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo black-text"
            >
              <i className="material-icons">code</i>
              Home
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
