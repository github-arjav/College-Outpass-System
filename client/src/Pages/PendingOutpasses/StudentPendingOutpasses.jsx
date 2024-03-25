import React from "react";
import { useSelector } from "react-redux";
import StudentAppliedOutpass from "../../Components/Outpasses/StudentAppliedOutpass"
import StudentNavbar from "../../Components/Navbar/StudentNavbar"

import "./StudentPendingOutpasses.css"

const StudentPendingOutpasses = () => {

    const outpassList = useSelector(state => state.outpassReducer.data)
    
    return(
        <div className="s-pending">
            <StudentNavbar/>
            <h1>Find your Pending Outpasses</h1>
            <div className="outpasses">
                {
                    outpassList == null ? <h1>Loading...</h1> : 
                    <>
                        {
                            outpassList.slice().reverse().map((outpass) => (
                                <StudentAppliedOutpass outpass={outpass} key={outpass._id}/>
                            ))                    
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default StudentPendingOutpasses