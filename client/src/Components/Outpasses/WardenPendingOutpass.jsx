import React from "react";
import {useNavigate} from "react-router-dom"

import "./WardenOutpass.css"

const WardenPendingOutpass = () => {

    const navigate = useNavigate()

    const handlePassClick = () => {
        navigate("/")
    }

    return(
        <div className="passContainer" onClick={handlePassClick}>
            <form>
                <p>JUET Outpass</p>
                <label htmlFor="fname" className="item-1">Name:
                    <input type="text" name="fname" value="Arjav Jain" className="sa-pass"/>
                </label>
                <label htmlFor="enroll"className="item-2">Enrollment No. :
                    <input type="text" name="enroll" value="201B060" className="sa-pass sa-enroll"/>
                </label>
                <label htmlFor="from"className="item-3">From:
                    <input type="date" name="from" value="2024-02-01" className="sa-pass sa-date"/>
                </label>
                <label htmlFor="to" className="item-4">To:
                    <input type="date" name="to" value="2024-02-03" className="sa-pass sa-date"/>
                </label>
                <label htmlFor="adress"className="item-5">Adress:
                    <input type="text" name="adress" value="Bhopal (M.P)" className="sa-pass"/>
                </label>
                <label htmlFor="purpose"className="item-6">Purpose:
                    <input type="text" name="purpose" value="Family Function" className="sa-pass"/>
                </label>
                <input type="button" value="Approve" className="outpassbtn item-7 approve"/>
                <input type="button" value="Reject" className="outpassbtn item-8 reject"/>
            </form>
        </div>
    )
}

export default WardenPendingOutpass