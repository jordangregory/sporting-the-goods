import React, { Component } from "react";
import { NavLink } from "react-router-dom";
const styles = {
  backgroundContainer: {
    background: "#FFB81C"
  },
  navigation: {
    textDecoration: "none",
    background: "#FFB81C",
    marginRight: 10,
    color: "#041E42"
  },
  homePage: {
    textAlign: "center"
  }
};

class Layout extends Component {
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
              activeStyle={{ backgroundColor: "green", color: "white" }}
              to="/equipment"
            >
              Equipment
            </NavLink>

            <NavLink
              style={styles.navigation}
              activeStyle={{ backgroundColor: "green", color: "white" }}
              to="/accessories"
            >
              Accessories
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

export default Layout;
