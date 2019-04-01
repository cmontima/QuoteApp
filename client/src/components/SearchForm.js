import React, { Component } from "react";

class SearchForm extends Component {
  static propTypes = {};

  static defaultProps = {};
  //el datalist id y el input list se tienen que llamar igual
  render() {
    return (
      <div className="input-group">
        <input
          className="form-control  form-control-dark" placeholder="Search" aria-label="Search" aria-describedby="Search"
          list="productos"
          type="text"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <datalist id="productos">
          {//cuando generas map, le necesitas dar el key index
            (this.props.productos || []).map((product, index) => {
              return (
                <option key={index} value={product}>
                  {product}
                </option>
              );
            })}
        </datalist>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.props.doSearch}><i className="fas fa-lg fa-search"></i></button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
