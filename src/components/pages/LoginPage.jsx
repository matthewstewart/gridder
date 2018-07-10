import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../modules/Auth';

import './LoginPage.css';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';
    if(storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.state = {
      redirect: false,
      errors: {},
      successMessage,
      user: {
        username: '',
        password: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(e) {
    e.preventDefault();

    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `username=${username}&password=${password}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', `https://api.omniuncommons.org/login`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        Auth.authenticateUser(xhr.response.token);       
        this.props.loginCurrentUser();
        this.setState({
          redirect: true,
          errors: {}
        });
      } else {
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;
        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);    
  }

  changeUser(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  render() {
    if(this.state.redirect){ return( <Redirect to="/" /> ) }
    return (
      <div className="LoginPage bg-2">
        <div className="page-content">
          <div className="page-title text-white">
            Login<br/>
            <form 
              className="mt-3"
              onSubmit={ this.processForm }
            >
              {this.state.successMessage && (
                <div className="message is-success">
                  <div className="message-header">Success</div>
                  <div className="message-body">
                    { this.state.successMessage }
                  </div>
                </div>
              )}
              {this.state.errors.summary && (
                <div className="message is-danger">
                  <div className="message-header">Error</div>
                  <div className="message-body">
                    { this.state.errors.summary }
                  </div>
                </div>
              )}           
              <div className="field">
                <label className="label text-white">Username</label>
                <div className="control">
                  <input 
                    className="input" 
                    name="username"
                    type="text"
                    onChange={ this.changeUser } 
                    value={ this.state.user.username }
                    placeholder="username"
                  />
                </div>
                {this.state.errors.username && (
                  <p className="help is-danger">
                    {this.state.errors.username}
                  </p>
                )}
              </div>
              <div className="field">
                <label className="label text-white">Password</label>
                <div className="control">
                  <input 
                    className="input" 
                    name="password"
                    type="password"
                    onChange={ this.changeUser } 
                    value={ this.state.user.password }
                    placeholder="password"
                  />
                </div>
                {this.state.errors.password && (
                  <p className="help is-danger">
                    {this.state.errors.password}
                  </p>
                )}
              </div>
              <div className="field">
                <p className="control has-text-centered mt-3">
                  <button type="submit" className="button is-success">
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
