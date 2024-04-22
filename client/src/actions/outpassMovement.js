import * as api from '../api'
import { toast } from 'react-toastify';

export const postAppliedOutpasses = (movementData) => async (dispatch) => {
    try {
        const { data } = await api.postAppliedOutpasses(movementData)
        dispatch({type: 'FETCH_APPLIED_OUTPASSES', payload: data})
    } catch (error) {
        toast.error("Something went wrong...")
    }
}

export const sendOutpassDetails = (movementData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.sendOutpassDetails(movementData)
        dispatch({type: 'FETCH-OUTPASS-DETAILS', payload: data})
        navigate('/PendingOutpassDetails')
    } catch (error) {
        toast.error("Something went wrong...")
    }
}

export const sendWOutpassDetails = (movementData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.sendOutpassDetails(movementData)
        dispatch({type: 'FETCH-OUTPASS-DETAILS', payload: data})
        navigate('/WardenPendingOutpassDetails')
    } catch (error) {
        toast.error("Something went wrong...")
    }
}

export const showWardenPendingOutpasses = (movementData) => async (dispatch) => {
    try {
        const { data } = await api.showWardenPendingOutpasses(movementData)
        dispatch({type: 'FETCH_APPLIED_OUTPASSES', payload: data})
    } catch (error) {
        toast.error("Something went wrong...")
    }
}

export const approveOutpass = (movementData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.moveOutpasses(movementData)
        dispatch({type: 'MOVE_OUTPASS', payload: data})
        navigate('/WardenHomePage')
        toast.success('Outpass approved succesfully')
    } catch (error) {
        toast.error("Something went wrong...")
    }
}

export const rejectOutpass = (movementData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.moveOutpasses(movementData)
        dispatch({type: 'MOVE_OUTPASS', payload: data})
        navigate('/WardenHomePage')
        toast.success("Outpass rejected successfully")
    } catch (error) {
        toast.error("Something went wrong...")
    }
}