import React from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'

import { sendWOutpassDetails } from "../../actions/outpassMovement";

import "./WardenOutpass.css"

const WardenPendingOutpass = ({outpass}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlePassClick = () => {
        const outpassId = outpass.outpassId
        dispatch(sendWOutpassDetails({ outpassId }, navigate))
    }

    const from = new Date(outpass.fromDate)
    const fromDate = from.toISOString().split('T')[0];
    
    const to = new Date(outpass.toDate)
    const toDate = to.toISOString().split('T')[0];

    return(
        <div className="passContainer" onClick={handlePassClick}>
            <form>
                <p>JUET Outpass</p>
                <label htmlFor="fname" className="item-1">Name:
                    <input type="text" name="fname" value={outpass.name} className="sa-pass" disabled/>
                </label>
                <label htmlFor="enroll"className="item-2">Enrollment No. :
                    <input type="text" name="enroll" value={outpass.enrollment} className="sa-pass sa-enroll" disabled/>
                </label>
                <label htmlFor="from"className="item-3">From:
                    <input type="date" name="from" value={fromDate} className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="to" className="item-4">To:
                    <input type="date" name="to" value={toDate} className="sa-pass sa-date" disabled/>
                </label>
                <label htmlFor="adress"className="item-5">Adress:
                    <input type="text" name="adress" value={outpass.address} className="sa-pass" disabled/>
                </label>
                <label htmlFor="purpose"className="item-6">Purpose:
                    <input type="text" name="purpose" value={outpass.purpose} className="sa-pass" disabled/>
                </label>
                <input type="button" value="Details >>>" className="outpassbtn item-8 detail"/>
            </form>
        </div>
    )
}

export default WardenPendingOutpass