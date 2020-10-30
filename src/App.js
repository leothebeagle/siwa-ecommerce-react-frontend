import { connect } from 'react-redux';

import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"; 

import {logoutUser} from './actions/userActions'
import React from 'react';
import Home from './containers/Home'
import Navbar from './components/Navbar'
import SignupPage from './containers/SignupPage';
import UserDashboard from './containers/UserDashboard'
import LoginPage from './containers/LoginPage'


function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar handleLogoutClick={props.handleLogoutClick} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  handleLogoutClick: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(App);
