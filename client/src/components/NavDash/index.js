import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./../Sidebar";
import Search from './../../pages/Search';


class NavDashboard extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top" id="mainNav">
          <div className="container">
            <div className="nav-item">
              <h1>
                <Link
                  className=" nav-link text-warning font-weight-bolder"
                  to="/dashboard"
                >
                  <i className="fas fa-1x fa-magic"></i>   Houdini
                </Link>
              </h1>
            </div>

            <Search />

            <div className="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className=" nav-link js-scroll-trigger text-light"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-placement="bottom"
                    title="User"
                  >
                    <i className=" fa-lg far fa-user" />
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="row">
                      <div>
                        <a className="dropdown-item col-12 col-md-8">
                          Notification
                          <i className=" col-6 col-md-4 far fa-lg fa-bell " />
                        </a>
                        <a className="dropdown-item col-12 col-md-8">
                          Message &nbsp;
                          <i className="col-6 col-md-4 badge badge-warning">
                            9
                          </i>
                        </a>
                        <a className="dropdown-item col-12 col-md-8">
                          Configuration
                          <i className=" col-6 col-md-4 fas fa-cogs" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <p
                    className="nav-link js-scroll-trigger text-light"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add New Product"
                  >
                    <Link className="text-light" to="/newproduct">
                      <i className="fas fa-lg fa-plus" />{" "}
                    </Link>
                  </p>
                </li>
                <li className="nav-item">
                  <p
                    className="nav-link js-scroll-trigger text-light"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Sign Out"
                  >
                    {" "}
                    <Link className="text-light" to="/">
                      <i className="  fas fa-lg fa-sign-out-alt" />
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="m-5">
          <Sidebar />
        </div>
      </>
    );
  }
}

export default NavDashboard;
