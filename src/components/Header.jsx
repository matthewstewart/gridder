import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header bg-5">
        <div className="brand-container">
          <div className="brand">
            <Link 
              to="/"
              className="text-white"
            >Grid</Link>
          </div>
        </div>
        {(!this.props.isLoggedIn) ? (
          <nav>
            <Link 
              to="/login"
              className="text-white"
            >Login</Link>
            <Link 
              to="/"
              className="text-white"
            >Signup</Link>
          </nav>
        ) : (
          <nav>
            <Link 
              to="/"
              className="text-white"
            >Profile</Link>
            <a 
              onClick={this.props.logoutCurrentUser}
              className="text-white"
            >Logout</a>
          </nav>          
        )}  
      </div>
    );
  }
}

export default Header;
