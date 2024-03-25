import React from "react";
import { useNavigate } from "react-router-dom";

import "./Outpass.css"
import pending from "../../Assets/pending.png"

const StudentAppliedOutpass = ({outpass}) => {

    const navigate = useNavigate()

    const handlePassClick = () => {
        navigate("/PendingOutpassDetails")
    }

    const from = new Date(outpass.fromDate)
    const fromDate = from.toISOString().split('T')[0];
    
    const to = new Date(outpass.toDate)
    const toDate = from.toISOString().split('T')[0];

    return(
        <div className="pass-container" onClick={handlePassClick}>
            <form>
                <p>JUET Outpass</p>
                <label htmlFor="fname" className="item1">Name:
                    <input type="text" name="fname" value={outpass.name} className="sa-pass" disabled/>
                </label>
                <label htmlFor="enroll"className="item2">Enrollment No. :
                    <input type="text" name="enroll" value={outpass.enrollment} className="sa-pass sa-enroll" disabled/>
                </label>
                <label htmlFor="from"className="item3">From:
                    <input type="date" name="from" value={fromDate} className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="to" className="item4">To:
                    <input type="date" name="to" value={toDate} className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="adress"className="item5">Adress:
                    <input type="text" name="adress" value={outpass.address} className="sa-pass" disabled/>
                </label>
                <label htmlFor="purpose"className="item6">Purpose:
                    <input type="text" name="purpose" value={outpass.purpose} className="sa-pass" disabled/>
                </label>
                <input type="image" alt="pending" src={pending} className="item7" disabled/>
            </form>
        </div>
    )
}

export default StudentAppliedOutpass