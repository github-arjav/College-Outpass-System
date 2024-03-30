import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../actions/currentUser";
import { getAllOutpasses } from '../../actions/outpass';
import './Navbar.css'

const StudentNavbar = () => {

  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("Profile"))
  const enrollData = User.result.enrollment
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(getAllOutpasses({enrollment: enrollData}))
  }, [dispatch, enrollData]);
  
  const navigate = useNavigate()
  
  const handlePendingOutpasses = () => {
    dispatch(getAllOutpasses({enrollment: enrollData}))
  }

    const handleLogout = () => {
      navigate('/')
    }

  return (
    <div className="navbar">
        <div className="nav-item nav-text"><p>Outpass System</p></div>
        <div className="nav-item nav-links">
          <Link to='/StudentHomePage' className='content-i'>Home</Link>
          <Link to='/Form' className="content-i">Apply for Outpass</Link>
          <Link to='/StudentPendingOutpasses' onClick={handlePendingOutpasses} className="content-i">Pending Outpasses</Link>
          <Link to='/StudentPrevOutpasses' className='content-i'>Previous Outpasses</Link>
          <button className="content-i logout" onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
}

export default StudentNavbar