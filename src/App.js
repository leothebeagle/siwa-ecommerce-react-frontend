import { connect } from 'react-redux';

import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"; 

import {logoutUser} from './actions/userActions';
import {fetchItems} from './actions/itemActions';
import React, { useEffect } from 'react';
import Home from './containers/Home'
import Navbar from './components/Navbar'
import SignupPage from './containers/SignupPage';
import LoginPage from './containers/LoginPage';
import ItemsList from './containers/ItemsList';
import Cart from './components/Cart';


function App(props) {
  //Whenever this component renders, (either on mounting or updating) make a call to the API
  useEffect(()=> {
      props.fetchItems()
  })

  return (
    <Router>
      <div className="App">
        <Navbar handleLogoutClick={props.handleLogoutClick} user={props.user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/items" component={ItemsList} />
          <Route path="/cart" component={Cart} />

        </Switch>
        
        {/* <ItemsList items={this.props.items}/> */}                       
      </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({       
  handleLogoutClick: () => dispatch(logoutUser()),
  fetchItems: () => dispatch(fetchItems())
})

const mapStateToProps = state => ({
  user: state.user,
  // items: state.items
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// start building out your itemActions
// make an itemsReducer
// incorporate that reducer into your overall reducer

// import an action from itemActions
// mapDispatchToProps, dispatch the action you imported to add items to state.
// pass that as props. 