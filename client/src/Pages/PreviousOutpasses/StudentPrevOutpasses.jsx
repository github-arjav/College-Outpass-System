import React from "react";

import StudentApprovedOutpass from "../../Components/Outpasses/StudentApprovedOutpass"
import StudentRejectedOutpass from "../../Components/Outpasses/StudentRejectedOutpass"

import "./StudentPrevOutpasses.css"

const StudentPrevOutpasses = () => {
    return(
        <div className="s-prev">
            <h1>Find your Previous Applied Outpasses</h1>
            <div className="outpasses">
                <StudentApprovedOutpass/>
                <StudentRejectedOutpass/>
            </div>
        </div>
    )
}

export default StudentPrevOutpasses