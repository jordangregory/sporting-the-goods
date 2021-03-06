import React, { Component } from "react";
import productData from "../data/productData";

const styles = {
  background: {
    backgroundImage: "url(/outsideHockey.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttach: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  },
  paragraph: {
    backgroundColor: "#ffb81c",
    color: "#041E42",
    width: "50%"
  }
};

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
      <div style={styles.background}>
        <h1>Details</h1>
        <ul>
          <p style={styles.paragraph}>
            {this.state.product.name}
          </p>
          <p style={styles.paragraph}>
            {this.state.product.description}
          </p>
        </ul>
      </div>
    );
  }
}

export default Details;
