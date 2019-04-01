import React, { Component } from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      <>

        <nav className="navbar navbar-expand-sm bg-warning ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link text-dark" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/login">
                  Login
                </Link>
              </li>

            </ul>
          </div>
        </nav>





      </>
    );
  }
}

export default Footer;
