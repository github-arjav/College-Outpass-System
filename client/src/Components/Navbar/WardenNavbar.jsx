import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../actions/currentUser";
import { showWardenPendingOutpasses, showWardenPreviousOutpasses } from '../../actions/outpassMovement'
import './Navbar.css'

const WardenNavbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const User = JSON.parse(localStorage.getItem("Profile"))
  const employeeData = User.result.employee

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(showWardenPendingOutpasses({employee: employeeData}))
    dispatch(showWardenPreviousOutpasses({employee: employeeData}))
  }, [dispatch, employeeData]);
  
  const handlePendingOutpasses = () => {
    dispatch(showWardenPendingOutpasses({employee: employeeData}))
  }

  const handlePreviousOutpasses = () => {
    dispatch(showWardenPreviousOutpasses({employee: employeeData}))
  }
  
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
          <Link to='/WardenPendingOutpasses' onClick={handlePendingOutpasses} className="content-i">Pending Outpasses</Link>
          <Link to='/WardenPrevOutpasses' onClick={handlePreviousOutpasses} className='content-i'>Previous Outpasses</Link>
          <button className="content-i logout" onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
}

export default WardenNavbar