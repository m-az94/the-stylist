import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap/'
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import Main from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
