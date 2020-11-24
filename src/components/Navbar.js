import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Navbar = props => {  
    return (
        <header>
            <img src="https://source.unsplash.com/WLUHO9A_xik/30x30" />
            <nav>
                <ul className="nav-links">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/items'>Shop</NavLink></li>
                    <li> <NavLink to='/cart'>Cart</NavLink> </li>

                    { props.user.loggedIn ?
                        <li><Logout handleLogoutClick={props.handleLogoutClick} /> </li> :
                        <>
                            <li> <NavLink to='/login'> Login</NavLink> </li>
                            <li> <NavLink to='/signup'> Signup</NavLink> </li>
                        </>
                    }
                    
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;