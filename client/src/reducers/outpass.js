const outpassReducer = (state = {data:null}, action) => {
    switch (action.type) {
        case 'PASS':
            return{ ...state }
        case 'FETCH_ALL_OUTPASSES':
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default outpassReducer