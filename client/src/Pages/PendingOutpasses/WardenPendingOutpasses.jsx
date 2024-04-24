import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import WardenPendingOutpass from "../../Components/Outpasses/WardenPendingOutpass"
import { showWardenPendingOutpasses } from "../../actions/outpassMovement";
import WardenNavbar from "../../Components/Navbar/WardenNavbar";

import "./WardenPendingOutpasses.css"

const WardenPendingOutpasses = () => {

    const outpassList = useSelector(state => state.outpassMovementReducer.data)

    const dispatch = useDispatch()

    const User = JSON.parse(localStorage.getItem("Profile"))
    const employeeData = User.result.employee

    useEffect(() => {
        dispatch(showWardenPendingOutpasses({employee: employeeData}))
      }, [dispatch, employeeData]);

    return(
        <div className="w-pending">
            <WardenNavbar/>
            <h1>Find your Pending Outpasses</h1>
            <div className="woutpasses">
            {
                    !outpassList ? <h1>Loading...</h1> : Array.isArray(outpassList) && outpassList.length > 0 ? (
                        [...outpassList].reverse().map((outpass) => (
                            <WardenPendingOutpass outpass={outpass} key={outpass._id}/>
                        ))
                    ) : <h1>No pending outpasses found</h1>
                }
            </div>
        </div>
    )
}

export default WardenPendingOutpasses