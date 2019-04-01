import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Store from "../../utils/Store";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;

    if (this.areInputsValid(email, password)) {
      API.login({
        email,
        password
      }).then(response => {
        Store.set("userData", response.data);
        this.props.history.push("/");
      });
    }
  };

  areInputsValid = (email, password) => {
    if (!email) {
      alert("Please fill out the email");
      return false;
    }

    if (!password) {
      alert("Please fill out the password");
      return false;
    }

    return true;
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container  w-50 my-md-5 pl-md-5 my-5">
        <br />
        <form className="form-signin" id="formSignUp" method="POST" onSubmit={this.handleSubmit}>
          <h5 className="text-dark text-center display-4 font-weight-bold mb-3">
            Log In
          </h5>
          <br />

          <div className="row">
            <div className="col-md-12 mb-3">
              <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                name="password"
                type="password"
                value={password}
                onChange={this.handleInputChange}
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn  btn-outline-dark my-4 py-3 h-100 btn-lg"
            >
              Submit
            </button>
          </div>

          <div className="text-center">
            <a className="small text-secondary">
              {" "}
              Don't have an account yet?{" "}
              <Link className="text-secondary" to="/register">
                {" "}
                Register
              </Link>{" "}
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
