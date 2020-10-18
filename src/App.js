import React from 'react';
import Home from './components/Home'

import {
  BrowserRouter as Router, 
  Route, 
} from "react-router-dom"; 
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignupForm} />
      </div>
    </Router>
  );
}

export default App;
