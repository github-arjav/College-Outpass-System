import * as api from '../api'

export const postAppliedOutpasses = (movementData) => async (dispatch) => {
    try {
        const { data } = await api.postAppliedOutpasses(movementData)
        dispatch({type: 'FETCH_APPLIED_OUTPASSES', payload: data})
    } catch (error) {
        console.error(error);
    }
}

export const sendOutpassDetails = (movementData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.sendOutpassDetails(movementData)
        dispatch({type: 'FETCH-OUTPASS-DETAILS', payload: data})
        navigate('/PendingOutpassDetails')
    } catch (error) {
        console.error(error);
    }
}

export const showWardenPendingOutpasses = (movementData) => async (dispatch) => {
    try {
        const { data } = await api.showWardenPendingOutpasses(movementData)
        dispatch({type: 'FETCH_APPLIED_OUTPASSES', payload: data})
    } catch (error) {
        console.error(error)
    }
}