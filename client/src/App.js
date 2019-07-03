
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Client from "./pages/Client";
// import Stylist from "./pages/Stylist";
import StylistCreateOutfit from "./pages/StylistCreateOutfit";
//import "./App.css";
//import './index.css';
import Main from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import VideoChat from './components/VideoChat'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path="/client" component={Client} />
          {/* <Route exact path="/stylist" components={Stylist} /> */}
          <Route exact path ="/stylistcreateoutfit" component={StylistCreateOutfit} />
          <Route path='/videoChat' component={VideoChat} />
        </Switch>
      </Router>
    );
  }
}

export default App;