import React, { Component } from "react";
import productData from "../data/productData";
class Details extends Component {
  render() {
    let productLine = this.props.match.params.productLine;
    console.log("productLine: ", productLine);
    let name = this.props.match.params.id;
    console.log("name: ", name);

    let products = productData[productLine];
    let product = products.find(function(item) {
      return (item.name = name);
    });
    console.log("product: ", product);
    return (
      <div>
        <h1>Details</h1>
        <ul>
          <p>
            {product.description}
          </p>
        </ul>
      </div>
    );
  }
}

export default Details;
