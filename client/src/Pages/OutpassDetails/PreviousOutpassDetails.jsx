import React from 'react'
import { useSelector } from 'react-redux';

import "./OutpassDetails.css"

const PreviousOutpassDetails = () => {

    const outpassDetails = useSelector(state => state.outpassMovementReducer.data);

    const isApproved = outpassDetails.evaluation

    const from = new Date(outpassDetails.fromDate)
    const fromDate = from.toLocaleDateString();
    
    const to = new Date(outpassDetails.toDate)
    const toDate = to.toLocaleDateString();

    console.log(fromDate);

  return (
    <div className='details'>
        <div className="bimage"></div>
            <div className="details-text">
                <h2>Outpass Details</h2>
            </div>
            <div className="details-box">
                <form className="details-form">
                    <label htmlFor="fname" className='detail-1'>Name:
                        <input type="text" value={outpassDetails.name}className='details-inp' disabled/>
                    </label>
                    <label htmlFor="enroll" className='detail-2'>Er. No:
                        <input type="text" value={outpassDetails.enrollment} className='details-inp details-width-fix' disabled/>
                    </label>
                    <label htmlFor="room" className='detail-3'>Room No:
                        <input type="number" value={outpassDetails.room} className='details-inp details-width-fix' disabled/>
                    </label>
                    <label htmlFor="duration" className='detail-4'>Duration:
                        <input type="number" value={outpassDetails.duration} className='details-inp details-width-fix' disabled/>
                    </label>
                    <label htmlFor="from" className='detail-5'>From:
                        <input type="date" value={fromDate} className='details-inp details-date' disabled/>
                    </label>
                    <label htmlFor="to" className='detail-6'>To:
                        <input type="date" value={toDate} className='details-inp details-date' disabled/>
                    </label>
                    <label htmlFor="purpose" className='detail-7'>Purpose of Leave:
                        <input type="text" value={outpassDetails.purpose} className='details-inp details-width-fix' disabled/>
                    </label>
                    <label htmlFor="address" className='detail-8'>Address while on leave:
                        <input type="text" value={outpassDetails.address} className='details-inp' disabled/>
                    </label>
                    <label htmlFor="consent" className='detail-9'>Parent Consent:
                        <input type="file" disabled/>
                    </label>
                    <label htmlFor="status" className='detail-10'>Status:
                        {
                            isApproved ? 
                            <input type="button" value="Approved" className='status s-approved' disabled/> :
                            <input type="button" value="Rejected" className='status s-rejected' disabled/> 
                        }
                    </label>
                    <label htmlFor="hostel" className='detail-11'>Hostel:
                        <input type="text" value="H-22" className='details-inp details-width-fix' disabled/>
                        
                    </label>
                </form>
            </div>
    </div>
  )
}

export default PreviousOutpassDetails