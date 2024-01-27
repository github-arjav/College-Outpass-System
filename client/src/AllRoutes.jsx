import React from "react";
import { Routes, Route } from 'react-router-dom'

import Welcome from './Pages/Welcome/Welcome';
import Warden from "./Pages/Auth/Warden";
import Student from "./Pages/Auth/Student";
import StudentHomePage from "./Pages/HomePage/StudentHomePage";
import WardenHomePage from "./Pages/HomePage/WardenHomePage";
import Form from "./Pages/OutpassForm/Form"
import StudentAppliedOutpass from "./Components/Outpasses/StudentAppliedOutpass";
import StudentPendingOutpasses from "./Pages/PendingOutpasses/StudentPendingOutpasses";
import StudentApprovedOutpass from "./Components/Outpasses/StudentApprovedOutpass";
import StudentRejectedOutpass from "./Components/Outpasses/StudentRejectedOutpass";
import StudentPrevOutpasses from "./Pages/PreviousOutpasses/StudentPrevOutpasses";
import WardenPendingOutpass from "./Components/Outpasses/WardenPendingOutpass";
import WardenPendingOutpasses from "./Pages/PendingOutpasses/WardenPendingOutpasses";
import ApprovedOutpassDetails from "./Pages/OutpassDetails/ApprovedOutpassDetails";
import RejectedOutpassDetails from "./Pages/OutpassDetails/RejectedOutpassDetails";
import PendingOutpassDetails from "./Pages/OutpassDetails/PendingOutpassDetails";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/Warden" element={<Warden/>}/>
            <Route path="/Student" element={<Student/>}/>
            <Route path="/StudentHomePage" element={<StudentHomePage />}/>
            <Route path="/WardenHomePage" element={<WardenHomePage />}/>
            <Route path="/Form" element={<Form/>}/>
            <Route path="/StudentAppliedOutpass" element={<StudentAppliedOutpass/>}/>
            <Route path="/StudentPendingOutpasses" element={<StudentPendingOutpasses/>}/>
            <Route path="/StudentApprovedOutpass" element={<StudentApprovedOutpass/>}/>
            <Route path="/StudentRejectedOutpass" element={<StudentRejectedOutpass/>}/>
            <Route path="/StudentPrevOutpasses" element={<StudentPrevOutpasses/>}/>
            <Route path="/WardenPendingOutpass" element={<WardenPendingOutpass/>}/>
            <Route path="/WardenPendingOutpasses" element={<WardenPendingOutpasses/>}/>
            <Route path="/ApprovedOutpassDetails" element={<ApprovedOutpassDetails/>}/>
            <Route path="/RejectedOutpassDetails" element={<RejectedOutpassDetails/>}/>
            <Route path="/PendingOutpassDetails" element={<PendingOutpassDetails/>}/>
        </Routes>
    )
}

export default AllRoutes