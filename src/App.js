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
import LoginPage from './containers/LoginPage'


function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar handleLogoutClick={props.handleLogoutClick} user={props.user} />
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
