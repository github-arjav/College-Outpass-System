import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import './Auth.css'

const Student = () => {

    const navigate = useNavigate()

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleStudentLogin = (e) => {
        e.preventDefault()
        navigate('/StudentHomePage')
    }

    const handleStudentRegister = (e) => {
        e.preventDefault()
        if (selectedOption !== 'default') {
            setIsSubmitted(true)
        } else {
            alert('Please select an option other than default');
        }
    }

    const handleOtpSubmitted = (e) => {
        e.preventDefault()
        navigate("/StudentHomePage")
    }

    const [selectedOption, setSelectedOption] = useState('default');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

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
                                    <label htmlFor="hostel">Hostel No.
                                        <select name="hostel" id="hostel" className="auth-inp auth-select" value={selectedOption} onChange={handleSelectChange}>
                                            <option value="default">--select--</option>
                                            <option value="H-1">H-1</option>
                                            <option value="H-2">H-2</option>
                                            <option value="H-3">H-3</option>
                                            <option value="H-4">H-4</option>
                                            <option value="H-5">H-5</option>
                                            <option value="H-6">H-6</option>
                                            <option value="H-7">H-7</option>
                                            <option value="H-8">H-8</option>
                                            <option value="H-9">H-9</option>
                                            <option value="H-10">H-10</option>
                                            <option value="H-11">H-11</option>
                                            <option value="H-12">H-12</option>
                                            <option value="H-13">H-13</option>
                                            <option value="H-14">H-14</option>
                                            <option value="H-15">H-15</option>
                                            <option value="H-16">H-16</option>
                                            <option value="H-17">H-17</option>
                                            <option value="H-18">H-18</option>
                                            <option value="H-19">H-19</option>
                                            <option value="H-20">H-20</option>
                                            <option value="H-21">H-21</option>
                                            <option value="H-22">H-22</option>
                                        </select>
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

export default Student