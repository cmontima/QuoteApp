import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import List from "../components/Lista";

class Search extends Component {
  state = {
    productos: [],
    currentValue: "",
    results: []
  };

  componentDidMount() {
    console.log("hola");
    API.getProducts().then(response => {
      console.log(response.data);
      this.setState({
        productos: response.data.map(a => a.nombre)
      });
    });
  }

  onInputChange = event => {
    this.setState({
      currentValue: event.target.value
    });
  };

  doSearch = () => {
    const product = this.state.currentValue;
    API.getImagesByBreed(product).then(response => {
      this.setState({
        results: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          productos={this.state.productos}
          value={this.state.currentValue}
          onChange={this.onInputChange}
          doSearch={this.doSearch}
        />
        <List results={this.state.results} />
      </div>
    );
  }
}

export default Search;
