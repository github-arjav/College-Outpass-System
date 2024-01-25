import React from "react";

import "./StudentAppliedOutpass.css"
import pending from "../../Assets/pending.png"

const StudentAppliedOutpass = () => {
    return(
        <div className="pass-container">
            <form>
                <p>JUET Outpass</p>
                <label htmlFor="fname" className="item1">Name:
                    <input type="text" name="fname" value="Arjav Jain" className="sa-pass"/>
                </label>
                <label htmlFor="enroll"className="item2">Enrollment No. :
                    <input type="text" name="enroll" value="201B060" className="sa-pass sa-enroll"/>
                </label>
                <label htmlFor="from"className="item3">From:
                    <input type="date" name="from" value="2024-02-01" className="sa-pass sa-date"/>
                </label>
                <label htmlFor="to" className="item4">To:
                    <input type="date" name="to" value="2024-02-03" className="sa-pass sa-date"/>
                </label>
                <label htmlFor="adress"className="item5">Adress:
                    <input type="text" name="adress" value="Bhopal (M.P)" className="sa-pass"/>
                </label>
                <label htmlFor="purpose"className="item6">Purpose:
                    <input type="text" name="purpose" value="Family Function" className="sa-pass"/>
                </label>
                <input type="image" src={pending} className="item7"/>
            </form>
        </div>
    )
}

export default StudentAppliedOutpass