import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import UserProfilePage from './pages/UserProfilePage';
import GridListPage from './pages/GridListPage';
import GridNewPage from './pages/GridNewPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TestPage from './pages/TestPage';

class Router extends Component {
  render() {
    const landingPage = (props) => {
      return (
        <LandingPage 
          {...props}
          {...this.props}
        />
      );
    };
    const gridListPage = (props) => {
      return (
        <GridListPage 
          {...props}
          {...this.props}
        />
      );
    };
    const gridNewPage = (props) => {
      return (
        <GridNewPage 
          {...props}
          {...this.props}
        />
      );
    };
    const loginPage = (props) => {
      return (
        <LoginPage 
          {...props}
          {...this.props}
        />
      );
    };
    const signupPage = (props) => {
      return (
        <SignupPage 
          {...props}
          {...this.props}
        />
      );
    };

    const userProfilePage = (props) => {
      return (
        <UserProfilePage 
          {...props}
          {...this.props}
        />
      );
    };

    const testPage = (props) => {
      return (
        <TestPage 
          {...props}
          {...this.props}
        />
      );
    };

    return (
      <main>
        <Switch>
          <Route exact path='/' component={landingPage}/>
          <Route exact path='/profile' component={userProfilePage}/>
          <Route exact path='/grids/new' component={gridNewPage}/>
          <Route exact path='/grids' component={gridListPage}/>
          <Route exact path='/login' component={loginPage}/>
          <Route exact path='/signup' component={signupPage}/>
          <Route exact path='/test' component={testPage}/>
        </Switch>
      </main>
    );
  }
}

export default Router;