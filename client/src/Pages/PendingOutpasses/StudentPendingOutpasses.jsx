import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentAppliedOutpass from "../../Components/Outpasses/StudentAppliedOutpass"
import StudentNavbar from "../../Components/Navbar/StudentNavbar"
import { postAppliedOutpasses } from "../../actions/outpassMovement";

import "./StudentPendingOutpasses.css"

const StudentPendingOutpasses = () => {

    const outpassList = useSelector(state => state.outpassMovementReducer.data)

    const dispatch = useDispatch()

    const User = JSON.parse(localStorage.getItem("Profile"))
    const enrollData = User.result.enrollment

    useEffect(() => {
        dispatch(postAppliedOutpasses({enrollment: enrollData}))
      }, [dispatch, enrollData]);
    
    
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