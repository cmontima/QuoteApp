import React, { Component } from "react";
import NavDash from "./../components/NavDash";
import API from "../utils/API";

class ClientDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      nombre_compania: "",
      direccion: "",
      estado: "",
      telefono: "",
      correo: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getClients()
      .then(res => {
        this.setState({ clients: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const clients = this.state.clients;
    const listElements = clients.map(element => {
      return (
        <tr className="table py-4" key={element._id}>
          <td > <i className="fas fa-lg fa-user-tag text-warning"></i>&nbsp;{element.nombre_compania} </td>
          <td>{element.direccion}</td>
          <td>{element.estado}</td>
          <td>{element.telefono}</td>
          <td>{element.correo}</td>
          <td>
            <input className="far fa-lg fa-square" type="checkbox" />
          </td>
          <td>
            <a><i className="far fa-lg fa-plus-square"></i></a>
          </td>
        </tr>
      );
    });

    if (listElements.length === 0) return <tr><td>No Results to Display.</td></tr>;

    return listElements;
  };
  render() {
    const clientList = this.getExamplesAsList();
    return (
      <>
        <NavDash />
        <div className="container-fluid ml-5 ">
          <div className="row">
            <main className="p-5 mr-5 col-md-9 col-lg-10 ">
              <h1>Clientes</h1>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Compañia</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Seleccionar</th>
                    <th scope="col">Agregar</th>
                  </tr>
                </thead>
                <tbody>{clientList}</tbody>
              </table>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default ClientDashboard;
