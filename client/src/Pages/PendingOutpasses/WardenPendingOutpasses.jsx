import React from "react";

import WardenPendingOutpass from "../../Components/Outpasses/WardenPendingOutpass"

import "./WardenPendingOutpasses.css"

const WardenPendingOutpasses = () => {
    return(
        <div className="w-pending">
            <h1>Find your Pending Outpasses</h1>
            <div className="woutpasses">
                <WardenPendingOutpass/>
                <WardenPendingOutpass/>
            </div>
        </div>
    )
}

export default WardenPendingOutpasses