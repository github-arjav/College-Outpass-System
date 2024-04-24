import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentRejectedOutpass from "../../Components/Outpasses/PreviousOutpass"
import WardenNavbar from "../../Components/Navbar/WardenNavbar";
import { showWardenPreviousOutpasses } from "../../actions/outpassMovement";

import "./WardenPrevOutpasses.css"

const WardenPrevOutpasses = () => {

    const outpassList = useSelector(state => state.outpassMovementReducer.data)

    const dispatch = useDispatch()
    const User = JSON.parse(localStorage.getItem("Profile"))
    const employeeData = User.result.employee

    useEffect(() => {
        dispatch(showWardenPreviousOutpasses({employee: employeeData}))
      }, [dispatch, employeeData]);

    return(
        <div className="w-prev">
            <WardenNavbar/>
            <h1>Find your Previous Outpasses</h1>
            <div className="outpasses">
            {
                !outpassList ? <h1>Loading...</h1> : Array.isArray(outpassList) && outpassList.length > 0 ? (
                    [...outpassList].reverse().map((outpass) => (
                        <StudentRejectedOutpass outpass={outpass} key={outpass._id}/>
                    ))
                ) : <h1>No previous outpasses found</h1>
            }
            </div>
        </div>
    )
}

export default WardenPrevOutpasses