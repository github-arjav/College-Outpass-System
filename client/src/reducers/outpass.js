const outpassReducer = (state = {data:null}, action) => {
    switch (action.type) {
        case 'PASS':
            return{ ...state }
        default:
            return state;
    }
}

export default outpassReducer