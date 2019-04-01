import React, { Component } from "react";
import API from "../utils/API";
import ProductRow from "../components/ProductRow";

// Purchase order page to visualize selected products.
class PurchaseOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: [],
      nombre: "",
      medida: "",
      precio_unitario: "",
      fecha_agregado: "",
      flete: "",
      fecha_entrega: "",
      cantidad_disponible: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getProducts()
      .then(res => {
        const products = res.data.map(product => {
          return {
            ...product,
            selected: false,
            quantity: 0
          };
        });
        this.setState({ productos: products });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const productos = this.state.productos;
    const listElements = productos.map(product => {
      return (
        <ProductRow
          product={product}
          updateProductById={this.updateProductById}
        />
      );
    });

    if (listElements.length === 0) return <h3>No Results to Display</h3>;

    return listElements;
  };

  updateProductById = (id, key, value) => {
    this.setState({
      productos: this.state.productos.map(producto => {
        if (producto._id === id) {
          return {
            ...producto,
            [key]: value
          };
        }

        return producto;
      })
    });
  };

  processRequest = () => {
    const selectedProducts = this.state.productos.filter(product => {
      return product.selected;
    });

    //Mandar al API los productos seleccionados
    API.generateOrder({
      items: selectedProducts.map(product => {
        return { productId: product._id, quantity: product.quantity };
      }),
      clientId: "5c9182fc9a8be229bc5c79b3"
    }).then(() => {
      console.log("Order placed successfuly");
    });
  };

  render() {
    const productosList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Purchase Order</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Medida</th>
              <th scope="col">Precio Unitario</th>
              <th scope="col">Fecha agregado</th>
              <th scope="col">Flete</th>
              <th scope="col">Fecha de entrega</th>
              <th scope="col">Cantidad disponible</th>
              <th scope="col">Cantidad requerida</th>
            </tr>
          </thead>
          <tbody>{productosList}</tbody>
        </table>
      </div>
    );
  }
}

export default PurchaseOrder;
