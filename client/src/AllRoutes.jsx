import React from "react";
import { Routes, Route } from 'react-router-dom'

import Welcome from './Pages/Welcome/Welcome';
import Warden from "./Pages/Auth/Warden";
import Student from "./Pages/Auth/Student";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/Warden" element={<Warden/>}/>
            <Route path="/Student" element={<Student/>}/>
        </Routes>
    )
}

export default AllRoutes