import React from 'react';

class SignUp extends React.Component {
    
    state = {
        firstName: "Aziz",
        lastName: "Kosber"
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
                    <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleChange(event)} />
                    <input type="text" name="lastName" value={this.state.lastName} />
                </form>
            </div>
        )
    }
}

export default SignUp;