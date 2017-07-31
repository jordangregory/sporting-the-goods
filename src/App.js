import React, { Component } from "react";
import "./styles/App.css";
import Home from "./components/Home.js";
import BaseLayout from "./components/BaseLayout.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Sticks from "./components/Sticks.js";
import Jerseys from "./components/Jerseys.js";
import Gloves from "./components/Gloves.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/jerseys" component={Jerseys} />
              <Route path="/sticks" component={Sticks} />
              <Route path="/gloves" component={Gloves} />
              <Route path="/about" component={About} />
              <Route exact path="/" component={Home} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
