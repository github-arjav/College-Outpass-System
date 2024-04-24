import React from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { sendPrevOutpassDetails } from "../../actions/outpassMovement";
import "./Outpass.css"
import rejected from "../../Assets/rejected.png"
import approved from "../../Assets/approved.png"

const PreviousOutpass = ({outpass}) => {

    const isApproved = outpass.evaluation

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const from = new Date(outpass.fromDate)
    const fromDate = from.toISOString().split('T')[0];
    
    const to = new Date(outpass.toDate)
    const toDate = to.toISOString().split('T')[0];

    const handlePassClick = () => {
        const outpassId = outpass.outpassId
        dispatch(sendPrevOutpassDetails({ outpassId }, navigate))
    }

    return(
        <div className="pass-container" onClick={handlePassClick}>
            <form>
                <p>JUET Outpass</p>
                <label htmlFor="fname" className="item1">Name:
                    <input type="text" name="fname" value={outpass.name} className="sa-pass" disabled/>
                </label>
                <label htmlFor="enroll"className="item2">Enrollment No. :
                    <input type="text" name="enroll" value={outpass.enrollment} className="sa-pass sa-enroll" disabled/>
                </label>
                <label htmlFor="from"className="item3">From:
                    <input type="date" name="from" value={fromDate} className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="to" className="item4">To:
                    <input type="date" name="to" value={toDate} className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="adress"className="item5">Adress:
                    <input type="text" name="adress" value={outpass.address} className="sa-pass" disabled/>
                </label>
                <label htmlFor="purpose"className="item6">Purpose:
                    <input type="text" name="purpose" value={outpass.purpose} className="sa-pass" disabled/>
                </label>
                <input type="image" alt="pending" src={isApproved?approved:rejected} className="item7" disabled/>
            </form>
        </div>
    )
}

export default PreviousOutpass