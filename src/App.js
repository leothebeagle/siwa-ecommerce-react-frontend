import React from 'react';
import Home from './components/Home'

import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"; 
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
