import React from "react";
import { useNavigate } from "react-router-dom";

import './Student.css'

const Student = () => {

    const navigate = useNavigate()

    const handleStudentLogin = (e) => {
        e.preventDefault()
        navigate('/StudentHomePage')
    }

    const handleStudentRegister = (e) => {
        e.preventDefault()
    }

    return(
        <div className="student">
            <div className="bimage"></div>
            <div className="slogin">
                <h1>Welcome</h1>
                <h2>Please login using your webkiosk credentials</h2>
            </div>
            <div className="s-auth-container">
                <div className="s-login-container">
                    <p>Registered Student? Login Now</p>
                    <div className="s-login-box">
                        <form className="login" onSubmit={handleStudentLogin}>
                            <input type="text" placeholder="Enrollment Number" className="s-login-inp" required/>
                            <input type="password" placeholder="Password" className="s-login-inp" required/>
                            <input type="submit" value="Login" className="s-login-btn"/>
                        </form>
                    </div>
                </div>
                <div className="s-register-container">
                    <p>Still didn't registered? Register Here</p>
                    <div className="s-register-box">
                        <form className="register" onSubmit={handleStudentRegister}>
                        <input type="text" placeholder="Full Name" className="s-register-inp" required/>
                        <input type="text" placeholder="Enrollment Number" className="s-register-inp" required/>
                        <input type="email" placeholder="Email Address (@juetguna.in)" className="s-register-inp" required/>
                        <input type="password" placeholder="Password" className="s-register-inp" required/>
                        <input type="submit" value="Register" className="s-register-btn"/>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student