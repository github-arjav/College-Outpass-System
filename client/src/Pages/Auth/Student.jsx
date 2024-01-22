import React from "react";
import { useNavigate } from "react-router-dom";

import './Student.css'

const Student = () => {

    const navigate = useNavigate()

    const handleStudentlogin = (e) => {
        e.preventDefault()
    }

    return(
        <div className="student">
            <div className="bimage"></div>
            <div className="slogin">
                <h1>Welcome</h1>
                <h2>Please login using your webkiosk credentials</h2>
            </div>
            <div className="slogin-box">
                <p>Login for Student</p>
                <form className="slogin-form" onSubmit={handleStudentlogin}>
                    <input type="text" id="enroll" name="enroll" placeholder="Enrollment Number" className="slogin-fld" required/><br />
                    <input type="date" id="dob" name="dob" placeholder="Date of Birth" className="slogin-fld" required/><br />
                    <input type="password" id="emppass" name="emppass" placeholder="Password" className="slogin-fld" required/><br />
                    <input type="submit" value="login" name="login" className="slogin-btn"/>
                </form>
            </div>
        </div>
    )
}

export default Student