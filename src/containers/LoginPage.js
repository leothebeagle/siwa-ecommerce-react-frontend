import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router";

import LoginForm from '../components/LoginForm';
import {loginUser} from '../actions/userActions';

import {logoutUser} from '../actions/userActions';
import Navbar from '../components/Navbar';

class LoginPage extends React.Component {

    state = {
        email:"",
        password: "",
    }

    
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.loginUser(this.state);
    }   
    
    render() {
        const { email, password } = this.state;

        if(this.props.user.loggedIn) {
            return <Redirect to="/" />
        }
                
        return(
            <>
                <Navbar handleLogoutClick={this.props.handleLogoutClick} user={this.props.user} />
                <div className="login-container">
                    <LoginForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}  email={email} password={password} />
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: userCredentials => dispatch(loginUser(userCredentials)),
    handleLogoutClick: () => dispatch(logoutUser())
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);