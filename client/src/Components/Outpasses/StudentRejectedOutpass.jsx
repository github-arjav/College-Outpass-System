import React from "react";
import {useNavigate} from "react-router-dom"

import "./Outpass.css"
import rejected from "../../Assets/rejected.png"

const StudentRejectedOutpass = () => {

    const navigate = useNavigate()

    const handlePassClick = () => {
        navigate("/RejectedOutpassDetails")
    }

    return(
        <div className="pass-container" onClick={handlePassClick}>
            <form>
                <p>JUET Outpass</p>
                <label htmlFor="fname" className="item1">Name:
                    <input type="text" name="fname" value="Arjav Jain" className="sa-pass" disabled/>
                </label>
                <label htmlFor="enroll"className="item2">Enrollment No. :
                    <input type="text" name="enroll" value="201B060" className="sa-pass sa-enroll" disabled/>
                </label>
                <label htmlFor="from"className="item3">From:
                    <input type="date" name="from" value="2024-02-01" className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="to" className="item4">To:
                    <input type="date" name="to" value="2024-02-03" className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="adress"className="item5">Adress:
                    <input type="text" name="adress" value="Bhopal (M.P)" className="sa-pass" disabled/>
                </label>
                <label htmlFor="purpose"className="item6">Purpose:
                    <input type="text" name="purpose" value="Family Function" className="sa-pass" disabled/>
                </label>
                <input type="image" alt="pending" src={rejected} className="item7" disabled/>
            </form>
        </div>
    )
}

export default StudentRejectedOutpass