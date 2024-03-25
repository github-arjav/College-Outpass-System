import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

import './ForgotPassword.css'

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [isDetailSub, setIsDetailSub] = useState(false)
    const [isOtpSub, setIsOtpSub] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!isDetailSub){
            setIsDetailSub(true)
        }else{
            setIsOtpSub(true)
        }
    }

    const handleFpSubmit = (e) => {
        e.preventDefault()
        navigate('/StudentHomePage')
    }

  return (
    <div className="fp">
        <div className="bimage"></div>
        <div className="fp-info">
            <h1>Forgot your Password?...</h1>
            <h2>Don't worry, reset it here</h2>
        </div>
        <div className="fp-box">
            {
                isOtpSub ? (
                    <form className="fp-form" onSubmit={handleFpSubmit}>
                        <label htmlFor="pass" className="fp-label">Enter new Password:</label>
                        <input type="text" className="fp-inp" required/>
                        <label htmlFor="re-pass" className="fp-label">Re-type new Password:</label>
                        <input type="text" className="fp-inp" required/>
                        <input type="submit" value="Change" className="fp-submit" />
                    </form>
                ) : ( 
                    <form className="fp-form" onSubmit={handleSubmit}>
                        <label htmlFor="enroll" className="fp-label">Enter your Enrollment Number:</label>
                        <input type="text" name="enroll" id='enroll' className="fp-inp" placeholder='eg. 201B999' required/>
                        <label htmlFor="email" className="fp-label">Enter your Email Id:</label>
                        <input type="email" name='email' id='email' className="fp-inp" placeholder='eg. 201B999@juetguna.in' required/>
                        {isDetailSub &&
                            <>
                                <label htmlFor="otp" className="fp-label">Enter recived OTP:</label>
                                <input type="number" name="otp" id="otp" className="fp-inp" placeholder='eg. 999' required/>
                            </>
                        }
                        <input type="submit" value={isDetailSub ? "Verify" : "Submit"} className="fp-submit" />
                    </form>
                )
            }
        </div>
    </div>
  )
}

export default ForgotPassword