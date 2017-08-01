import React, { Component } from "react";
import "./styles/App.css";
import Home from "./components/Home.js";
import BaseLayout from "./components/BaseLayout.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import ProductDetail from "./components/Details";
import ProductLine from "./components/productLine";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Home} />
              <Route path="/:productLine/:id" component={ProductDetail} />
              <Route path="/:productLine" component={ProductLine} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
