import React from 'react';

class SignUp extends React.Component {
    
    state = {
        firstName: "Aziz",
        lastName: "Kosber",
        password: "",
        passwordConfirmation: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render() {
        return(
            <div>
                <h4>Signup form</h4>
                <form>
                    <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName} />
                    <input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName} />
                </form>
            </div>
        )
    }
}

export default SignUp;