import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";

const FourOhFour = () => <h1>404</h1>;

const ClientApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

render(<ClientApp />, document.getElementById("app"));
