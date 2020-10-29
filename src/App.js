import React from 'react';
import Home from './containers/Home'

import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"; 

import SignupPage from './containers/SignupPage';
import UserDashboard from './containers/UserDashboard'
import LoginPage from './containers/LoginPage'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
