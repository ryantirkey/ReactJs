import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink to='/'> <li>Login</li></NavLink>
            <NavLink to='/home'> <li>Home</li></NavLink>
            <NavLink to='/register'> <li>Register</li></NavLink>
            <NavLink to='/contact'> <li>Contact</li></NavLink>
            <NavLink to='/profile'> <li>Profile</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar