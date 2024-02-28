import React from "react";

import StudentAppliedOutpass from "../../Components/Outpasses/StudentAppliedOutpass"
import StudentNavbar from "../../Components/Navbar/StudentNavbar"

import "./StudentPendingOutpasses.css"

const StudentPendingOutpasses = () => {
    return(
        <div className="s-pending">
            <StudentNavbar/>
            <h1>Find your Pending Outpasses</h1>
            <div className="outpasses">
                <StudentAppliedOutpass />
                <StudentAppliedOutpass />
            </div>
        </div>
    )
}

export default StudentPendingOutpasses