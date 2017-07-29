import React, { Component } from "react";
import data from "../data/data.js";
const styles = {
  jerseyContainer: {
    display: "flex"
  },
  listItem: {
    listStyleType: "none"
  },
  jerseyPic: {
    height: 200,
    width: 200
  }
};

class Jerseys extends Component {
  render() {
    let jerseyData = data.map((jersey, index) => {
      let sizes = jersey.sizes.map((size, index) => {
        return (
          <option key={index} value={size}>
            {size}
          </option>
        );
      });

      return (
        <div key={index}>
          <div style={styles.jerseyContainer}>
            <ul>
              <li style={styles.listItem}>
                Size: <select>{sizes}</select>
              </li>
              <li style={styles.listItem}>
                Color: {jersey.color}
              </li>
              <li style={styles.listItem}>
                <img style={styles.jerseyPic} src={jersey.img} alt="jersey" />
              </li>
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div>
        {jerseyData}
      </div>
    );
  }
}

export default Jerseys;
