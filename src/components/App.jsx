import React, { Component } from 'react';

import axios from 'axios';

import './App.css';

import Auth from './modules/Auth';
import Header from './Header';
import Router from './Router';
// import Footer from './Footer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirectHome: false,
      isLoggedIn: false,
      currentUser: {}
    };
    this.loginCurrentUser = this.loginCurrentUser.bind(this);
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);    
  }  

  loginCurrentUser() {
    let config = {
        'headers': {
          'authorization': `Bearer ${Auth.getToken()}`,
        }
    };
    //console.log(config);
    axios.get('https://api.omniuncommons.org/api/dashboard', config)
    .then(res => {
      console.log('Current User:');
      console.log(res.data.user);
      this.setState({
        isLoggedIn: true,
        currentUser: res.data.user
      });
    });
  }

  logoutCurrentUser() {
    Auth.deauthenticateUser();
    this.setState({
      redirectHome: true,
      isLoggedIn: false,
      currentUser: {}
    });
  }

  componentDidMount() {
    // quick logout toggle
    //Auth.deauthenticateUser();
    if(Auth.isUserAuthenticated()){
      this.loginCurrentUser()
    } 
  }

  render() {
    return (
      <div className="App">
        <Header 
          {...this.state}
          logoutCurrentUser={this.logoutCurrentUser}
        />
        <Router 
          {...this.state}
          loginCurrentUser={this.loginCurrentUser}
          logoutCurrentUser={this.logoutCurrentUser}
        />
        {/* <Footer /> */}
      </div>
    );
  }

}

export default App;
