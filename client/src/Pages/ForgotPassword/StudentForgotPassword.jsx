import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'

import { sendStudentOtp, verifyStudentOtp, changeStudentPass } from '../../actions/forgotPassword'

import './ForgotPassword.css'

const StudentForgotPassword = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isDetailSub, setIsDetailSub] = useState(false)
    const [isOtpSub, setIsOtpSub] = useState(false)
    const [enrollment, setEnrollment] = useState('')
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState(0)
    const [newPass, setNewPass] = useState('')
    const [rePass, setRePass] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!isDetailSub){
            const isValidDomain = email.endsWith('@juetguna.in');
            if (!isValidDomain) {
                toast.error("Invalid email, please enter JUET email Id")
                return;
            }
            const response = await dispatch(sendStudentOtp({enrollment, email}))
            if(response){
                setIsDetailSub(true) 
            }
        }else{
            const response = await dispatch(verifyStudentOtp({enrollment, email, otp}))
            if(response){
                setIsOtpSub(true)
            }
        }
    }

    useEffect(() => {
        if (newPass === rePass) {
            setPassword(newPass);
        }
    }, [newPass, rePass]);

    const handleFpSubmit = (e) => {
        e.preventDefault()
        if(newPass === rePass){
            dispatch(changeStudentPass({enrollment, email, password}, navigate))
        }else{
            toast.warning("Passwords in both fields must match")
        }
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
                        <input type="password" value={newPass} onChange={(e) => {setNewPass(e.target.value)}} className="fp-inp" required/>
                        <label htmlFor="re-pass" className="fp-label">Re-type new Password:</label>
                        <input type="password" value={rePass} onChange={(e) => {setRePass(e.target.value)}} className="fp-inp" required/>
                        <input type="submit" value="Change" className="fp-submit" />
                    </form>
                ) : ( 
                    <form className="fp-form" onSubmit={handleSubmit}>
                        <label htmlFor="enroll" className="fp-label">Enter your Enrollment Number:</label>
                        <input type="text" name="enroll" id='enroll' className="fp-inp fp-up" placeholder='eg. 201B999' onChange={(e) => {setEnrollment(e.target.value.toUpperCase())}} required/>
                        <label htmlFor="email" className="fp-label">Enter your Email Id:</label>
                        <input type="email" name='email' id='email' className="fp-inp" placeholder='eg. 201B999@juetguna.in' onChange={(e) => {setEmail(e.target.value)}} required/>
                        {isDetailSub &&
                            <>
                                <label htmlFor="otp" className="fp-label">Enter recived OTP:</label>
                                <input type="number" name="otp" id="otp" className="fp-inp" placeholder='eg. 9999' onChange={(e) => {setOtp(e.target.value)}} required/>
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

export default StudentForgotPassword