import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Navbar = props => {  
    return (
        <div className="navbar-container">
            <NavLink to='/' className="logo-container"> <img src={"./assets/woodland.svg"} className="logo-image"></img> </NavLink>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to='/items'>Shop</NavLink></li>
                    <li> <NavLink to='/cart'>Cart</NavLink> </li>

                    { props.user.loggedIn ?
                        <li><Logout handleLogoutClick={props.handleLogoutClick} /> </li> :
                        <>
                            <li> <NavLink to='/login'> <button className="button">Login</button></NavLink> </li>
                            <li> <NavLink to='/signup'> <button className="button">Signup</button></NavLink> </li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;