import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import WardenNavbar from '../../Components/Navbar/WardenNavbar'
import { showWardenPendingOutpasses, showWardenPreviousOutpasses } from '../../actions/outpassMovement'

import "./WardenHomePage.css"

const WardenHomePage = () =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const User = JSON.parse(localStorage.getItem("Profile"))
    const employeeData = User.result.employee

    useEffect(() => {
        dispatch(showWardenPendingOutpasses({employee: employeeData}))
        dispatch(showWardenPreviousOutpasses({employee: employeeData}))
      }, [dispatch, employeeData]);

    const handleWardenPending = () => {
        dispatch(showWardenPendingOutpasses({employee: employeeData}))
        navigate('/WardenPendingOutpasses')
    }

    const handleWardenPrev = () => {
        dispatch(showWardenPreviousOutpasses({employee: employeeData}))
        navigate('/WardenPrevOutpasses')
    }

    return(
        <div className="s-home">
            <div className="bimage"></div>
            <div className="nav-bar"><WardenNavbar/></div>
            <div className="s-home-info">
                <h1>Welcome</h1>
                <h2>What do you want to do?</h2>
            </div>
            <div className="s-home-container">
                <div className="sfunction" onClick={handleWardenPending}>
                    <button>View pending Outpasses</button>
                </div>
                <div className="sfunction" onClick={handleWardenPrev}>
                    <button>View Previous Outpasses</button>
                </div>
            </div>
        </div>
    )
}

export default WardenHomePage