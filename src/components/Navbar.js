import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout'

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'> Home</NavLink>
                <NavLink to='/signup'> Signup</NavLink>
                <Logout />
            </div>
        )
    }
}

export default Navbar;