import React, { Component } from "react";
import productData from "../data/productData";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 0,
        name: "",
        sizes: [],
        color: [],
        img: "",
        price: "",
        descripition: ""
      }
    };
  }

  componentDidMount() {
    let productLine = this.props.match.params.productLine;
    console.log("productLine: ", productLine);
    let index = this.props.match.params.id;
    // console.log("name: ", name);

    let products = productData[productLine];
    let product = products[index];
    console.log(product);
    this.setState({ product }, () => console.log(this.state));
  }

  render() {
    return (
      <div>
        <h1>Details</h1>
        <ul>
          <p>
            {this.state.product.name}
          </p>
          <p>
            {this.state.product.description}
          </p>
        </ul>
      </div>
    );
  }
}

export default Details;
