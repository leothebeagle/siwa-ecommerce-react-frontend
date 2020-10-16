import React from 'react';

class SignUp extends React.Component {
    
    state = {
        firstName: "Aziz",
        lastName: "Kosber"
    }
    
    render() {
        return(
            <div>
                <h4>Signup form</h4>
                <form>
                    <input type="text" name="firstName" value={this.state.firstName} />
                    <input type="text" name="lastName" value={this.state.lastName} />
                </form>
            </div>
        )
    }
}

export default SignUp;