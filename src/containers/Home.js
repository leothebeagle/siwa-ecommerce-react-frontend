import React, { Component } from 'react';
import Hero from '../components/Hero';
import { connect } from 'react-redux';
import {logoutUser} from '../actions/userActions';
import Navbar from '../components/Navbar'


class Home extends Component {
    
    render() {
        return(
            <div className="home-container">
                <Navbar handleLogoutClick={this.props.handleLogoutClick} user={this.props.user} />
                <Hero />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({       
    handleLogoutClick: () => dispatch(logoutUser())
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);