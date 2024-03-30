import axios from 'axios'

const API = axios.create({baseURL: `http://localhost:5000/`})

export const studentVerification = (authData) => API.post('./student/verify', authData)
export const studentLogIn = (authData) => API.post('./student/login', authData)
export const studentSignUp = (authData) => API.post('./student/signup', authData)

export const wardenVerification = (authData) => API.post('./warden/verify', authData)
export const wardenSignUp = (authData) => API.post('./warden/signup', authData)
export const wardenLogIn = (authData) => API.post('./warden/login', authData)

export const createOutpass = (outpassData) => API.post('./outpass/submit', outpassData)
export const getAllOutpasses = (enrollData) => API.post('/outpass/post', enrollData)