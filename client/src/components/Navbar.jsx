/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/fitrevolution.png'

const Navbar = () => {
  return (
    <header>
       <div className="container">
        <Link to="/">
           <img src={logo} alt="logo" />
        </Link>
       </div>
      
    </header>
  )
}

export default Navbar
