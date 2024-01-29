import React from "react";
import { useNavigate } from "react-router-dom";

import './Auth.css'

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
        <div className="person">
            <div className="bimage"></div>
            <div className="auth">
                <h1>Welcome</h1>
                <h2>Please login using your webkiosk credentials</h2>
            </div>
            <div className="auth-container">
                <div className="auth-container-2">
                    <p>Registered Student? Login Now</p>
                    <div className="auth-box">
                        <form className="auth-2" onSubmit={handleStudentLogin}>
                            <input type="text" placeholder="Enrollment Number" className="auth-inp" required/>
                            <input type="password" placeholder="Password" className="auth-inp" required/>
                            <input type="submit" value="Login" className="auth-btn"/>
                        </form>
                    </div>
                </div>
                <div className="auth-container-2">
                    <p>Still didn't registered? Register Here</p>
                    <div className="auth-box">
                        <form className="auth-2" onSubmit={handleStudentRegister}>
                        <input type="text" placeholder="Full Name" className="auth-inp" required/>
                        <input type="text" placeholder="Enrollment Number" className="auth-inp" required/>
                        <input type="email" placeholder="Email Address (@juetguna.in)" className="auth-inp" required/>
                        <input type="password" placeholder="Password" className="auth-inp" required/>
                        <input type="submit" value="Register" className="auth-btn"/>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student