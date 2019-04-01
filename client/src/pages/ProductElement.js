import React from "react";
import PropTypes from "prop-types";

class ProductElement extends React.Component {
  static propTypes = {
    todoText: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    selectTodo: PropTypes.func.isRequired
  };
  static defaultProps = {
    todoText: "",
    id: -1,
    selectTodo: () => {
      console.log("No select todo defined");
    }
  };

  onEditClick = () => {
    this.props.selectTodo(this.props.id);
  };
  render() {
    return (
      <li>
        <p>id: {this.props.id} </p>
        <button onClick={this.onEditClick}>Edit</button>
      </li>
    );
  }
}

export default ProductElement;
