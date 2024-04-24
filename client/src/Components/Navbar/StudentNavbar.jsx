import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../actions/currentUser";
import { postAppliedOutpasses, showPrevOutpasses } from '../../actions/outpassMovement';
import './Navbar.css'

const StudentNavbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const User = JSON.parse(localStorage.getItem("Profile"))
  const enrollData = User.result.enrollment

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(postAppliedOutpasses({enrollment: enrollData}))
    dispatch(showPrevOutpasses({enrollment: enrollData}))
  }, [dispatch, enrollData]);
  
  const handlePendingOutpasses = () => {
    dispatch(postAppliedOutpasses({enrollment: enrollData}))
  }

  const handlePrevOutpasses = () => {
    dispatch(showPrevOutpasses({enrollment: enrollData}))
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
          <Link to='/StudentHomePage' className='content-i'>Home</Link>
          <Link to='/Form' className="content-i">Apply for Outpass</Link>
          <Link to='/StudentPendingOutpasses' onClick={handlePendingOutpasses} className="content-i">Pending Outpasses</Link>
          <Link to='/StudentPrevOutpasses' onClick={handlePrevOutpasses} className='content-i'>Previous Outpasses</Link>
          <button className="content-i logout" onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
}

export default StudentNavbar