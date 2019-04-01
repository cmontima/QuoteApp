import React, { Component } from "react";
import NavDashboard from "./../../components/NavDash";

class Dashboard extends Component {
  render() {
    return (
      <>
        <NavDashboard />

        <div className="container p-5 mt-1 mr-1 col-md-9 col-lg-10 ">

          <div className="card-deck mb-3 text-center">

            <div className="card mb-4">
              <div className="card-header bg-warning">
                <h4 className="my-0 font-weight-bolder">Orders
                <span > <i className="ml-2 far fa-lg  text-dark fa-clipboard"></i></span>
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title  display-2 font-weight-bolder">150</h1>
                <h3>New Orders</h3>
              </div>
            </div>


            <div className="card mb-4">
              <div className="card-header bg-light">
                <h4 className="my-0 font-weight-bolder text-warning">Stadistics
                                <span> <i className="ml-2 fas fa-lg fa-chart-bar"></i></span>
                </h4>
              </div>
              <div className="card-body p-4">

                <div className="progress mb-3">
                  <div className="progress-bar bg-warning w-25 " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><p className="font-weight-bold h6">Jan</p></div>
                </div>
                <div className="progress mb-3">
                  <div className="progress-bar bg-secondary w-50 " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><p className="font-weight-bold h6">Feb </p> </div>
                </div>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning w-75 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> <p className="font-weight-bold h6">Mar </p></div>
                </div>
                <div className="progress mb-3">
                  <div className="progress-bar bg-dark w-100 " role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> <p className="font-weight-bold h6">Apr </p></div>
                </div>
              </div>
            </div>




            <div className="card mb-4">
              <div className="card-header bg-dark">
                <h4 className="my-0 font-weight-bolder text-warning">Clients
                 <span > <i className="ml-2 fas  fa-lg fa-users"></i></span>
                </h4>

              </div>
              <div className="card-body">
                <h1 className="card-title text-warning  display-2 font-weight-bolder">+20</h1>
                <h3>New Clients</h3>
              </div>
            </div>
          </div>

          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-light">Orders</button>
            <button type="button" className="btn btn-light">Products</button>
            <button type="button" className="btn btn-light">Clients</button>
          </div>



          <div className="my-3 p-3 bg-white rounded">
            <h6 className="border-bottom border-gray pb-2 mb-0">Recent Orders</h6>
            <div className="media text-muted pt-3">
              <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#ffc107" /></svg>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
            </div>
            <div className="media text-muted pt-3">
              <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#343a40" /></svg>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
            </div>
            <div className="media text-muted pt-3">
              <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#ffc107" /></svg>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
            </div>

            <div className="media text-muted pt-3">
              <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#343a40" /></svg>
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@username</strong>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
            </div>



            <small className="d-block text-right mt-3">
              <a href="#">All updates</a>
            </small>
          </div>


        </div>
      </>
    );
  }
}

export default Dashboard;
