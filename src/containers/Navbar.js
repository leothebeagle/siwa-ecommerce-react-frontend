import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/signup'> Signup</NavLink>
                <NavLink to='/'> Home</NavLink>
            </div>
        )
    }
}

export default Navbar;