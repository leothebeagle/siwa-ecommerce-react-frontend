import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux'

class SignupForm extends React.Component {
   // alot of this logic will be pulled up onne level into the <SignupPage /> component
   // which will pass the necessary data and functions as props.
   
   // that way you can just have a generic signup form, that you 
   // pass in props. ex: in SignupPage /> you would render this component:
   // <SignupForm handleChange={this.handlechange} handleSubmit={this.handleSubmit}/>
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

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({type: 'ADD_USER', payload: user})
})

export default connect(null, mapDispatchToProps)(SignupForm)