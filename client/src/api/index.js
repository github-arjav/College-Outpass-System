import axios from 'axios'

const API = axios.create({baseURL: `http://localhost:5000/`})

export const studentVerification = (authData) => API.post('./student/verify', authData)
export const studentLogIn = (authData) => API.post('./student/login', authData)
export const studentSignUp = (authData) => API.post('./student/signup', authData)