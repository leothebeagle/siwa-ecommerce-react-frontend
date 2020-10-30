import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout'

const Navbar = props => {  
    return (
        <div>
            <NavLink to='/'> Home</NavLink>
            <NavLink to='/signup'> Signup</NavLink>
            <NavLink to='/login'> Login</NavLink>
            <Logout handleLogoutClick={props.handleLogoutClick} />
        </div>
    )
}

export default Navbar;