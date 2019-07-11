import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Container, Row, Col} from "./Grid"
import "./App.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        console.log(res);
        this.setState({ books: res.data });
      })
      .catch((error) => {

        if(error) {
          this.props.history.push("/login");
        }
      });
    axios.get("/api/")
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {

    let userType=this.state.books.userType;
    let dlink;
    switch(userType){
      case "stylist":
      dlink=<Link to={`/stylist-dashboard/${this.state.books._id}`}><button class="btn btn-primary"> Go To Your Dashboard </button></Link>;
      break;
      case "client":
      dlink=<Link to={`/client-dashboard/${this.state.books._id}`}><button class="btn btn-primary"> Go To Your Dashboard </button></Link>;
      break;
    }

    let clientInfo = this.state.books.clientInfo;
    console.log(clientInfo);
    let displayEditProfile;
    if(userType==="client"){
      displayEditProfile=<Link to={`/create-profile/${this.state.books._id}`}><button class="btn btn-primary">Update Your Profile</button></Link>
    }
    else{
      displayEditProfile=null;
    }

    return (
      <div class="container">
      <div class="panel panel-default">
        <div id="box">
        <Container>
          <Row>
          <h1 class="panel-title">Welcome, {this.state.books.name} &nbsp; </h1>
          </Row>
          <Row>
            
            <Col size="md-3"><h3>{displayEditProfile}</h3></Col>
            <Col size="md-3"><h3>{dlink}</h3></Col>
            <Col size="md-3">
            <h3> {localStorage.getItem('jwtToken') &&
              <button class="btn btn-primary" onClick={this.logout}>Logout</button>
            }
          </h3>
            </Col>
        
          </Row>
        </Container>

        </div>
      </div>
    </div>
    );
  }
}

export default App;