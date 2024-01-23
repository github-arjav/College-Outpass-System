import React from "react";
import { useNavigate } from "react-router-dom";

import './Warden.css'

const Warden = () => {

    const navigate = useNavigate()

    const handleWardenLogin = (e) => {
        e.preventDefault()
        navigate('/WardenHomePage')
    }

    return(
        <div className="warden">
            <div className="bimage"></div>
            <div className="wlogin">
                <h1>Welcome</h1>
                <h2>Please login using your webkiosk credentials</h2>
            </div>
            <div className="wlogin-box">
                <p>Login for Employees</p>
                <form className="wlogin-form" onSubmit={handleWardenLogin}>
                    <input type="text" id="empid" name="empid" placeholder="Employee Id" className="wlogin-fld" required/><br />
                    <input type="password" id="emppass" name="emppass" placeholder="Password" className="wlogin-fld" required/><br />
                    <input type="submit" value="login" name="login" className="wlogin-btn" />
                </form>
            </div>
        </div>
    )
}

export default Warden