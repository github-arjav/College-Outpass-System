import * as api from '../api'
import { toast } from 'react-toastify';

export const createOutpass = (outpassData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createOutpass(outpassData)
        dispatch({type: 'PASS', payload: data})
        toast.success("Outpass Applied Successfully")
        navigate('/StudentHomePage')
        return true
    } catch (error) {
        toast.error("Failed to apply Outpass")
    }
}