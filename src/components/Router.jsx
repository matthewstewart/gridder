import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import NewGridPage from './pages/NewGridPage';
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
    const newGridPage = (props) => {
      return (
        <NewGridPage 
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
          <Route exact path='/grids/new' component={newGridPage}/>
          <Route exact path='/login' component={loginPage}/>
          <Route exact path='/signup' component={signupPage}/>
          <Route exact path='/test' component={testPage}/>
        </Switch>
      </main>
    );
  }
}

export default Router;
