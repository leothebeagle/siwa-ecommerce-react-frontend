import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router";

import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import {loginUser} from '../actions/userActions';

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

        if(this.props.user.redirectTo) {
            console.log("inside the redirect")
            return <Redirect to='/' /> 
        };
        
        return(
            <div>
                <Navbar />
                <LoginForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}  email={email} password={password} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: userCredentials => dispatch(loginUser(userCredentials))
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);