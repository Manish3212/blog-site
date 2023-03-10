import React from 'react'
import logo from "../../logo/new-logo.png";
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='n-left'>
            <img src={logo} alt="logo" />
        </div>
        <div className='n-right'>
        <div className='n-list'>
            <ul>
                <li><a/>Home</li>
                <li><a/>About</li>
                <li><a/>Blog</li>
                <li><a/>Contact</li>
            </ul>
        </div>
           
        </div>
    </div>
  )
}

export default Navbar