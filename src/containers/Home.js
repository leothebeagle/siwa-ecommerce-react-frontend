import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

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
    handleLogoutClick: () => console.log("I am dispatching logout now.")
})

export default connect(null, mapDispatchToProps)(Home);