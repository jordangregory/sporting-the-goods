import React, { Component } from "react";
import data from "../data/accessoriesData.js";
const styles = {
  listItem: {
    listStyleType: "none"
  },
  jerseyPic: {
    height: 200,
    width: 200
  }
};

class Accessories extends Component {
  render() {
    let accessoriesData = data.map((jersey, index) => {
      let sizes = jersey.sizes.map((size, index) => {
        return (
          <option key={index} value={size}>
            {size}
          </option>
        );
      });
      let colors = jersey.color.map((color, index) => {
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
              <h3>Style:</h3>
              <li style={styles.listItem}>
                <img style={styles.jerseyPic} src={jersey.img} alt="jersey" />
              </li>
              <li style={styles.listItem}>
                Size: <select>{sizes}</select>
              </li>
              <li style={styles.listItem}>
                Color: <select>{colors}</select>
              </li>
              <li style={styles.listItem}>
                Price: {jersey.price}
              </li>
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div>
        {accessoriesData}
      </div>
    );
  }
}

export default Accessories;
