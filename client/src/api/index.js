import axios from 'axios'

const API = axios.create({baseURL: `https://college-outpass-system.onrender.com`})

export const studentVerification = (authData) => API.post('/student/verify', authData)
export const studentLogIn = (authData) => API.post('/student/login', authData)
export const studentSignUp = (authData) => API.post('/student/signup', authData)

export const wardenVerification = (authData) => API.post('/warden/verify', authData)
export const wardenSignUp = (authData) => API.post('/warden/signup', authData)
export const wardenLogIn = (authData) => API.post('/warden/login', authData)

export const createOutpass = (outpassData) => API.post('/outpass/submit', outpassData)

export const sendStudentOtp = (fpData) => API.post('/forgot-pass/send-student-otp', fpData)
export const sendWardenOtp = (fpData) => API.post('/forgot-pass/send-warden-otp', fpData)
export const verifyStudentOtp = (fpData) => API.post('/forgot-pass/verify-student-otp', fpData)
export const verifyWardenOtp = (fpData) => API.post('/forgot-pass/verify-warden-otp', fpData)
export const changeStudentPass = (fpData) => API.post('/forgot-pass/change-student-pass', fpData)
export const changeWardenPass = (fpData) => API.post('/forgot-pass/change-warden-pass', fpData)

export const postAppliedOutpasses = (movementData) => API.post('/move-outpass/post', movementData)
export const sendOutpassDetails = (movementData) => API.post('/move-outpass/send-details', movementData)
export const showWardenPendingOutpasses = (movementData) => API.post('/move-outpass/show-warden-pending', movementData)
export const approveOutpasses = (movementData) => API.post('/move-outpass/approve', movementData)
export const rejectOutpasses = (movementData) => API.post('/move-outpass/reject', movementData)
export const showWardenPreviousOutpasses = (movementData) => API.post('/move-outpass/show-prev', movementData)
export const sendPrevOutpassDetails = (movementData) => API.post('/move-outpass/send-prev-details', movementData)
export const showPrevOutpasses = (movementData) => API.post('/move-outpass/show-prev-student', movementData)