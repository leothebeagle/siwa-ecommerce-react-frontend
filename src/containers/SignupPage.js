import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import SignupForm from '../components/SignupForm';
import {registerUser} from '../actions/userActions';

import {logoutUser} from '../actions/userActions';
import Navbar from '../components/Navbar';

const SignupPage = (props) => {

    const [formState, setFormState] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password:"",
        passwordConfirmation:""
    });
    
    const handleChange = event => {
        setFormState({...formState,
            [event.target.name] : event.target.value
        })
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        props.registerUser(formState);
    };   
    
    const { firstName, lastName, email, password, passwordConfirmation } = formState;
    
    if(props.user.loggedIn) {
        return <Redirect to="/" />
    }

    return(
        <>
            <Navbar handleLogoutClick={props.handleLogoutClick} user={props.user} />
            <div className="signup-container">
                <SignupForm handleSubmit={handleSubmit} handleChange={handleChange} firstName={firstName} lastName={lastName} email={email} password={password} passwordConfirmation={passwordConfirmation} />
            </div>
        </>
    )
}
    
const mapDispatchToProps = dispatch => ({
    registerUser: user => dispatch(registerUser(user)),
    handleLogoutClick: () => dispatch(logoutUser())
})

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);


