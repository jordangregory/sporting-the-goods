import React, { Component } from "react";
import "./styles/App.css";
import Home from "./components/Home.js";
import Layout from "./components/Layout.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Accessories from "./components/Accessories.js";
import Jerseys from "./components/Jerseys.js";
import Equipment from "./components/Equipment.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/jerseys" component={Jerseys} />
              <Route path="/equipment" component={Equipment} />
              <Route path="/accessories" component={Accessories} />
              <Route path="/about" component={About} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
