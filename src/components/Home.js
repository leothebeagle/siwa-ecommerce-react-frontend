import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Home extends Component {
    render() {
        return(
            <div>
                <h1>Homepage</h1>
                <Navbar />
            </div>
        )
    }
}

export default Home;