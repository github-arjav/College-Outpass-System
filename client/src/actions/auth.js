import * as api from '../api'
import { setCurrentUser } from './currentUser'
import { toast } from 'react-toastify';

export const studentVerification = (authData) => async (dispatch) => { 
    try {
        const { data } = await api.studentVerification(authData)
        dispatch({type: 'VERIFY', data})
        toast.success(data.message);
        return true;
    } catch (error) {
        toast.error("User already exist")
    }
}

export const studentSignUp = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.studentSignUp(authData)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        toast.success("OTP Verified Succesfully")
        navigate('/StudentHomePage')
    } catch (error) {
        toast.error("Invalid OTP, try again")
    }
}

export const studentLogIn = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.studentLogIn(authData)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/StudentHomePage')
    } catch (error) {
        toast.error("Invalid Credentials")
    }
}

export const wardenVerification = (authData) => async (dispatch) => { 
    try {
        const { data } = await api.wardenVerification(authData)
        dispatch({type: 'VERIFY', data})
        toast.success(data.message);
        return true
    } catch (error) {
        toast.error("User already exist")
    }
}

export const wardenSignUp = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.wardenSignUp(authData)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        toast.success("OTP Verified Succesfully")
        navigate('/WardenHomePage')
    } catch (error) {
        toast.error("Invalid OTP, try again")
    }
}

export const wardenLogIn = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.wardenLogIn(authData)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/WardenHomePage')
    } catch (error) {
        toast.error("Invalid Credentials")
    }
}