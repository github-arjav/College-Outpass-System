import React from "react";
import { useSelector } from "react-redux";
import StudentAppliedOutpass from "../../Components/Outpasses/StudentAppliedOutpass"
import StudentNavbar from "../../Components/Navbar/StudentNavbar"

import "./StudentPendingOutpasses.css"

const StudentPendingOutpasses = () => {

    const outpassList = useSelector(state => state.outpassMovementReducer.data)
    
    
    return(
        <div className="s-pending">
            <StudentNavbar/>
            <h1>Find your Pending Outpasses</h1>
            <div className="outpasses">
                {
                    !outpassList ? <h1>Loading...</h1> : Array.isArray(outpassList) && outpassList.length > 0 ? (
                        [...outpassList].reverse().map((outpass) => (
                            <StudentAppliedOutpass outpass={outpass} key={outpass._id}/>
                        ))
                    ) : <h1>No pending outpasses found</h1>
                }
            </div>
        </div>
    )
}

export default StudentPendingOutpasses