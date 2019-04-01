import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Sidebar extends Component {
  render() {
    return (
      <>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">

              <li className="nav-item text-left ml-2 " >
                <span>
                  <Link
                    className=" active text-dark nav-link font-weight-bolder"
                    to="/dashboard"
                  >
                    &nbsp; Dashboard &nbsp;
                  </Link>
                </span>
              </li>
              <li className="nav-item text-left ml-2">

                <Link className="text-dark nav-link font-weight-bolder" to="#">
                  &nbsp; Orders &nbsp;
                  </Link>

              </li>

              <li className="nav-item text-left ml-2">
                <a
                  className="nav-link font-weight-bolder text-dark"
                  data-toggle="collapse"
                  href="#collapse0"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  &nbsp; Products &nbsp;
                  <i className=" ml-4 fas fa-lg fa-caret-down" />


                </a>

                <div className="collapse" id="collapse0">
                  <span className="nav-item">
                    <Link className="nav-link " to="/productsdashboard">
                      <span className="nav-link  text-left text-secondary">See All</span>
                    </Link>
                  </span>

                  <span className="nav-item">
                    <Link className="nav-link " to="/newproduct">
                      <span className="nav-link text-left  text-secondary">Add</span>
                    </Link>
                  </span>
                </div>
              </li>

              <li className="text-left ml-3 nav-item">
                <a
                  className="nav-link text-dark font-weight-bolder"
                  data-toggle="collapse"
                  href="#collapse1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Customers &nbsp;
                  <i className=" ml-4 fas fa-lg fa-caret-down" />
                </a>

                <div className="collapse" id="collapse1">
                  <span className="nav-item">
                    <Link
                      className=" nav-link font-weight-bolder"
                      to="/clientdashboard"
                    >
                      <span className="nav-link text-secondary">See All</span>
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Sidebar;
