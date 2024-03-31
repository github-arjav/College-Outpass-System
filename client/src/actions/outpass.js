import * as api from '../api'

export const createOutpass = (outpassData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createOutpass(outpassData)
        dispatch({type: 'PASS', payload: data})
        navigate('/StudentHomePage')
    } catch (error) {
        console.error(error);
    }
}