import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header bg-2">
        <div className="brand-container">
          <div className="brand">
            <Link 
              to="/"
              className="text-white"
            >Grid</Link>
          </div>
        </div>
        <nav>
          <Link 
            to="/grids/new"
            className="text-white"
          >New Grid</Link>
          <Link 
            to="/test"
            className="text-white"
          >Test</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
