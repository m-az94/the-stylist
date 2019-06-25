import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Client from "./pages/Client";
// import Stylist from "./pages/Stylist";
import StylistCreateOutfit from "./pages/StylistCreateOutfit";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/client" components={Client} /> */}
          {/* <Route exact path="/stylist" components={Stylist} /> */}
          <Route exact path ="/stylistcreateoutfit" component={StylistCreateOutfit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
