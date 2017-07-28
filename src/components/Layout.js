import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div>
        <header>
          <button>
            <NavLink exact to="/">
              Sporting the Hockey Goods
            </NavLink>
          </button>

          <div>
            <button>
              <NavLink to="/equipment">Equipment</NavLink>
            </button>
            <button>
              <NavLink to="/accessories">Accessories</NavLink>
            </button>
            <button>
              <NavLink to="/jerseys">Jerseys</NavLink>
            </button>
          </div>
        </header>
        {this.props.children}
        <footer>
          <div>
            <button>
              <NavLink to="/about">About</NavLink>
            </button>
            <button>
              <NavLink to="/contact">Contact</NavLink>
            </button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
