import React, { Component } from "react";
import { Link } from "react-router-dom";

class GroupButton extends Component {
  render() {
    return (
      <div className="btn-group my-4" role="group">

        <Link to="/login" className="btn btn-outline-dark text-dark">
          Login{" "}
        </Link>

        <Link to="/register" className="btn btn-outline-dark text-dark">
          Register
          </Link>
      </div>
    );
  }
}

export default GroupButton;
