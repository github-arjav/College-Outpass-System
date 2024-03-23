import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'

import "./Auth.css"

const Warden = () => {

    const navigate = useNavigate()

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleWardenLogin = (e) => {
        e.preventDefault()
        navigate('/WardenHomePage')
    }

    const handleWardenRegister = (e) => {
        setIsSubmitted(true)
    }

    const handleOtpSubmitted = (e) => {
        e.preventDefault()
        navigate("/WardenHomePage")
    }

    const handleHostelChange = () => {

    }

    const options = [
        { value: 'H-1', label: 'H-1' },
        { value: 'H-2', label: 'H-2' },
        { value: 'H-3', label: 'H-3' },
        { value: 'H-4', label: 'H-4' },
        { value: 'H-5', label: 'H-5' },
        { value: 'H-6', label: 'H-6' },
        { value: 'H-7', label: 'H-7' },
        { value: 'H-8', label: 'H-8' },
        { value: 'H-9', label: 'H-9' },
        { value: 'H-10', label: 'H-10' },
        { value: 'H-11', label: 'H-11' },
        { value: 'H-12', label: 'H-12' },
        { value: 'H-13', label: 'H-13' },
        { value: 'H-14', label: 'H-14' },
        { value: 'H-15', label: 'H-15' },
        { value: 'H-16', label: 'H-16' },
        { value: 'H-17', label: 'H-17' },
        { value: 'H-18', label: 'H-18' },
        { value: 'H-19', label: 'H-19' },
        { value: 'H-20', label: 'H-20' },
        { value: 'H-21', label: 'H-21' },
        { value: 'H-22', label: 'H-22' },
        { value: 'Sharda Bhawan', label: 'Sharda Bhawan' },
      ];

    return(
        <div className="person">
            <div className="bimage"></div>
            <div className="auth">
                <h1>Welcome</h1>
                <h2>Please login using your webkiosk credentials</h2>
            </div>
            <div className="auth-container">
                {isSubmitted ? (
                    <div className="auth-container-otp">
                    <h2>Email Verification</h2>
                    <div className="otp-box">
                        <p>Please check your email id and enter the OTP</p>
                        <form onSubmit={handleOtpSubmitted}>
                            <input type="number" name="otp" placeholder="Enter the OTP" className="auth-inp otp-inp" required/>
                            <input type="submit" value="Verify" className="auth-btn otp-btn"/>
                        </form>
                    </div>
                </div>
                ):(
                    <>
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
                            <label htmlFor="hostel">Hostel No.
                                <Select 
                                onChange={handleHostelChange}
                                options={options}
                                isMulti
                                />            
                            </label>
                            <input type="submit" value="Register" className="auth-btn"/>
                        </form>
                    </div>
                </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Warden