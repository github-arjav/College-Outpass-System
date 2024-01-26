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
        </Routes>
    )
}

export default AllRoutes