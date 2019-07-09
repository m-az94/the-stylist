import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      userType: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, userType } = this.state;

    axios.post('/api/auth/register', { name, email, password, userType })
      .then((result) => {
        //   console.log(result)
        this.props.history.push("/login")
      });
  }

  render() {
    const { name, email, password, userType } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h5 class="form-signin-heading">Register</h5>
          <label for="inputName" class="sr-only">Name </label>
          <input type="name" class="form-control" placeholder="Name" name="name" value={name} onChange={this.onChange} required />
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required />
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required />

          <label >I am a ... </label>
          <br />
          <div className="radio">
            <label>
              <input type="radio" name="type" value="stylist" checked={this.state.userType === 'stylist'} onChange={e => this.setState({ userType: 'stylist' })} />
              Stylist
    </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="type" value="client" checked={this.state.userType === 'client'} onChange={e => this.setState({ userType: 'client' })} />
              Client
    </label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>



        </form>
      </div>
    );
  }
}

export default Create;
