
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
import CreateMeeting from './pages/createMeeting';
import clientMeeting from './pages/clientMeeting';
import stylistMeeting from './pages/stylistMeeting';
import bookMeeting from './pages/bookMeeting';
import videoChat from './pages/videoChat';
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import StylistData from './stylist.json';
import ClientInfoData from './clientinfo.json';
import Card from './components/Card';

console.log(StylistData)

class App extends Component {

  render() {

    console.log(StylistData)
    return (
      <Router>
        <div>
          <Wrapper>
          <TopNavBar />
          {/* <SidebarExample /> */}
            <Route exact path='/' component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            {/* // <Route path='/client-dashboard' component={ClientDashboard} />
            // <Route path='/stylist-dashboard' component={StylistDashboard} /> */}
            <Route path='/profile' component={ClientProfile} />
            <Route path='/meetings/create' component={CreateMeeting} />
            <Route path='/meetings/book' component={bookMeeting} />
            <Route path='/dashboard/doctor' component={clientMeeting} />
            <Route path='/dashboard/patient' component={stylistMeeting} />

            <Route path='/meetings/join/' component={videoChat} />
            <Route path='/client-dashboard/:clientID' component={ClientDashboard} />
            <Route path='/stylist-dashboard/:stylistID' component={StylistDashboard} />
            <Route path='/create-profile/:clientID' component={ClientProfile} />
            {/* <Route exact path="/client" components={Client} /> */}
            {/* <Route exact path="/stylist" components={Stylist} /> */}
            <Route exact path='/stylistcreateoutfit' component={StylistCreateOutfit} />
          <Footer />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;