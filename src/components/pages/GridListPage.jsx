import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GridListPage.css';

class GridListPage extends Component {

  render() {
    return (
      <div className="GridListPage bg-2">
        <div className="page-content">
          <div className="page-title text-white">
            Grid List<br/>
            <small>
              A CSS Grid Demo
            </small><br/>
            <small>
              <Link
                to="/"
                className="text-1"
              >Get Started</Link>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default GridListPage;
