import React from "react";
import {useNavigate} from "react-router-dom";

import "./StudentHomePage.css"

const StudentHomePage = () =>{

    const navigate = useNavigate()

    const handleApply = () => {
        navigate('/Form')
    }

    return(
        <div className="s-home">
            <div className="bimage"></div>
            <div className="s-home-info">
                <h1>Welcome</h1>
                <h2>What do you want to do?</h2>
            </div>
            <div className="s-home-container">
                <div className="sfunction">
                    <button onClick={handleApply}>Apply for Outpass</button>
                </div>
                <div className="sfunction">
                    <button>View pending Outpasses</button>
                </div>
                <div className="sfunction">
                    <button>View Previous Outpasses</button>
                </div>
            </div>
        </div>
    )
}

export default StudentHomePage