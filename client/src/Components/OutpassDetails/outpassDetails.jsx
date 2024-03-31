import React from 'react'

import './outpassDetails.css'

const outpassDetails = () => {
  return (
    <div className="details-box">
        <form className="details-form">
            <label htmlFor="fname" className='detail-1'>Name:
                <input type="text" value="Arjav Jain" className='details-inp' disabled/>
            </label>
            <label htmlFor="enroll" className='detail-2'>Er. No:
                <input type="text" value="201B060" className='details-inp details-width-fix' disabled/>
            </label>
            <label htmlFor="room" className='detail-3'>Room No:
                <input type="number" value="85" className='details-inp details-width-fix' disabled/>
            </label>
            <label htmlFor="duration" className='detail-4'>Duration:
                <input type="number" value="3" className='details-inp details-width-fix' disabled/>
            </label>
            <label htmlFor="from" className='detail-5'>From:
                <input type="date" value="2024-02-01" className='details-inp details-date' disabled/>
            </label>
            <label htmlFor="to" className='detail-6'>To:
                <input type="date" value="2024-02-03" className='details-inp details-date' disabled/>
            </label>
            <label htmlFor="purpose" className='detail-7'>Purpose of Leave:
                <input type="text" value="Family Function" className='details-inp details-width-fix' disabled/>
            </label>
            <label htmlFor="address" className='detail-8'>Address while on leave:
                <input type="text" value="Bhopal (M.P)" className='details-inp' disabled/>
            </label>
            <label htmlFor="consent" className='detail-9'>Parent Consent:
                <input type="file" disabled/>
            </label>
            <label htmlFor="status" className='detail-10'>Status:
                <input type="button" value="Pending" className='pending' disabled/>
            </label>
            <label htmlFor="hostel" className='detail-11'>Hostel:
                <input type="text" value="H-22" className='details-inp details-width-fix' disabled/>
            </label>
        </form>
    </div>
  )
}

export default outpassDetails