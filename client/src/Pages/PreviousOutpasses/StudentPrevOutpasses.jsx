import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentRejectedOutpass from "../../Components/Outpasses/PreviousOutpass"
import StudentNavbar from "../../Components/Navbar/StudentNavbar"
import { showPrevOutpasses } from "../../actions/outpassMovement";
import "./StudentPrevOutpasses.css"

const StudentPrevOutpasses = () => {

    const outpassList = useSelector(state => state.outpassMovementReducer.data)

    const dispatch = useDispatch()

    const User = JSON.parse(localStorage.getItem("Profile"))
    const enrollData = User.result.enrollment

    useEffect(() => {
        dispatch(showPrevOutpasses({enrollment: enrollData}))
      }, [dispatch, enrollData]);

    return(
        <div className="s-prev">
            <StudentNavbar/>
            <h1>Find your Previous Applied Outpasses</h1>
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

export default StudentPrevOutpasses