
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Client from "./pages/Client";
// import Stylist from "./pages/Stylist";
import StylistCreateOutfit from "./pages/StylistCreateOutfit";
//import "./App.css";
//import './index.css';
import Main from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import ClientDashboard from './pages/ClientDashboard';
import ClientProfile from './pages/ClientProfile';
import StylistDashboard from './pages/StylistDashboard';
import SideNavBar from "./components/SideNavBar";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import StylistData from './stylist.json';
import Card from './components/Card';

console.log(StylistData)

class App extends Component {

  render() {

    console.log(StylistData)
    return (
      <Router>
        <div>
          <Wrapper>
          {/* <SideNavBar /> */}
          <TopNavBar />
            <Route exact path='/' component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/client-dashboard' component={ClientDashboard} />
            <Route path='/stylist-dashboard' component={StylistDashboard} />
            <Route path='/profile' component={ClientProfile} />
            {/* <Route exact path="/client" components={Client} /> */}
            {/* <Route exact path="/stylist" components={Stylist} /> */}
            <Route exact path="/stylistcreateoutfit" component={StylistCreateOutfit} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;