import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

import {logoutUser} from '../actions/userActions'

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar handleLogoutClick={this.props.handleLogoutClick} />
                <h1>Homepage</h1>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleLogoutClick: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Home);