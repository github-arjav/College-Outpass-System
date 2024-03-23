import * as api from '../api'

export const studentVerification = (authData) => async (dispatch) => { 
    try {
        const { data } = await api.studentVerification(authData)
        dispatch({type: 'VERIFY', data})
    } catch (error) {
        console.error(error);
    }
}

export const studentSignUp = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.studentSignUp(authData)
        dispatch({type: 'AUTH', data})
        navigate('/StudentHomePage')
    } catch (error) {
        console.error(error);
    }
}

export const studentLogIn = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.studentLogIn(authData)
        dispatch({type: 'AUTH', data})
        navigate('/StudentHomePage')
    } catch (error) {
        console.error(error);
    }
}