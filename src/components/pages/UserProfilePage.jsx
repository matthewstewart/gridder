import React, { Component } from 'react';
import './UserProfilePage.css';

class UserProfilePage extends Component {

  render() {
    return (
      <div className="UserProfilePage bg-2">
        <div className="page-content">
          <div className="page-title text-white">
            <h3 className=" is-capitalized">{this.props.currentUser.username} Profile</h3>
            <small>
              Goes Here
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
