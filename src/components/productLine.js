import React, { Component } from "react";
import productData from "../data/productData";
import { Link } from "react-router-dom";

const styles = {
  listItem: {
    listStyleType: "none"
  },
  picture: {
    height: 200,
    width: 200
  },
  container: {
    display: "flex"
  }
};

class Gloves extends Component {
  render() {
    let productLine = this.props.match.params.productLine;
    console.log("productLine: ", productLine);
    let data = productData[productLine];
    console.log("data: ", data);
    let glovesData = data.map((glove, index) => {
      let gloves;
      let detailTitle;
      if (glove.sizes) {
        detailTitle = "Gloves";
        gloves = glove.sizes.map((size, index) => {
          return (
            <option key={index} value={size}>
              {size}
            </option>
          );
        });
      }

      if (glove.skillLevel) {
        detailTitle = "Skill levels";
        gloves = glove.skillLevel.map((size, index) => {
          return (
            <option key={index} value={size}>
              {size}
            </option>
          );
        });
      }

      let colors = glove.color.map((color, index) => {
        return (
          <option key={index} value={color}>
            {color}
          </option>
        );
      });

      let linkUrl = `./${productLine}/${glove.name}`;
      return (
        <div style={styles.container} key={index}>
          <div>
            <div>
              <ul>
                <h1>
                  Name: {glove.name}
                </h1>
                <li style={styles.listItem}>
                  <img style={styles.picture} src={glove.img} alt="gloves" />
                </li>
                <li style={styles.listItem}>
                  {detailTitle}: <select>{gloves}</select>
                </li>
                <li style={styles.listItem}>
                  Color: <select>{colors}</select>
                </li>
                <li style={styles.listItem}>
                  Price: {glove.price}
                </li>

                <button>
                  <Link to={linkUrl}>Details</Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {glovesData}
      </div>
    );
  }
}

export default Gloves;
