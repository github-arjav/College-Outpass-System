import React from "react";

import StudentApprovedOutpass from "../../Components/Outpasses/StudentApprovedOutpass"
import StudentRejectedOutpass from "../../Components/Outpasses/StudentRejectedOutpass"

import "./WardenPrevOutpasses.css"

const WardenPrevOutpasses = () => {
    return(
        <div className="w-prev">
            <h1>Find your Previous Outpasses</h1>
            <div className="outpasses">
                <StudentApprovedOutpass/>
                <StudentRejectedOutpass/>
            </div>
        </div>
    )
}

export default WardenPrevOutpasses