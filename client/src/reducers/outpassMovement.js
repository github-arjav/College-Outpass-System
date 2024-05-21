const outpassMovementReducer = (state = {data:null}, action) => {
    switch (action.type) {
        case 'FETCH_APPLIED_OUTPASSES':
            return { ...state, data: action.payload }
        case 'FETCH-OUTPASS-DETAILS':
            return { ...state, data: action.payload }
        case 'FETCH_PREV_OUTPASSES':
            return { ...state, data: action.payload }
        case 'MOVE_APPROVED_OUTPASS':
            return { ...state, data: action.payload }
        case 'MOVE_REJECTED_OUTPASS':
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default outpassMovementReducer