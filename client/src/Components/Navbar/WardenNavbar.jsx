import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../actions/currentUser";

import './Navbar.css'

const WardenNavbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const User = JSON.parse(localStorage.getItem("Profile"))

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
      navigate('/')
      setCurrentUser(null)
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