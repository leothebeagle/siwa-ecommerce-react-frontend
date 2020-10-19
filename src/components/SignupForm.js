import React from 'react';
// import Navbar from './Navbar';
import { connect } from 'react-redux'

class SignupForm extends React.Component {
   // alot of this logic will be pulled up onne level into the <SignupPage /> component
   // which will pass the necessary data and functions as props.
   
   // that way you can just have a generic signup form, that you 
   // pass in props. ex: in SignupPage /> you would render this component:
   // <SignupForm handleChange={this.handlechange} handleSubmit={this.handleSubmit}/>
    // state = {
    //     firstName: "",
    //     lastName: "",
    //     email:"",
    //     password: "",
    //     passwordConfirmation: ""
    // }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.addUser(this.state)
    // }
    
    render() {
        const {
            handleChange,
            handleSubmit
        } = this.props
        
        return(
            <div>
                {/* <Navbar /> */}
                <h4>Signup form</h4>
                <form onSubmit={handleSubmit} >
                    <input onChange={handleChange} type="text" name="firstName" value={this.props.firstName} placeholder="First Name" />
                    <input onChange={handleChange} type="text" name="lastName" value={this.props.lastName} placeholder="Last Name"/>
                    <input onChange={handleChange} type="email" name="email" value={this.props.email} placeholder="email"/>
                    <input onChange={handleChange} type="password" name="password" value={this.props.password} placeholder="password"/>
                    <input onChange={handleChange} type="password" name="passwordConfirmation" value={this.props.password_confirmation} placeholder="password confirmation"/>
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