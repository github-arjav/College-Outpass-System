import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

import './Navbar.css'

const WardenNavbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="navbar">
        <div className="nav-item nav-text"><p>Outpass System</p></div>
        <div className="nav-item nav-links">
          <Link to='/WardenHomePage' className='content-i'>Home</Link>
          <Link to='/WardenPendingOutpasses' className="content-i">Pending Outpasses</Link>
          <Link to='/WardenPrevOutpasses' className='content-i'>Previous Outpasses</Link>
          <button className="content-i logout" onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
}

export default WardenNavbar