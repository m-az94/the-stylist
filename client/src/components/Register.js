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
      gender: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, gender } = this.state;

    axios.post('/api/auth/register', { name, email, password, gender })
      .then((result) => {
        //   console.log(result)
        this.props.history.push("/login")
      });
  }

  render() {
    const { name, email, password, gender } = this.state;
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




          <label >Gender Type </label>
          <br />
          <div className="radio">
            <label>
              <input type="radio" name="gender" value="M" checked={this.state.gender === 'M'} onChange={e => this.setState({ gender: 'M' })} />
              Male
    </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="gender" value="F" checked={this.state.gender === 'F'} onChange={e => this.setState({ gender: 'F' })} />
              Female
    </label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>



        </form>
      </div>
    );
  }
}

export default Create;
