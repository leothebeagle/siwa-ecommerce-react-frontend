import React, { Component } from 'react';
import SignUp from './SignUp';

class Home extends Component {
    render() {
        return(
            <div>
                <h1>Homepage</h1>
                <SignUp />
            </div>
        )
    }
}

export default Home;