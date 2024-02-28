import React, { useState } from "react";

import "./Form.css"
import StudentNavbar from "../../Components/Navbar/StudentNavbar";

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleApply = (e) => {
        e.preventDefault()

        setIsSubmitted(true)

        setTimeout(() => {
            window.location.href = '/StudentHomePage';
        }, 3000)
    }

    return(
        <div className="form">
            <div className="bimage"></div>
            <div className="nav-bar"><StudentNavbar/></div>
            <div className="form-box">
                <form className="outpass-form" onSubmit={handleApply}>
                    <p className="form-text">Fill out this form to apply for outpass</p>
                    <input type="text" name="fname" value="Arjav Jain"  className="inp fname" required disabled/>
                    <input type="text" name="enroll" value="201B060" className="inp enr" required disabled/>
                    <input type="number" name="room" placeholder="Room Number" className="inp room" required/>
                    <input type="number" name="days" placeholder="Duration" className="inp days"  required />
                    <label htmlFor="from" className="from" >From:
                        <input type="date" id="from" name="from" placeholder="From" className="inp date" required/>
                    </label>
                    <label htmlFor="to" className="to" >To:
                        <input type="date" id="to" name="to" placeholder="To" className="inp date" required/>
                    </label>
                    <input type="text" name="hostel" value="H-22" className="inp hostel-no" disabled/>
                    <input type="text" name="purpose" placeholder="Purpose of Leave" className="inp purpose" required/>
                    <input type="text" name="adress" placeholder="Adress on Leave" className="inp address" required/>
                    <label htmlFor="consent" className="consent" >Parent Consent:
                        <input type="file" id="consent" name="consent" accept=".png, .jpg, .jpeg, .pdf" className="file" required/>
                    </label>
                    <input type="submit" value="Apply" name="apply" className="sub-btn" />
                    {isSubmitted && (
                        <p className="ackn">Outpass applied successfully. Redirecting in 3 seconds...</p>
                    )}
                </form>
            </div>
        </div>
    )
} 

export default Form