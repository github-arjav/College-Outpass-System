import React from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAppliedOutpasses, showPrevOutpasses } from '../../actions/outpassMovement'
import StudentNavbar from "../../Components/Navbar/StudentNavbar";

import "./StudentHomePage.css"

const StudentHomePage = () =>{

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const User = JSON.parse(localStorage.getItem("Profile"))

    const handleApply = () => {
        navigate('/Form')
    }

    const handleStudentPending = () => {
        try {
            dispatch(postAppliedOutpasses({enrollment: User.result.enrollment}))
            navigate('/StudentPendingOutpasses')
        } catch (error) {
            console.error(error);
        }
    }

    const handleStudentPrevious = () => {
        dispatch(showPrevOutpasses({enrollment: User.result.enrollment}))
        navigate('/StudentPrevOutpasses')
    }

    return(
        <div className="s-home">
            <div className="bimage"></div>
            <div className="nav-bar"><StudentNavbar/></div>
            <div className="s-home-info">
                <h1>Welcome</h1>
                <h2>What do you want to do?</h2>
            </div>
            <div className="s-home-container">
                <div className="sfunction">
                    <button onClick={handleApply}>Apply for Outpass</button>
                </div>
                <div className="sfunction">
                    <button onClick={handleStudentPending}>View pending Outpasses</button>
                </div>
                <div className="sfunction">
                    <button onClick={handleStudentPrevious}>View Previous Outpasses</button>
                </div>
            </div>
        </div>
    )
}

export default StudentHomePage