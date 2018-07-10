import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './SignupPage.css';

class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      user: {
        username: "",
        password: "",
        passwordConfirm: ""
      },
      errors: {},
    };
    this.changeUser = this.changeUser.bind(this);
    this.processForm = this.processForm.bind(this);
  }

  changeUser(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;
    this.setState({
      user
    });    
  }

  processForm(e) {
    e.preventDefault();
    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `username=${username}&password=${password}`;
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'https://api.omniuncommons.org/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      console.log(xhr.status)
      if(xhr.status === 200){
        localStorage.setItem('successMessage', xhr.response.message);
        this.setState({
          errors: {},
          redirect: true
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

  render() {
    if(this.state.redirect){ return( <Redirect to="/login" /> ) }
    let passwordsMatch = this.state.user.password.length > 0 && this.state.user.passwordConfirm.length > 0 && this.state.user.password === this.state.user.passwordConfirm;
    return (
      <div className="SignupPage bg-2">
        <div className="page-content">
          <div className="page-title text-white">
            Sign Up<br/>
            <form 
              className="mt-3"
              onSubmit={ this.processForm }
            >
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
                <label className="label text-white">Confirm Password</label>
                <div className="control">
                  <input 
                    className="input" 
                    name="passwordConfirm"
                    type="password"
                    onChange={ this.changeUser } 
                    value={ this.state.user.passwordConfirm }
                    placeholder="confirm password"
                  />
                </div>
                {(passwordsMatch) ? (
                  <p className="help is-success">
                      Passwords Match
                  </p>
                ) : null }
              </div>
              {(passwordsMatch && this.state.user.username.length > 0) ? (              
                <div className="field">
                  <p className="control has-text-centered mt-3">
                    <button type="submit" className="button is-link">
                      Sign Up
                    </button>
                  </p>
                </div>
              ) : null }  
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
