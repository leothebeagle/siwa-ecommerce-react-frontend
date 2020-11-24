import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Navbar = props => {  
    return (
        <header>
            <h3>SIWA</h3>
            <nav className="navbar">
                <ul>
                    <li><NavLink to='/' className="navbar-link">Home</NavLink></li>
                    <li><NavLink to='/items' className="navbar-link">Shop</NavLink></li>

                    { props.user.loggedIn ?
                        <li><Logout handleLogoutClick={props.handleLogoutClick} /> </li> :
                        <>
                            <li> <NavLink to='/login' className="navbar-link"> Login</NavLink> </li>
                            <li> <NavLink to='/signup' className="navbar-link"> Signup</NavLink> </li>
                        </>
                    }
                    <li> <NavLink to='/cart'>Cart</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;