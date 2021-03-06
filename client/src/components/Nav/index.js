import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (



    <>

      <nav className="navbar navbar-expand-lg bg-white sticky-top" id="mainNav">
        <div className="container">
          <div className="nav-item">
            <h1 className="nav-link text-warning display-5 font-weight-bolder" href="/">
              <Link className="text-warning display-5 font-weight-bolder h1" to="/">
                <i class="fas fa-1x fa-magic"></i>   Houdini
              </Link>
            </h1>
          </div>
          <button className="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-dark"><i className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger text-dark" href="#about">About</a>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger text-dark" href="#buyers">
                  <Link className="text-dark" to="/">
                    Buyers
                  </Link></span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger text-dark" href="#suppliers">
                  <Link className="text-dark" to="/">
                    Suppliers
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span className="nav-link js-scroll-trigger text-dark">
                  <Link className="text-dark" to="/register">
                    Register
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span className="nav-link js-scroll-trigger text-dark">  <Link className="text-dark" to="/login">
                  Login
                 </Link></span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger text-dark"> <Link className="text-dark" to="/contact">
                  Contact
                </Link></span>

              </li>
            </ul>
          </div>
        </div>
      </nav>





    </>




  );
}

export default Nav;
