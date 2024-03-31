import { combineReducers } from "redux";
import authReducer from "./auth";
import outpassReducer from './outpass'
import currentUserReducer from './currentUser'
import outpassMovementReducer from './outpassMovement'

export default combineReducers({
    authReducer, outpassReducer, currentUserReducer, outpassMovementReducer
})