const forgotPassReducer = (state = {data:null}, action) => {
    switch (action.type) {
        case 'SEND':
            return { ...state, data: action.payload }
        case 'VERIFY':
            return { ...state, data: action.payload }
        case 'CHANGE-PASS':
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default forgotPassReducer