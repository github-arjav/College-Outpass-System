import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../actions/currentUser";
import './Navbar.css'

const StudentNavbar = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  
  const navigate = useNavigate()

    const handleLogout = () => {
      navigate('/')
    }

  return (
    <div className="navbar">
        <div className="nav-item nav-text"><p>Outpass System</p></div>
        <div className="nav-item nav-links">
          <Link to='/StudentHomePage' className='content-i'>Home</Link>
          <Link to='/Form' className="content-i">Apply for Outpass</Link>
          <Link to='/StudentPendingOutpasses' className="content-i">Pending Outpasses</Link>
          <Link to='/StudentPrevOutpasses' className='content-i'>Previous Outpasses</Link>
          <button className="content-i logout" onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
}

export default StudentNavbar