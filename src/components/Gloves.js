import React, { Component } from "react";
import data from "../data/glovesData.js";
import { Link } from "react-router-dom";

const styles = {
  listItem: {
    listStyleType: "none"
  },
  glovesPic: {
    height: 200,
    width: 200
  }
};

class Gloves extends Component {
  render() {
    let glovesData = data.map((glove, index) => {
      let gloves = glove.sizes.map((size, index) => {
        return (
          <option key={index} value={size}>
            {size}
          </option>
        );
      });
      let colors = glove.color.map((color, index) => {
        return (
          <option key={index} value={color}>
            {color}
          </option>
        );
      });

      return (
        <div key={index}>
          <div>
            <ul>
              <h1>Style:</h1>
              <li style={styles.listItem}>
                <img style={styles.glovesPic} src={glove.img} alt="gloves" />
              </li>
              <li style={styles.listItem}>
                Size: <select>{gloves}</select>
              </li>
              <li style={styles.listItem}>
                Color: <select>{colors}</select>
              </li>
              <li style={styles.listItem}>
                Price: {glove.price}
              </li>
              <Link to="/description">
                <button>Description</button>
              </Link>
            </ul>
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
