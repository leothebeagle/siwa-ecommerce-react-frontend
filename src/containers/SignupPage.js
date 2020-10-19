import React from 'react';
import { connect } from 'react-redux'

import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';
import addUser from '../actions/userActions';

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
        this.props.addUser(this.state)
    }
    
    render() {
        const { firstName, lastName, email, password, passwordConfirmation } = this.state
        return(
            <div>
                <Navbar />
                <SignupForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} firstName={firstName} lastName={lastName} email={email} password={password} passwordConfirmation={passwordConfirmation} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(SignupPage)