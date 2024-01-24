import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Form.css"

const Form = () => {

    const navigate = useNavigate()

    const [select, setSelect] = useState(0)
    const [selectedValue, setSelectedValue] = useState('default')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleHostelSelect = (e) => {
        e.preventDefault()
        if(selectedValue !== 'default')
        setSelect(1)
    }

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
            <div className="hostel">
                <form onSubmit={handleHostelSelect} method="get">
                    <label htmlFor="hostels">Select your Hostel:</label><br />
                    <select name="hostels" id="hostels" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
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
                    {selectedValue !== 'default' && (
                         <input type="submit" value="Submit"/>
                    )}
                   
                    
                </form>
            </div>
            {select === 1 && (
                <div className="form-box">
                    <form className="outpass-form" onSubmit={handleApply}>
                        <p className="form-fld form-text">Fill out this form to apply for outpass</p>
                        <input type="text" name="fname" placeholder="Full Name"  className="form-fld inp fname" required/>
                        <input type="text" name="enroll" placeholder="Enrollment Number" className="form-fld inp enr" required/>
                        <input type="number" name="room" placeholder="Room Number" className="form-fld inp room" required/>
                        <input type="number" name="days" placeholder="Duration" className="form-fld inp days"  required />
                        <label htmlFor="from" className="form-fld from" >From:
                            <input type="date" id="from" name="from" placeholder="From" className="inp date" required/>
                        </label>
                        <label htmlFor="to" className="form-fld to" >To:
                            <input type="date" id="to" name="to" placeholder="To" className="inp date" required/>
                        </label>
                        <input type="text" name="purpose" placeholder="Purpose of Leave" className="form-fld inp purpose" required/>
                        <input type="text" name="adress" placeholder="Adress on Leave" className="form-fld inp address" required/>
                        <label htmlFor="consent" className="form-fld consent" >Parent Consent:
                            <input type="file" id="consent" name="consent" accept=".png, .jpg, .jpeg, .pdf" className="file" required/>
                        </label>
                        <input type="submit" value="Apply" name="apply" className="form-fld sub-btn" />
                        {isSubmitted && (
                            <p className="ackn">Outpass successfully applied. Redirecting in 3 seconds...</p>
                        )}
                    </form>
                </div>
            )}
        </div>
    )
} 

export default Form