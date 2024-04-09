import * as api from '../api'

export const postAppliedOutpasses = (movementData) => async (dispatch) => {
    try {
        const { data } = await api.postAppliedOutpasses(movementData)
        dispatch({type: 'FETCH_APPLIED_OUTPASSES', payload: data})
    } catch (error) {
        console.error(error);
    }
}