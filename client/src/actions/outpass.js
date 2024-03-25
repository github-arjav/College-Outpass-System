import * as api from '../api'

export const createOutpass = (outpassData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createOutpass(outpassData)
        dispatch({type: 'PASS', payload: data})
        dispatch(getAllOutpasses())
        navigate('/StudentHomePage')
    } catch (error) {
        console.error(error);
    }
}

export const getAllOutpasses = () => async (dispatch) => {
    try {
        const { data } =await api.getAllOutpasses()
        dispatch({type: 'FETCH_ALL_OUTPASSES', payload: data})
    } catch (error) {
        console.error(error);
    }
}