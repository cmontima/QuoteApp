import React, { Component } from "react";
import Form from "./Form";
import "./style.css";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="col-12 mt-5">
          <div className="col-12 ">
            <h5 className=" text-dark text-center display-4 font-weight-bold">
              Registrate
            </h5>
            <p className="lead text-center">Ingresa la siguiente información</p>

          </div>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-buyers"
            role="tabpanel"
            aria-labelledby="pills-buyers-tab"
          >
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
