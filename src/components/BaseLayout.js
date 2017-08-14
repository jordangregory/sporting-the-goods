import React, { Component } from "react";
import { NavLink } from "react-router-dom";
const styles = {
  backgroundContainer: {
    background: "#FFB81C"
  },
  navigation: {
    display: "inline-block",
    textDecoration: "none",
    background: "#FFB81C",
    color: "#041E42",
    padding: 10,
    borderRight: "1px solid black",
    borderBottom: "1px solid black"
  },
  homePage: {
    textAlign: "center"
  }
};

class BaseLayout extends Component {
  render() {
    return (
      <div style={styles.backgroundContainer}>
        <header>
          <NavLink
            style={styles.navigation}
            activeStyle={{
              backgroundColor: "green",
              color: "white"
            }}
            exact
            to="/"
          >
            Top Shelf Equipement - Home
          </NavLink>

          <div>
            <NavLink
              style={styles.navigation}
              activeStyle={{
                backgroundColor: "green",
                color: "white"
              }}
              to="/gloves"
            >
              Gloves
            </NavLink>

            <NavLink
              style={styles.navigation}
              activeStyle={{ backgroundColor: "green", color: "white" }}
              to="/sticks"
            >
              Sticks
            </NavLink>

            <NavLink
              style={styles.navigation}
              activeStyle={{ backgroundColor: "green", color: "white" }}
              to="/jerseys"
            >
              Jerseys
            </NavLink>
          </div>
        </header>
        {this.props.children}
        <footer>
          <div>
            <NavLink
              style={styles.navigation}
              activeStyle={{ backgroundColor: "green", color: "white" }}
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              style={styles.navigation}
              activeStyle={{ backgroundColor: "green", color: "white" }}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </footer>
      </div>
    );
  }
}

export default BaseLayout;
