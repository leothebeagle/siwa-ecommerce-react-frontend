import React from 'react';
import Navbar from '../containers/Navbar'

class SignupForm extends React.Component {
    
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
        console.log(event.target.firstName);
    }
    
    render() {
        return(
            <div>
                <Navbar />
                <h4>Signup form</h4>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName} placeholder="First Name" />
                    <input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName} placeholder="Last Name"/>
                    <input onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="email"/>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="password"/>
                    <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.password_confirmation} placeholder="password confirmation"/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;