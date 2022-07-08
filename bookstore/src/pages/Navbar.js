// import PropTypes from 'prop-types'
import React from 'react'
import sitelogo from './site-logo.svg'
import { Link } from 'react-router-dom'
import cartlogo from './Style-guide/HTML - TatvaSoft/images/cart.svg'

function Navbar(){
    return (
        <nav>
        <div className="logo"><img src={sitelogo} alt="" /></div>
        <div className="nav-elements">
            <ul>
            <li><Link to="/login">Login</Link></li>
                <li>&nbsp;&nbsp;&nbsp;|</li>
                <li><Link to="/register">Register</Link></li>
            </ul>
            <Link to="/cart">
                <div className="cart">
                    <img src={cartlogo} alt="" />
                    <span>0</span>
                </div>
            </Link>
        </div>
    </nav>
    )
  }


export default Navbar