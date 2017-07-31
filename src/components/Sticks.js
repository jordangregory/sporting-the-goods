import React, { Component } from "react";
import data from "../data/stickData.js";

const styles = {
  listItem: {
    listStyleType: "none"
  },
  stickPic: {
    height: 200,
    width: 200
  }
};

class Sticks extends Component {
  render() {
    let stickData = data.map((stick, index) => {
      let sticks = stick.skillLevel.map((level, index) => {
        return (
          <option key={index} value={level}>
            {level}
          </option>
        );
      });
      let colors = stick.color.map((color, index) => {
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
                <img style={styles.stickPic} src={stick.img} alt="stick" />
              </li>
              <li style={styles.listItem}>
                Size: <select>{sticks}</select>
              </li>
              <li style={styles.listItem}>
                Color: <select>{colors}</select>
              </li>
              <li style={styles.listItem}>
                Price: {stick.price}
              </li>
              <button>Add to cart</button>
            </ul>
          </div>
        </div>
      );
    });

    return (
      <div>
        {stickData}
      </div>
    );
  }
}

export default Sticks;
