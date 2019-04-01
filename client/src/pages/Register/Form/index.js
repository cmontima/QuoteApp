import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../../../utils/API";
import Store from "../../../utils/Store";
import Select from "react-select";
import "./buyers.css";

//if user selected pills-suppliers-tab or pills-buyers
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      selectedCompany: null,
      role: "buyer",
      options: []
    };
  }

  componentDidMount() {
    this.fetchCompanies();
  }

  fetchCompanies = () => {
    API.getCompanies().then(response => {
      const companies = response.data.map(company => {
        return { value: company._id, label: company.name };
      });

      this.setState({
        options: companies
      });
    });
  };

  changeRole = (role) => { 
    this.setState({
      role
    });
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSelectChange = selectedValue => {
    this.setState({
      selectedCompany: selectedValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;
    const company = this.state.selectedCompany;
    const role = this.state.role;

    if (this.areInputsValid(email, password, company)) {
      API.register({
        email,
        password,
        role,
        companyId: company.value
      }).then(response => {
        Store.set("userData", response.data);
        this.props.history.push("/");
      });
    }
  };

  areInputsValid = (email, password, company) => {
    if (!email) {
      alert("Please fill out the email");
      return false;
    }

    if (!password) {
      alert("Please fill out the password");
      return false;
    }

    if (!company) {
      alert("Please select the company");
      return false;
    }

    return true;
  };

  render() {
    const { email, password, options, selectedCompany } = this.state;
    return (
      <div
        className="container  w-100 my-md-5 pl-md-5 my-5"
        onSubmit={this.handleSubmit}
      >
        <form className="form-signin" id="formSignUp" method="POST">
          <h4 className="mb-3">Crea una cuenta</h4>
          <div className="row">
            <ul className="nav nav-pills " id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  id="pills-buyers-tab"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="pills-buyers"
                  aria-selected="true"
                  onClick={() => this.changeRole("buyer")}
                >
                  As a Buyer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  id="pills-suppliers-tab"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="pills-suppliers"
                  aria-selected="false"
                  onClick={() => this.changeRole("supplier")}
                >
                  As a Supplier
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                name="email"
                type="email"
                value={email}
                onChange={this.handleInputChange}
                className="form-control"
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
                className="form-control"
                value={password}
                onChange={this.handleInputChange}
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <Select
                options={options}
                value={selectedCompany}
                onChange={this.handleSelectChange}
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn  btn-outline-warning my-4 py-3 h-100 btn-lg"
            >
              Continuar
            </button>
          </div>

          <div className="text-center">
            <p className="small text-secondary">
              {" "}
              Already have an account?{" "}
              <Link className="text-secondary" to="/login">
                {" "}
                Log In
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
