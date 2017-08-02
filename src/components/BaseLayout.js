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
    marginRight: 10,
    color: "#041E42",
    padding: 10
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
            Sporting the Hockey Goods
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
