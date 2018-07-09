import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header bg-2">
        <div className="brand-container">
          <div className="brand">Gridder</div>
        </div>
      </div>
    );
  }
}

export default Header;
