import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name:'',
      email: '',
      password: '',
      type:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {name, email, password , type} = this.state;

    axios.post('/api/auth/register', { name,email, password,type })
      .then((result) => {
        //   console.log(result)
        this.props.history.push("/login")
      });
  }

  render() {
    const { name,email, password ,type} = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label for ="inputName" class="sr-only">Name </label>
          <input type="name" class="form-control" placeholder="name" name="name" value={name} onChange={this.onChange} required/>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
         
          
          

    <label > Type </label>  
    <br />
    <div className="radio">
    <label>
    <input type="radio" name="type" value="Stylist" checked={this.state.type === 'Stylist'} onChange={e => this.setState({ type: 'Sytlist'})} />
    Stylist
    </label>
    </div>
    <div className="radio">
    <label>
    <input type="radio" name="type" value="Client" checked={this.state.type === 'Client'} onChange={e => this.setState({ type: 'Client'})} />
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
