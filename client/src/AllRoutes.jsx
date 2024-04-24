import React from "react";
import { Routes, Route } from 'react-router-dom'

import Welcome from './Pages/Welcome/Welcome';
import Warden from "./Pages/Auth/Warden";
import Student from "./Pages/Auth/Student";
import StudentHomePage from "./Pages/HomePage/StudentHomePage";
import WardenHomePage from "./Pages/HomePage/WardenHomePage";
import Form from "./Pages/OutpassForm/Form"
import StudentPendingOutpasses from "./Pages/PendingOutpasses/StudentPendingOutpasses";
import StudentPrevOutpasses from "./Pages/PreviousOutpasses/StudentPrevOutpasses";
import WardenPendingOutpasses from "./Pages/PendingOutpasses/WardenPendingOutpasses";
import PreviousOutpassDetails from "./Pages/OutpassDetails/PreviousOutpassDetails";
import PendingOutpassDetails from "./Pages/OutpassDetails/PendingOutpassDetails";
import WardenPendingOutpassDetails from "./Pages/OutpassDetails/WardenPendingOutpassDetails";
import WardenPrevOutpasses from "./Pages/PreviousOutpasses/WardenPrevOutpasses";
import StudentForgotPassword from "./Pages/ForgotPassword/StudentForgotPassword";
import WardenForgotPassword from "./Pages/ForgotPassword/WardenForgotPassword";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/Warden" element={<Warden/>}/>
            <Route path="/Student" element={<Student/>}/>
            <Route path="/StudentHomePage" element={<StudentHomePage />}/>
            <Route path="/WardenHomePage" element={<WardenHomePage />}/>
            <Route path="/Form" element={<Form/>}/>
            <Route path="/StudentPendingOutpasses" element={<StudentPendingOutpasses/>}/>
            <Route path="/StudentPrevOutpasses" element={<StudentPrevOutpasses/>}/>
            <Route path="/WardenPendingOutpasses" element={<WardenPendingOutpasses/>}/>
            <Route path="/PreviousOutpassDetails" element={<PreviousOutpassDetails/>}/>
            <Route path="/PendingOutpassDetails" element={<PendingOutpassDetails/>}/>
            <Route path="/WardenPendingOutpassDetails" element={<WardenPendingOutpassDetails/>}/>
            <Route path="/WardenPrevOutpasses" element={<WardenPrevOutpasses/>}/>
            <Route path="/StudentForgotPassword" element={<StudentForgotPassword/>}/>
            <Route path="/WardenForgotPassword" element={<WardenForgotPassword/>}/>
        </Routes>
    )
}

export default AllRoutes