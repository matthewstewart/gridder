import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {

  render() {
    return (
      <div className="LandingPage bg-2">
        <div className="page-content">
          <div className="page-title text-white">
            Gridder<br/>
            <small>
              A CSS Grid Demo
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
