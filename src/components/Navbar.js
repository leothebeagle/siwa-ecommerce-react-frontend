import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Navbar = props => {  
    return (
        <header>
            <NavLink to='/'> <img src={"./assets/tree.svg"} className="logo"></img> </NavLink>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to='/items'>Shop</NavLink></li>
                    <li> <NavLink to='/cart'>Cart</NavLink> </li>

                    { props.user.loggedIn ?
                        <li><Logout handleLogoutClick={props.handleLogoutClick} /> </li> :
                        <>
                            <li> <NavLink to='/login'> <button>Login</button></NavLink> </li>
                            <li> <NavLink to='/signup'> <button>Signup</button></NavLink> </li>
                        </>
                    }
                    
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;