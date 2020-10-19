import React, { Component } from 'react';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <h1>Homepage</h1>
            </div>
        )
    }
}

export default Home;