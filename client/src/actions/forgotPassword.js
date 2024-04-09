import * as api from '../api'
import { toast } from 'react-toastify';

export const sendStudentOtp = (fpData) => async (dispatch) => {
    try {
        const { data } = await api.sendStudentOtp(fpData)
        dispatch({type: 'SEND', payload: data})
        toast.success(data.message)
        return true
    } catch (error) {
        toast.error("User not found")
    }
}

export const sendWardenOtp = (fpData) => async (dispatch) => {
    try {
        const { data } = await api.sendWardenOtp(fpData)
        dispatch({type: 'SEND', payload: data})
        toast.success(data.message)
        return true
    } catch (error) {
        toast.error("User not found")
    }
}

export const verifyStudentOtp = (fpData) => async (dispatch) => {
    try {
        const { data } = await api.verifyStudentOtp(fpData)
        dispatch({type: 'VERIFY', payload: data})
        toast.success(data.message)
        return true
    } catch (error) {
        toast.error("Incorrect OTP")
    }
}

export const verifyWardenOtp = (fpData) => async (dispatch) => {
    try {
        const { data } = await api.verifyWardenOtp(fpData)
        dispatch({type: 'VERIFY', payload: data})
        toast.success(data.message)
        return true
    } catch (error) {
        toast.error("Incorrect OTP")
    }
}

export const changeStudentPass = (fpData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.changeStudentPass(fpData)
        dispatch({type: 'CHANGE-PASS', payload: data})
        navigate('/Student')
        toast.success(data.message)
        return true
    } catch (error) {
        toast.error("Something, went wrong...")
    }
}

export const changeWardenPass = (fpData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.changeWardenPass(fpData)
        dispatch({type: 'CHANGE-PASS', payload: data})
        navigate('/Warden')
        toast.success(data.message)
        return true
    } catch (error) {
        toast.error("Something, went wrong...")
    }
}