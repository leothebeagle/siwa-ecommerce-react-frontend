import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class UserDashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h3>User Dashboard - loggedIn</h3>
            </div>
        )
    }
}

export default UserDashboard;