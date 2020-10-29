import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router";

import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';
import {registerUser} from '../actions/userActions';

class SignupPage extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email:"",
        password: "",
        passwordConfirmation: ""
    }

    
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.registerUser(this.state);

    }   
    
    render() {
        const { firstName, lastName, email, password, passwordConfirmation } = this.state;

        if(this.props.user.redirectTo) {
            console.log("inside the redirect")
            return <Redirect to='/' /> 
        };
        
        return(
            <div>
                <Navbar />
                <SignupForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} firstName={firstName} lastName={lastName} email={email} password={password} passwordConfirmation={passwordConfirmation} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    registerUser: user => dispatch(registerUser(user))
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);