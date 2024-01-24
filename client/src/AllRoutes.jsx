import React from "react";
import { Routes, Route } from 'react-router-dom'

import Welcome from './Pages/Welcome/Welcome';
import Warden from "./Pages/Auth/Warden";
import Student from "./Pages/Auth/Student";
import StudentHomePage from "./Pages/HomePage/StudentHomePage";
import WardenHomePage from "./Pages/HomePage/WardenHomePage";
import Form from "./Pages/OutpassForm/Form"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/Warden" element={<Warden/>}/>
            <Route path="/Student" element={<Student/>}/>
            <Route path="/StudentHomePage" element={<StudentHomePage />}/>
            <Route path="/WardenHomePage" element={<WardenHomePage />}/>
            <Route path="/Form" element={<Form/>}/>
        </Routes>
    )
}

export default AllRoutes