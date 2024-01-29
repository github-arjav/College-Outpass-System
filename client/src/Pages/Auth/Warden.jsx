import React from "react";
import { useNavigate } from "react-router-dom";

import "./Auth.css"

const Warden = () => {

    const navigate = useNavigate()

    const handleWardenLogin = (e) => {
        e.preventDefault()
        navigate('/WardenHomePage')
    }

    const handleWardenRegister = (e) => {
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
                    <p>Already Registered? Login Now</p>
                    <div className="auth-box">
                        <form className="auth-2" onSubmit={handleWardenLogin}>
                            <input type="text" placeholder="Employee Number" className="auth-inp" required/>
                            <input type="password" placeholder="Password" className="auth-inp" required/>
                            <input type="submit" value="Login" className="auth-btn"/>
                        </form>
                    </div>
                </div>
                <div className="auth-container-2">
                    <p>Still didn't registered? Register Here</p>
                    <div className="auth-box">
                        <form className="auth-2" onSubmit={handleWardenRegister}>
                            <input type="text" placeholder="Full Name" className="auth-inp" required/>
                            <input type="text" placeholder="Employee Number" className="auth-inp" required/>
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

export default Warden