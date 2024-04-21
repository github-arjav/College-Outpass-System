import React from "react";
import { useSelector } from "react-redux";

import WardenPendingOutpass from "../../Components/Outpasses/WardenPendingOutpass"
import WardenNavbar from "../../Components/Navbar/WardenNavbar";

import "./WardenPendingOutpasses.css"

const WardenPendingOutpasses = () => {

    const outpassList = useSelector(state => state.outpassMovementReducer.data)

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