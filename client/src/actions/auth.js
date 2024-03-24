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

export const wardenVerification = (authData) => async (dispatch) => { 
    try {
        const { data } = await api.wardenVerification(authData)
        dispatch({type: 'VERIFY', data})
    } catch (error) {
        console.error(error);
    }
}

export const wardenSignUp = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.wardenSignUp(authData)
        dispatch({type: 'AUTH', data})
        navigate('/WardenHomePage')
    } catch (error) {
        console.error(error);
    }
}

export const wardenLogIn = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.wardenLogIn(authData)
        dispatch({type: 'AUTH', data})
        navigate('/StudentHomePage')
    } catch (error) {
        console.error(error);
    }
}